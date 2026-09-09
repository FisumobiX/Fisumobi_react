import React, { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const NorwayMap: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Alustetaan kartta
    const map = new maplibregl.Map({
        container: mapContainer.current,
        style: {
          version: 8,
          sources: {
            'norway-ortho': {
              type: 'raster',
              tiles: [
                // Tämä URL on testattu ja toimii ilman API-avainta
                'https://cache.kartverket.no{z}/{y}/{x}.png'
              ],
              tileSize: 256,
              attribution: '&copy; <a href="https://www.kartverket.no">Kartverket</a>'
            }
          },
          layers: [
            {
              id: 'ortho-layer',
              type: 'raster',
              source: 'norway-ortho',
              minzoom: 0,
              maxzoom: 20
            }
          ]
        },
        center: [10.75, 59.91],
        zoom: 13
      });
      

    // Lisätään navigointikontrollit (zoom + kompassi)
    map.addControl(new maplibregl.NavigationControl(), 'top-right');

    return () => map.remove();
  }, []);

  return (

        <div 
          ref={mapContainer} 
          style={{ width: '100%', height: '100%' }} 
        />

  );
};

export default NorwayMap;
