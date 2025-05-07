
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card } from './ui/card';

interface MapProps {
  className?: string;
}

const Map = ({ className = "" }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>("");

  // Center coordinates for 1281 Stouffville Rd, Richmond Hill, ON L4E 3S5
  const center = [-79.3625, 43.9634]; // Longitude, Latitude

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 14,
      center: center,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Add marker for the location
    new mapboxgl.Marker()
      .setLngLat(center)
      .setPopup(new mapboxgl.Popup({ offset: 25 })
        .setHTML('<h3>Centre for Biological Medicine</h3><p>1281 Stouffville Rd, Richmond Hill, ON L4E 3S5</p>'))
      .addTo(map.current);

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  return (
    <Card className={`${className} w-full relative`}>
      {!mapboxToken && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg">
          <p className="text-gray-800 mb-4">Please enter your Mapbox public token:</p>
          <input 
            type="text"
            className="w-full p-2 border border-gray-300 rounded mb-2"
            placeholder="Enter Mapbox public token"
            onChange={(e) => setMapboxToken(e.target.value)}
          />
          <p className="text-xs text-gray-500 text-center">
            Get a free token at <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">mapbox.com</a>
          </p>
        </div>
      )}
      <div 
        ref={mapContainer} 
        className="w-full h-[350px] rounded-lg overflow-hidden"
        style={{ display: mapboxToken ? 'block' : 'none' }} 
      />
    </Card>
  );
};

export default Map;
