import { IonButton, IonButtons, IonHeader, IonIcon, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react';

export const SitesHeader: React.FC<{ title: string; icon: string; toggleView: () => void }> = ({ title, icon, toggleView }) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton></IonMenuButton>
        </IonButtons>
        <IonTitle>{title}</IonTitle>
        <IonButtons slot="primary">
          <IonButton data-testid="button" slot="end" onClick={toggleView}>
            <IonIcon icon={icon} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default SitesHeader;
