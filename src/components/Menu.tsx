import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle } from '@ionic/react';
import { logOutOutline } from 'ionicons/icons';
import React from 'react';

import { UserContext } from '../state/userContext';

const Menu: React.FC = () => {
  const { signOut } = React.useContext(UserContext);

  return (
    <IonMenu contentId="main-content">
      <IonContent>
        <IonList lines="inset">
          <IonListHeader lines="inset">
            <IonLabel>
              <h1>Header</h1>
            </IonLabel>
          </IonListHeader>

          <IonMenuToggle auto-hide="false">
            <IonItem data-testid="button" onClick={signOut} button>
              <IonIcon slot="start" icon={logOutOutline}></IonIcon>
              <IonLabel>Log Out</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};
export default Menu;
