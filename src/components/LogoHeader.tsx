import './LogoHeader.css';

import { IonCol, IonRow, IonText } from '@ionic/react';

const LogoHeader: React.FC = () => {
  return (
    <IonRow className="ion-padding-top ion-padding-bottom">
      <IonCol>
        <IonText className="ion-text-center" color="primary">
          <h1>Application Name</h1>
        </IonText>
      </IonCol>
    </IonRow>
  );
};
export default LogoHeader;
