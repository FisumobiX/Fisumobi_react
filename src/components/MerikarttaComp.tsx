import React, { useEffect, useRef, useState } from 'react';
import 'ol/ol.css';
import XYZ from 'ol/source/XYZ';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import WMTS, { optionsFromCapabilities } from 'ol/source/WMTS';
import WMTSCapabilities from 'ol/format/WMTSCapabilities';
import { fromLonLat } from 'ol/proj';
import proj4 from 'proj4';
import { register } from 'ol/proj/proj4';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import LineString from 'ol/geom/LineString';
import { Style, Circle as CircleStyle, Fill, Stroke, Icon } from 'ol/style';
import { defaults as defaultControls, ScaleLine, Attribution } from 'ol/control';
import { defaults as defaultInteractions } from 'ol/interaction';
import Control from 'ol/control/Control';
import { FaCrosshairs } from "react-icons/fa6";

proj4.defs(
  'EPSG:3067',
  '+proj=utm +zone=35 +ellps=GRS80 +units=m +no_defs'
);
register(proj4);

interface Props {
  apiKey: string;
  settingsOpen: boolean;
  setSettingsOpen: (v: boolean) => void;
}

// Kompassikontrolli komponentin ulkopuolella
class CompassControl extends Control {
  private container: HTMLDivElement;
  private img: HTMLImageElement;

  constructor() {
    const container = document.createElement('div');
    container.className = 'compass-control';

    const url = `${import.meta.env.BASE_URL}icons/navigation.png`;
    const img = document.createElement('img');
    img.src = url;
    img.width = 30;
    img.height = 30;
    img.className = 'compass-icon';

    container.appendChild(img);

    super({ element: container });

    this.container = container;
    this.img = img;
  }

  setRotation(angle: number) {
    // 🔥 pyöritetään vain kuvaa, ei wrapperia
    this.img.style.transform = `rotate(${angle}rad)`;
  }

  setVisible(visible: boolean) {
    this.container.style.display = visible ? 'flex' : 'none';
  }
}

