
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card } from './ui/card';

interface MapProps {
  className?: string;
}

const Map = ({ className = "" }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  // Center coordinates for 1281 Stouffville Rd, Richmond Hill, ON L4E 3S5
  const center: [number, number] = [-79.3625, 43.9634]; // Longitude, Latitude

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map with a public access token
    // This is a public token for demo purposes only
    mapboxgl.accessToken = 'pk.eyJ1IjoiZGVtby1hY2NvdW50MSIsImEiOiJjbHY2aTdtMDAwM2UyMm1uMGZqeDR3cGtqIn0.OL8ZHmSsIxKMOUoAe9s3lg';
    
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
  }, []);

  return (
    <Card className={`${className} w-full relative`}>
      <div 
        ref={mapContainer} 
        className="w-full h-[350px] rounded-lg overflow-hidden"
      />
    </Card>
  );
};

export default Map;
