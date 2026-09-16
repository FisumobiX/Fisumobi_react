// 🔥 PROJ4 ENSIN
import proj4 from "proj4";
import { register } from "ol/proj/proj4.js";
register(proj4);
proj4.defs(
  "EPSG:3067",
  "+proj=utm +zone=35 +ellps=GRS80 +units=m +no_defs"
);
register(proj4);

// 🔥 OPENLAYERS
import React, { useEffect, useRef, useState } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import VectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON";
import Overlay from "ol/Overlay";
import { fromLonLat } from "ol/proj";
import { Style, Icon, Circle as CircleStyle, Fill, Stroke } from "ol/style";
import Text from "ol/style/Text";
import Cluster from "ol/source/Cluster";
import "ol/ol.css";
import ScaleLine from "ol/control/ScaleLine";
import { defaults as defaultControls, Attribution } from "ol/control";
import { useLocation } from "react-router-dom";
import { FaCrosshairs, FaBuffer, FaGripfire } from "react-icons/fa";
import { renderToStaticMarkup } from "react-dom/server";
import Feature from "ol/Feature";
import type Geometry from "ol/geom/Geometry";
import VectorLayer from "ol/layer/Vector";


function reactIconToImage(icon: React.JSX.Element): HTMLImageElement {
  const svgString = renderToStaticMarkup(icon);

  const svgBlob = new Blob([svgString], { type: "image/svg+xml" });
  const url = URL.createObjectURL(svgBlob);

  const img = new Image();
  img.src = url;
  img.width = 50;
  img.height = 50;

  return img;
}

