import { useRef, useState, useEffect } from "react";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
// Tuodaan markercluster-laajennuksen tyylitiedostot
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import 'leaflet.markercluster'; // Aktivoi L.markerClusterGroup lajennuksen
import './themeComp/KarttaComp.css';
import { kalapaikat} from '../assets/locations';
import { veneenlaskupaikat } from '../assets/locations2';
import { FaMapPin, FaCrosshairs, FaShip  } from 'react-icons/fa';
import ReactDOMServer from 'react-dom/server';
import { useLocation } from "react-router-dom";

// Leaflet default icon fix
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

// 🎨 VOIT MUUTTAA KLUSTEREIDEN VÄREJÄ TÄSTÄ:
const CLUSTER_COLORS = {
  vene: {
    bg: '#383838',      // Ulompi haalea rengas
    inner: '#696969',   // Sisempi pallo
    text: '#ffffff'                     // Tekstin väri numerolle
  },
  kala: {
    bg: '#0096FF',         // Ulompi haalea rengas
    inner: '#0000FF',      // Sisempi pallo
    text: '#ffffff'                     // Tekstin väri numerolle
  }
};

export default function KarttaComp() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<L.Map | null>(null);
  const [attributionOpen, setAttributionOpen] = useState(false);
  const [center, setCenter] = useState<[number, number] | null>(null);
  const [initialZoom, setInitialZoom] = useState<number>(6);
  const [boatPlacesOpen, setBoatPlacesOpen] = useState(false);
  
  // Refit molemmille klusteriryhmille
  const boatLayerRef = useRef<L.MarkerClusterGroup | null>(null);
  const kalaLayerRef = useRef<L.MarkerClusterGroup | null>(null);

  const location = useLocation();

  useEffect(() => {
    // 1) URL-parametrit
    const params = new URLSearchParams(location.search);
    const urlLat = params.get("lat");
    const urlLng = params.get("lng");
    const urlZoom = params.get("zoom");
  
    if (urlLat && urlLng) {
      const lat = parseFloat(urlLat);
      const lng = parseFloat(urlLng);
      const zoom = urlZoom ? parseInt(urlZoom) : 8;
  
      if (!isNaN(lat) && !isNaN(lng)) {
        setCenter([lat, lng]);
        setInitialZoom(zoom);
        return;
      }
    }
  
    // 2) cachedLocation
    const raw = localStorage.getItem("cachedLocation");
  
    if (raw) {
      try {
        const pos = JSON.parse(raw);
        setCenter([pos.coords.latitude, pos.coords.longitude]);
        return;
      } catch (e) {
        console.warn("Virhe JSON-parsessa:", e);
      }
    }
  
    // 3) fallback
    setCenter([66.057, 28.078]);
  }, [location.search]);
  
  useEffect(() => {
    if (!mapRef.current || !center || mapInstance.current) return;

    requestAnimationFrame(() => {
      const map = L.map(mapRef.current!, { attributionControl: false })
        .setView(center, initialZoom);

      mapInstance.current = map;

      L.control.scale({ position: 'bottomleft', imperial: false }).addTo(map);

      L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        minZoom: 3,  
        maxZoom: 17,
      }).addTo(map);

      // 🔄 KORJAUS: Pakotetaan Leaflet laskemaan kartan koko uudelleen,
      // kun elementti on varmasti piirtynyt DOMiin. Tämä poistaa scroll-ongelman.
      setTimeout(() => {
        map.invalidateSize();
      }, 100);

      const makeIcon = (color: string) =>
        L.divIcon({
          html: ReactDOMServer.renderToString(
            <div style={{ color, fontSize: '16px', textAlign: 'center' }}>
              <FaMapPin />
            </div>
          ),
          className: 'custom-fa-icon',
          iconSize: [18, 18],
          iconAnchor: [9, 18],
        });

      const createClusterIcon = (cluster: L.MarkerCluster, config: typeof CLUSTER_COLORS.vene) => {
        const childCount = cluster.getChildCount();
        return L.divIcon({
          html: `<div style="background-color: ${config.bg}; width: 40px; height: 40px; border-radius: 50%; display: flex; justify-content: center; align-items: center;">
                  <div style="background-color: ${config.inner}; width: 30px; height: 30px; border-radius: 50%; display: flex; justify-content: center; align-items: center; color: ${config.text}; font-weight: bold; font-size: 12px;">
                    ${childCount}
                  </div>
                 </div>`,
          className: 'custom-marker-cluster',
          iconSize: L.point(40, 40)
        });
      };

      // 🎣 KALASTUSPAIKKOJEN KLUSTERIRYHMÄ
      const kalaClusterGroup = L.markerClusterGroup({
        chunkedLoading: true,
        maxClusterRadius: 30,
        iconCreateFunction: (cluster) => createClusterIcon(cluster, CLUSTER_COLORS.kala)
      });

      kalapaikat.forEach(loc => {
        const marker = L.marker([loc.lat, loc.lng], { icon: makeIcon('#0000FF') })
          .bindPopup(`<b>${loc.paikka}</b><br>Kalastuskohdelaji: ${loc.lajit}<br><a href="${loc.url}">Avaa sivu</a>`);
        
        kalaClusterGroup.addLayer(marker);
      });
      
      kalaLayerRef.current = kalaClusterGroup;
      kalaClusterGroup.addTo(map);

      // ⛵ VENEENLASKUPAIKKOJEN KLUSTERIRYHMÄ
      const boatClusterGroup = L.markerClusterGroup({
        chunkedLoading: true, 
        maxClusterRadius: 50,
        iconCreateFunction: (cluster) => createClusterIcon(cluster, CLUSTER_COLORS.vene)
      });

      const bounds = L.latLngBounds([]);

      veneenlaskupaikat.forEach(loc => {
        const marker = L.marker([loc.lat, loc.lng], {
          icon: makeIcon('#383838')
        }).bindPopup(
          `<b>${loc.paikka}</b><br>Luiskantyyppi: ${loc.luiskantyyppi}`
        );
        
        boatClusterGroup.addLayer(marker);
        bounds.extend([loc.lat, loc.lng]);
      });
      
      boatLayerRef.current = boatClusterGroup;
      
      if (boatPlacesOpen) {
        boatClusterGroup.addTo(map);
      }

      if (veneenlaskupaikat.length > 0) {
        map.fitBounds(bounds, { padding: [50, 50] });
      }
    });
  }, [center, initialZoom]);


  return (
    // <div id="leaftmap-container" style={{ position: 'relative', width: '100%', height: '100vh' }}>
    //   <div id="leaft-map" ref={mapRef} style={{ width: '100%', height: '100%' }} />
    <div id="leaftmap-container" >
    <div id="leaft-map" ref={mapRef} />
      
      {/* Paikannuspainike */}
      <button
        onClick={() => {
          if (navigator.geolocation && mapInstance.current) {
            navigator.geolocation.getCurrentPosition(
              (pos) => {
                const lat = pos.coords.latitude;
                const lng = pos.coords.longitude;
                mapInstance.current!.panTo([lat, lng]);
              },
              (err) => {
                console.warn("Geolocation error:", err);
              }
            );
          }
        }}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          zIndex: 1000,
          background: '#ffffff',
          color: '#333',
          padding: '6px 8px',
          borderRadius: '6px',
          border: '1px solid #ccc',
          cursor: 'pointer',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
        }}
      >
        <FaCrosshairs size={20}/>
      </button>

      {/* Veneenlaskupaikat */}
      <button
        onClick={() => {
          const newState = !boatPlacesOpen;
          setBoatPlacesOpen(newState);

          if (mapInstance.current && boatLayerRef.current) {
            if (newState) {
              mapInstance.current.addLayer(boatLayerRef.current);
            } else {
              mapInstance.current.removeLayer(boatLayerRef.current);
            }
          }
        }}
        title="Veneenlaskupaikat"
        style={{
          position: 'absolute',
          top: '50px',
          right: '10px',
          zIndex: 1000,
          background: boatPlacesOpen ? '#2196f3' : '#ffffff',
          color: boatPlacesOpen ? '#ffffff' : '#333',
          padding: '6px 8px',
          borderRadius: '6px',
          border: '1px solid #ccc',
          cursor: 'pointer',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
        }}
      >
        <FaShip size={20} />
      </button>

      {/* Legend Button */}
      <button
        onClick={() => setAttributionOpen(prev => !prev)}
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          zIndex: 1000,
          borderRadius: '6px',
          width: '32px',
          height: '32px',
          fontWeight: 'bold',
          background: '#f0f0f0',
          color: '#333',
          border: '1px solid #ccc',
          cursor: 'pointer'
        }}
      >
        i
      </button>

      {/* Legend Box */}
      {attributionOpen && (
        <div
          style={{
            position: 'absolute',
            bottom: '10px',
            right: '45px',
            background: '#ffffff',
            color: '#222',
            padding: '8px 10px',
            borderRadius: '6px',
            zIndex: 1001,
            maxWidth: '220px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.25)',
            fontSize: '14px'
          }}
        >
                  <button
            onClick={() => setAttributionOpen(false)}
            style={{
              float: 'right',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              color: '#444',
              fontSize: '14px'
            }}
          >
            ✕
          </button>
          <div>
            <b>Selite:</b><br />
            Kalastuspaikka <FaMapPin size={15} color="#0000FF" /><br />
            Veneenlaskupaikka <FaMapPin size={15} color="#383838" /><br />
            <small>&copy; OpenStreetMap contributors<br /> &copy; OpenTopoMap</small>
          </div>
        </div>
      )}
    </div>
  );
}
