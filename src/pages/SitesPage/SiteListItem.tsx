import { IonLabel } from '@ionic/react';

import { Site } from '../../models/server/schema';

export const SiteListItem: React.FC<{ site: Site | null }> = ({ site }) => (
  <IonLabel>
    {site?.name && <h2>{site.name}</h2>}
    {site?.address && (
      <h3>{`${site.address.street || ''}, ${site.address.locality || ''}, ${site.address.region || ''} ${
        site.address.postalCode || ''
      }`}</h3>
    )}
    {/* TODO: <p>{ site | formatDistance:currentLocation }</p> */}
  </IonLabel>
);

export default SiteListItem;
