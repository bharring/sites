import { Geolocation, Position, PositionOptions } from '@capacitor/geolocation';
import { useEffect, useState } from 'react';

interface GeolocationWatchResult {
  currentPosition?: Position;
  currentLatLng?: google.maps.LatLngLiteral;
  geolocationError?: any;
}

export const useWatchPosition = (): GeolocationWatchResult => {
  const [currentPosition, setCurrentPosition] = useState<Position>();
  const [currentLatLng, setCurrentLatLng] = useState<google.maps.LatLngLiteral>();
  const [watchId, setWatchId] = useState('');
  const [geolocationError, setError] = useState();

  const clearWatch = () => {
    if (watchId) {
      Geolocation.clearWatch({ id: watchId });
      setWatchId('');
    }
  };

  const startWatch = async (options?: PositionOptions) => {
    if (!watchId) {
      const id = await Geolocation.watchPosition(options || {}, (position: Position | null, err?: any) => {
        if (err) {
          setError(err);
        }
        setCurrentPosition(position || undefined);
        setCurrentLatLng(position ? { lat: position.coords.latitude, lng: position.coords.longitude } : undefined);
      });
      setWatchId(id);
    }
  };

  useEffect(() => {
    // TODO: Need a way to handle calling clearWatch() before async startWatch() completes
    (async () => await startWatch())();
    return clearWatch;
  }, []);

  return {
    currentPosition,
    currentLatLng,
    geolocationError,
  };
};