export default function MapSuomiNorjaComp({ apiKey }: { apiKey: string }) {

  const mapRef = useRef<HTMLDivElement | null>(null);
  const popupRef = useRef<HTMLDivElement | null>(null);
  const mapInst = useRef<Map | null>(null);

  const karttaTopoRef = useRef<TileLayer<XYZ> | null>(null);
  const karttaTopoRRef = useRef<TileLayer<XYZ> | null>(null);
  const popupOverlayRef = useRef<Overlay | null>(null);

  const lipasLayerRef = useRef<VectorLayer<VectorSource<Feature<Geometry>>> | null>(null);

  const lipasSource = new VectorSource();
  const geojson = new GeoJSON();

  const [_initialCenter, setInitialCenter] = useState<[number, number] | null>(null);
  const [_initialZoom, setInitialZoom] = useState<number>(6);
  const fireIconImg = reactIconToImage(<FaGripfire color="red" />);  

  // ⭐ UI-tilat
  const [menuOpen, setMenuOpen] = useState(false);
  const [popupContent, setPopupContent] = useState("");

  // ⭐ Norjan kartta
  const [norjaKartta, setNorjaKartta] = useState(
    localStorage.getItem("norjaKartta") || "toporaster"
  );

  // ⭐ Laavut oletuksena pois päältä
  const [showLaavut, setShowLaavut] = useState(false);

  // ⭐ Paikannus
  const handleLocate = () => {
    if (!mapInst.current) return;

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        const coords = fromLonLat([longitude, latitude]);
        mapInst.current!.getView().animate({
          center: coords,
      //    zoom: 14,
          duration: 800,
        });
      },
      (err) => console.error("Geolocation error:", err)
    );
  };

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const urlLat = params.get("lat");
    const urlLng = params.get("lng");
    const urlZoom = params.get("zoom");

  // 1) URL-parametrit
  if (urlLat && urlLng) {
    const lat = parseFloat(urlLat);
    const lng = parseFloat(urlLng);
    const zoom = urlZoom ? parseInt(urlZoom) : 8;

    if (!isNaN(lat) && !isNaN(lng)) {
      setInitialCenter([lng, lat]); // lon, lat
      setInitialZoom(zoom);
      return;
    }
  }

  // 2) cachedLocation
  const raw = localStorage.getItem("cachedLocation");
  if (raw) {
    try {
      const pos = JSON.parse(raw);
      setInitialCenter([pos.coords.longitude, pos.coords.latitude]);
      return;
    } catch (e) {
      console.warn("Virhe JSON-parsessa:", e);
    }
  }

  // 3) fallback
  setInitialCenter([28.078, 66.057]);
}, [location.search]);

  useEffect(() => {
    if (mapInst.current) return;
    if (!mapRef.current || !popupRef.current) return;

    // ⭐ MML Suomi
    const mmlLayer = new TileLayer({
      source: new XYZ({
        url: `https://avoin-karttakuva.maanmittauslaitos.fi/avoin/wmts/1.0.0/maastokartta/default/WGS84_Pseudo-Mercator/{z}/{y}/{x}.png?api-key=${apiKey}`,
        attributions: "© MML<br/>",
      }),
    });

    // ⭐ Kartverket Norja
    karttaTopoRRef.current = new TileLayer({
      visible: norjaKartta === "toporaster",
      source: new XYZ({
        url: "https://cache.kartverket.no/v1/wmts/1.0.0/toporaster/default/webmercator/{z}/{y}/{x}.png",
        attributions: "© Kartverket<br/> © Lipas",
      }),
    });

    karttaTopoRef.current = new TileLayer({
      visible: norjaKartta === "topo",
      source: new XYZ({
        url: "https://cache.kartverket.no/v1/wmts/1.0.0/topo/default/webmercator/{z}/{y}/{x}.png",
      }),
    });

    // ⭐ LIPAS → fetch
    fetch(
      "https://lipas.fi/geoserver/lipas/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=lipas:lipas_301_laavu_kota_kammi&outputFormat=application/json"
    )
      .then((r) => r.json())
      .then((data) => {
        const features = geojson.readFeatures(data, {
          dataProjection: "EPSG:3067",
          featureProjection: "EPSG:3857",
        });
        lipasSource.addFeatures(features as Feature<Geometry>[]);

      });
    
    // ⭐ Klusterointi
    const clusterSource = new Cluster({
      distance: 40,
      source: lipasSource,
    });
    
    // ⭐ VectorLayer (suositeltu)
    lipasLayerRef.current = new VectorLayer({
      source: clusterSource,
      visible: showLaavut,
      style: (feature) => {
        const size = feature.get("features").length;
    
        if (size === 1) {
          return new Style({
            image: new Icon({
              src: fireIconImg.src,
              scale: 2,
              anchor: [0.5, 1],
              anchorXUnits: "fraction",
              anchorYUnits: "fraction",
            }),
          });
        }
    
        return new Style({
          image: new CircleStyle({
            radius: 12,
            fill: new Fill({ color: "rgba(255,153,0,0.6)" }),
            stroke: new Stroke({ color: "#ff9900", width: 2 }),
          }),
          text: new Text({
            text: size.toString(),
            fill: new Fill({ color: "#fff" }),
          }),
        });
      },
    });

    // ⭐ Kartta
    mapInst.current = new Map({
      target: mapRef.current,
      layers: [
        mmlLayer,
        karttaTopoRRef.current,
        karttaTopoRef.current,
        lipasLayerRef.current,
      ],
      view: new View({
        projection: "EPSG:3857",
        center: fromLonLat([27.59, 64.96]),
        zoom: 6,
      }),
      controls: defaultControls().extend([
        new ScaleLine({
          units: "metric",
         // bar: true,
          steps: 4,
          text: true,
          minWidth: 40,
        }),
        new Attribution({ collapsible: true }),
      ]),
    });

    // ⭐ Popup
    popupOverlayRef.current = new Overlay({
      element: popupRef.current!,
      positioning: "bottom-center",
      stopEvent: false,
    });
    mapInst.current.addOverlay(popupOverlayRef.current);
  
    mapInst.current.on("singleclick", (evt) => {
      const feature = mapInst.current!.forEachFeatureAtPixel(
        evt.pixel,
        (f) => f,
        {
          hitTolerance: 10, // kokeile 10–20
        }
      );
    
      if (!feature) {
        popupOverlayRef.current?.setPosition(undefined);
        return;
      }
    
      const cluster = feature.get("features");
      if (!cluster || cluster.length !== 1) return;
    
      const props = cluster[0].getProperties();
    
      const nimi = props.nimi_fi || "Nimetön kohde";
      const osoite = props.osoite || "";
      const postinumero = props.postinumero || "";
      const postitoimipaikka = props.postitoimipaikka || "";
      const tyyppi = props.tyyppi || ""; // laavu / kota / kammi / tulipaikka / muu
    
      let html = `
      <div style="
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-bottom:6px;
      ">
        <strong>${nimi}</strong>
      </div>
    `;
    
    if (osoite) html += `${osoite}<br/>`;
    if (postinumero && postitoimipaikka)
      html += `${postinumero} ${postitoimipaikka}<br/>`;
    if (tyyppi) html += `${tyyppi}`;
    
    
    
      setPopupContent(html);
      setTimeout(() => {
        const closeBtn = document.getElementById("popup-close");
        if (closeBtn) {
          closeBtn.onclick = () => {
            popupOverlayRef.current?.setPosition(undefined);
          };
        }
      }, 0);
           
      popupOverlayRef.current?.setPosition(evt.coordinate);
    });
    
  }, []);

  useEffect(() => {
    const closeBtn = document.getElementById("popup-close");
    if (closeBtn) {
      closeBtn.onclick = () => {
        popupOverlayRef.current?.setPosition(undefined);
      };
    }
  }, [popupContent]);

  // ⭐ Päivitä näkyvyys
  useEffect(() => {
    lipasLayerRef.current?.setVisible(showLaavut);
  }, [showLaavut]);

  // ⭐ Päivitä Norjan kartta
  useEffect(() => {
    karttaTopoRef.current?.setVisible(norjaKartta === "topo");
    karttaTopoRRef.current?.setVisible(norjaKartta === "toporaster");
  }, [norjaKartta]);

  return (
    <div style={{ position: "relative", height: "100%", width: "100%" }}>
      <div ref={mapRef} style={{ height: "100%", width: "100%" }} />

      {/* ⭐ POPUP */}
      <div
          ref={popupRef}
          style={{
            position: "absolute",
            background: "rgba(0,0,0,0.85)",
            color: "white",
            padding: "10px 14px",
            borderRadius: "8px",
            pointerEvents: "auto",
            fontSize: "15px",
            width: "150px",
            maxWidth: "80vw",
            whiteSpace: "normal",
            lineHeight: "1.4",
            boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
          }}
        >
          {/* ⭐ Sulkemisnappi popupin oikeaan yläkulmaan */}
          <div
            onClick={() => popupOverlayRef.current?.setPosition(undefined)}
            style={{
              position: "absolute",
              top: "-5px",
              right: "-5px",
              cursor: "pointer",
              fontSize: "18px",
              fontWeight: "bold",
              padding: "2px 6px",
              borderRadius: "4px",
            }}
          >
            ×
          </div>

            {/* ⭐ Varsinainen popupin sisältö */}
            <div dangerouslySetInnerHTML={{ __html: popupContent }} />
          </div>


            {/* ⭐ PAIKANNUSTOIMINTO */}
            <button
              onClick={handleLocate}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                zIndex: 1000,
                background: "#fff",
                color: "#333",
                padding: "6px 8px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                cursor: "pointer",
              }}
            >
              <FaCrosshairs size={20} />
            </button>

            {/* ⭐ VALIKKOPAINIKE */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                position: "absolute",
                top: "60px",
                right: "10px",
                zIndex: 1000,
                background: "#fff",
                color: "#333",
                padding: "6px 8px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                cursor: "pointer",
              }}
            >
              <FaBuffer size={20} />
            </button>

          {/* ⭐ VALIKKO */}
          {menuOpen && (
            <div
              style={{
                position: "absolute",
                top: "110px",
                right: "10px",
                zIndex: 1000,
                background: "white",
                color: "#333",
                padding: "12px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                width: "150px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                fontSize: '11px'
              }}
            >
            <strong style={{ fontSize: "12px" }}>Norjan kartta</strong>
            <br /><br />
            <div>
              <label>
                <input
                  type="radio"
                  name="norja"
                  value="toporaster"
                  checked={norjaKartta === "toporaster"}
                  onChange={(e) => {
                    setNorjaKartta(e.target.value);
                    localStorage.setItem("norjaKartta", e.target.value);
                  }}
                />
                &nbsp;Toporaster
              </label>
            </div>

            <div>
              <label>
                <input
                  type="radio"
                  name="norja"
                  value="topo"
                  checked={norjaKartta === "topo"}
                  onChange={(e) => {
                    setNorjaKartta(e.target.value);
                    localStorage.setItem("norjaKartta", e.target.value);
                  }}
                />
                &nbsp;Topo
              </label>
            </div>

            <hr style={{ border: "0", borderTop: "1px solid #ccc", margin: "8px 0" }} />

            <strong style={{ fontSize: "12px" }}>Laavut/kodat/kammit/tulipaikat. yms.<FaGripfire size="20" color="red"/></strong>
            <br /><br />
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={showLaavut}
                  onChange={(e) => {
                    setShowLaavut(e.target.checked);
                    localStorage.setItem("showLaavut", e.target.checked.toString());
                  }}
                />
                &nbsp;Näytä laavut
              </label>
            </div>
        </div>
      )}
    </div>
  );
}
