import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useCallback } from 'react';

import { SitesListQuery } from '../../models/server/schema';
import { useErrorToast } from '../../state/useErrorToast';

const currentLocationIcon: google.maps.Symbol = {
  path: 0, // google.maps.SymbolPath.CIRCLE,
  scale: 10,
  fillOpacity: 1,
  strokeWeight: 2,
  fillColor: '#5384ED',
  strokeColor: '#ffffff',
};

export const SitesMap: React.FC<{ center?: google.maps.LatLngLiteral; data?: SitesListQuery }> = ({ center, data }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY as string,
  });

  const onLoad = useCallback((map) => {
    const bounds = data?.sitesList?.items?.reduce(
      (_bounds, item) =>
        item && item?.position?.latitude && item?.position?.longitude
          ? _bounds.extend(new google.maps.LatLng(item.position.latitude, item.position.longitude))
          : _bounds,
      new google.maps.LatLngBounds(),
    );

    bounds && map.fitBounds(bounds);
  }, []);

  useErrorToast(loadError);

  if (isLoaded) {
    return (
      <GoogleMap
        onLoad={onLoad}
        mapContainerStyle={{
          width: '100%',
          height: '100%',
        }}
      >
        {center && <Marker key="currentPosition" position={center} icon={currentLocationIcon}></Marker>}
        {data?.sitesList?.items &&
          data?.sitesList?.items.map(
            (site) =>
              site?.position?.latitude &&
              site.position?.longitude && (
                <Marker key={site?.id} position={{ lat: site.position.latitude, lng: site.position.longitude }}></Marker>
              ),
          )}
      </GoogleMap>
    );
  }

  return <></>;
};

export default SitesMap;
