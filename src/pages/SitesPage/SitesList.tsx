import { RefresherEventDetail } from '@ionic/core';
import { IonItem, IonList, IonRefresher, IonRefresherContent } from '@ionic/react';

import { SitesListQuery } from '../../models/server/schema';
import SiteListItem from './SiteListItem';

const SitesList: React.FC<{
  data?: SitesListQuery;
  refetch: (variables?: any) => Promise<any>; // this is the problem with using generated code, the actual function signature of refetch is unwieldy
}> = ({ data, refetch }) => {
  const handleRefresh = async (e: CustomEvent<RefresherEventDetail>) => {
    try {
      await refetch();
    } catch {}
    e.detail.complete();
  };

  return (
    <>
      <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
        <IonRefresherContent></IonRefresherContent>
      </IonRefresher>

      <IonList>
        {data?.sitesList?.items &&
          data?.sitesList?.items.map((site) => (
            <IonItem button key={site?.id}>
              <SiteListItem site={site} />
            </IonItem>
          ))}
      </IonList>
    </>
  );
};

export default SitesList;
