
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { MapPin, ExternalLink } from 'lucide-react';

interface MapProps {
  className?: string;
}

const Map = ({ className = "" }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(false);
  const [mapError, setMapError] = useState(false);

  // Center coordinates for 1281 Stouffville Rd, Richmond Hill, ON L4E 3S5
  const center: [number, number] = [-79.3625, 43.9634]; // Longitude, Latitude

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    try {
      // Initialize map with user-provided token
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

      map.current.on('error', () => {
        setMapError(true);
      });

      setMapError(false);
    } catch (error) {
      console.error('Map initialization error:', error);
      setMapError(true);
    }

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      setShowTokenInput(false);
      setMapError(false);
    }
  };

  if (!mapboxToken || mapError) {
    return (
      <Card className={`${className} w-full relative`}>
        <div className="w-full h-[350px] rounded-lg overflow-hidden flex flex-col items-center justify-center bg-gray-50 p-6">
          <MapPin className="h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Map requires Mapbox token</h3>
          <p className="text-sm text-gray-600 text-center mb-4">
            To display the interactive map, you need to provide a Mapbox public access token.
          </p>
          
          {!showTokenInput ? (
            <div className="space-y-3">
              <Button 
                onClick={() => setShowTokenInput(true)}
                className="bg-brand-blue hover:bg-blue-700"
              >
                Add Mapbox Token
              </Button>
              <div>
                <a 
                  href="https://mapbox.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline flex items-center justify-center"
                >
                  Get free token at mapbox.com <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </div>
            </div>
          ) : (
            <div className="w-full max-w-md space-y-3">
              <input
                type="text"
                placeholder="Paste your Mapbox public token here"
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
              <div className="flex space-x-2">
                <Button 
                  onClick={handleTokenSubmit}
                  className="flex-1 bg-brand-blue hover:bg-blue-700"
                  disabled={!mapboxToken.trim()}
                >
                  Load Map
                </Button>
                <Button 
                  onClick={() => setShowTokenInput(false)}
                  variant="outline"
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </div>
          )}
          
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              Our address: 1281 Stouffville Rd, Richmond Hill, ON L4E 3S5
            </p>
          </div>
        </div>
      </Card>
    );
  }

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
