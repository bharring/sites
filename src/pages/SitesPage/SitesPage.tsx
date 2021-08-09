import { RefresherEventDetail } from '@ionic/core';
import { IonContent, IonLoading, IonPage, IonRefresher, IonRefresherContent } from '@ionic/react';
import { listOutline, mapOutline } from 'ionicons/icons';
import { useState } from 'react';

import { useSitesListQuery } from '../../models/server/schema';
import { useErrorToast } from '../../state/useErrorToast';
import { useWatchPosition } from '../../state/useGeolocation';
import SitesHeader from './SitesHeader';
import SitesList from './SitesList';
import SitesMap from './SitesMap';

const SitesPage: React.FC = () => {
  const { data, loading, error, refetch } = useSitesListQuery({ notifyOnNetworkStatusChange: true });
  const { currentLatLng, geolocationError } = useWatchPosition();

  useErrorToast(geolocationError);
  useErrorToast(error);

  const [icon, setIcon] = useState(mapOutline);
  const toggleView = () => setIcon(icon === mapOutline ? listOutline : mapOutline);

  return (
    <IonPage>
      <SitesHeader title="Sites" icon={icon} toggleView={toggleView} />

      <IonLoading isOpen={loading}></IonLoading>

      <IonContent>
        {icon === mapOutline ? (
          <SitesList data={data} refetch={refetch}></SitesList>
        ) : (
          <SitesMap center={currentLatLng} data={data}></SitesMap>
        )}
      </IonContent>
    </IonPage>
  );
};

export default SitesPage;