const MerikarttaComp: React.FC<Props> = ({ apiKey, settingsOpen, setSettingsOpen }) => {
  
  const mapRef = useRef<HTMLDivElement>(null);
  const locateBtnRef = useRef<HTMLButtonElement>(null);
  const mapInstance = useRef<Map | null>(null);
  const compassControlRef = useRef<CompassControl | null>(null);
  const lastHeadingRef = useRef(0);

  const userSourceRef = useRef(new VectorSource());
  const userLayerRef = useRef(
    new VectorLayer({
      source: userSourceRef.current,
      zIndex: 9999
    })
  );
  const userFeatureRef = useRef(new Feature(new Point([0, 0])));
  const headingStyleRef = useRef(
    new Style({
      image: new Icon({
        src: '/arrow-up.svg',
        scale: 0.7,
        rotation: 0
      })
    })
  );
  const headingFeatureRef = useRef(new Feature(new Point([0, 0])));
  const routeFeatureRef = useRef(new Feature(new LineString([])));

  const [compassVisible, setCompassVisible] = useState<boolean>(() => {
    const saved = localStorage.getItem("compassVisible");
    return saved === "0" ? false : true;
  });
  const [compassSupported, setCompassSupported] = useState<boolean | null>(null);

  // HUOM: nämä ei saa olla let muuttujia renderissä, vaan ref tai state.
  const followRef = useRef(false);
  const routeCoordsRef = useRef<number[][]>([]);

  const initMap = async () => {
    const userSource = userSourceRef.current;
    const userLayer = userLayerRef.current;
    const userFeature = userFeatureRef.current;
    const headingStyle = headingStyleRef.current;
    const headingFeature = headingFeatureRef.current;
    const routeFeature = routeFeatureRef.current;

    userFeature.setStyle(
      new Style({
        image: new CircleStyle({
          radius: 7,
          fill: new Fill({ color: 'rgba(0,136,255,0.9)' }),
          stroke: new Stroke({ color: '#fff', width: 2 })
        })
      })
    );
    userSource.addFeature(userFeature);

    headingFeature.setStyle(headingStyle);
    userSource.addFeature(headingFeature);

    routeFeature.setStyle(
      new Style({
        stroke: new Stroke({
          color: 'rgba(0,136,255,0.7)',
          width: 3
        })
      })
    );
    userSource.addFeature(routeFeature);

    const layers: TileLayer<WMTS>[] = [];

    // Traficom
    try {
      const traficomRes = await fetch(
        'https://julkinen.traficom.fi/rasteripalvelu/wmts?SERVICE=WMTS&REQUEST=GetCapabilities'
      );
      const traficomCaps = new WMTSCapabilities().read(await traficomRes.text());

      traficomCaps.Contents.Layer.forEach((layer: any) => {
        if (!layer.Identifier.includes('Merikarttasarjat') && !layer.Identifier.includes('Veneilykartat')) return;
        const options = optionsFromCapabilities(traficomCaps, {
          layer: layer.Identifier,
          matrixSet: 'ETRS89_TM35-FIN'
        });
        if (options) {
          layers.push(new TileLayer({ source: new WMTS(options) }));
        }
      });
    } catch (err) {
      console.warn('Traficom fetch error', err);
    }

    // MML
    try {
      const mmlRes = await fetch(
        `https://avoin-karttakuva.maanmittauslaitos.fi/avoin/wmts/1.0.0/WMTSCapabilities.xml?api-key=${apiKey}`
      );
      const mmlText = await mmlRes.text();
      const mmlCaps = new WMTSCapabilities().read(mmlText);

      const mmlOptions = optionsFromCapabilities(mmlCaps, {
        layer: 'maastokartta',
        matrixSet: 'ETRS-TM35FIN'
      });

      if (mmlOptions) {
        const originalLoad = mmlOptions.tileLoadFunction;
        mmlOptions.tileLoadFunction = (tile: any, src: string) => {
          const newSrc = src.includes('?') ? `${src}&api-key=${apiKey}` : `${src}?api-key=${apiKey}`;
          if (originalLoad) originalLoad(tile, newSrc);
          else tile.getImage().src = newSrc;
        };

        mmlOptions.tilePixelRatio = window.devicePixelRatio || 1;

        const mmlSource = new WMTS({
          ...mmlOptions,
          attributions: `
            <div>
              © Maanmittauslaitos<br/>
              © Traficom<br/>
              © Kartverket
            </div>
          `
        });

        const mmlLayer = new TileLayer({
          source: mmlSource,
          opacity: 1,
          zIndex: 0
        });

        layers.unshift(mmlLayer);
      }
    } catch (err) {
      console.warn('MML fetch error', err);
    }

    // Kartverket
    const norwegianLayer = new TileLayer({
      source: new XYZ({
        url: 'https://cache.kartverket.no/v1/wmts/1.0.0/sjokartraster/default/webmercator/{z}/{y}/{x}.png',
        crossOrigin: 'anonymous'
      }),
      opacity: 0.9,
      zIndex: 5
    });

    // Kompassi-instanssi vain kerran
    if (!compassControlRef.current) {
      compassControlRef.current = new CompassControl();
    }

    mapInstance.current = new Map({
      target: mapRef.current!,
      layers: [...layers, norwegianLayer, userLayer],
      view: new View({
        projection: 'EPSG:3067',
        center: [500000, 7000000],
        zoom: 7,
        minZoom: 6,
        maxZoom: 14,
        rotation: 0,
        constrainRotation: true
      }),
      interactions: defaultInteractions({
         altShiftDragRotate: false, pinchRotate: false
      }),
      controls: defaultControls({ attribution: false }).extend([
        new ScaleLine(),
        new Attribution({ collapsible: true }),
        compassControlRef.current
      ])
    });

    navigator.geolocation.watchPosition(
      pos => {
        const coords3067 = fromLonLat([pos.coords.longitude, pos.coords.latitude], 'EPSG:3067');
        userFeature.getGeometry()?.setCoordinates(coords3067);
        headingFeature.getGeometry()?.setCoordinates(coords3067);

        const headingDeg = pos.coords.heading || 0;
        const headingRad = (-headingDeg) * Math.PI / 180;

        lastHeadingRef.current = headingRad;
        headingStyle.getImage()?.setRotation(headingRad);
        compassControlRef.current?.setRotation(headingRad);

        routeCoordsRef.current.push(coords3067);
        routeFeature.getGeometry()?.setCoordinates(routeCoordsRef.current);

        if (followRef.current) {
          mapInstance.current!.getView().animate({ center: coords3067, duration: 300 });
        }
      },
      err => console.warn('GPS error:', err),
      { enableHighAccuracy: true }
    );

    locateBtnRef.current?.addEventListener('click', () => {
      followRef.current = !followRef.current;
      if (followRef.current) locateBtnRef.current?.classList.add('follow-active');
      else locateBtnRef.current?.classList.remove('follow-active');

      const coords = userFeature.getGeometry()?.getCoordinates();
      if (followRef.current && coords) {
        mapInstance.current!.getView().animate({ center: coords, duration: 600 });
      }
    });
  };

  useEffect(() => {
    initMap();
  }, [apiKey]);

  // Kompassin tuki (DeviceOrientation)
  useEffect(() => {
    let supported = false;
  
    const handler = (e: DeviceOrientationEvent) => {
      if (e.alpha != null) {
        supported = true;
        setCompassSupported(true);
  
        // 🔥 Tämä on se puuttuva osa:
        const headingRad = (-e.alpha) * Math.PI / 180;
        lastHeadingRef.current = headingRad;
        compassControlRef.current?.setRotation(headingRad);
        headingStyleRef.current.getImage()?.setRotation(headingRad);
      }
    };
  
    window.addEventListener("deviceorientation", handler);
  
    const timer = setTimeout(() => {
      if (!supported) {
        setCompassSupported(false);
        setCompassVisible(false);
      }
    }, 1500);
  
    return () => {
      window.removeEventListener("deviceorientation", handler);
      clearTimeout(timer);
    };
  }, []);
  

  // Kompassin näkyvyys → OpenLayers
  useEffect(() => {
    if (!compassControlRef.current) return;
  
    compassControlRef.current.setVisible(compassVisible);
  
    if (compassVisible) {
      // palautetaan viimeisin tunnettu kulma heti näkyviin
      compassControlRef.current.setRotation(lastHeadingRef.current);
    }
  }, [compassVisible]);
  

  return (
    <div id="osm-map-container">
      <div ref={mapRef} id="osm-map" />

      <button ref={locateBtnRef} id="locate-btn"><FaCrosshairs /></button>

      {settingsOpen && (
        <div id="settings-panel">
          <button 
            className="settings-close-btn-X"
            onClick={() => setSettingsOpen(false)}
          >
            ✕
          </button>

          <h6>Asetukset</h6>

          <label className="toggle-row">
            <span>Näytä/piilota kompassi</span>
            <input
              type="checkbox"
              checked={compassVisible}
              disabled={compassSupported === false}
              onChange={(e) => {
                const value = e.target.checked;
                setCompassVisible(value);
                localStorage.setItem("compassVisible", value ? "1" : "0");
              }}
            />
          </label>

          {compassSupported === false && (
            <div className="info-box warning">
              Kompassi ei ole käytettävissä tällä laitteella.
            </div>
          )}

          <div className="info-box">
            <strong>Paikannus</strong><br />
            Kartta seuraa sijaintia paikannuspainikkeen ollessa vihreä.
          </div>
        </div>
      )}
    </div>
  );
};

export default MerikarttaComp;
