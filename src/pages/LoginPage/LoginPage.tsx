import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonSpinner,
} from '@ionic/react';
import { FormEvent, useContext, useState } from 'react';
import { RouteComponentProps } from 'react-router';

import LogoHeader from '../../components/LogoHeader';
import { useErrorToast } from '../../state/useErrorToast';
import { UserContext } from '../../state/userContext';

const LoginPage: React.FC<RouteComponentProps> = ({ history }) => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const {
    state: { loading, error },
    signIn,
  } = useContext(UserContext);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    await signIn(email, password, history);
  };

  useErrorToast(error);

  return (
    <IonPage>
      <IonContent fullscreen>
        <LogoHeader />
        <IonCard>
          <IonCardContent>
            <form onSubmit={handleSubmit}>
              <IonList>
                <IonItem>
                  <IonLabel position="floating">Email</IonLabel>
                  <IonInput clearInput value={email} type="email" required onIonChange={(e) => setEmail(e.detail.value!)}></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">Password</IonLabel>
                  <IonInput
                    clearInput
                    value={password}
                    type="password"
                    required
                    onIonChange={(e) => setPassword(e.detail.value!)}
                  ></IonInput>
                </IonItem>
              </IonList>
              <IonRow>
                <IonCol class="ion-text-center">
                  <IonButton fill="clear" routerDirection="forward" routerLink="/register">
                    Need to Register?
                  </IonButton>
                </IonCol>
              </IonRow>

              <IonRow>
                <IonCol class="ion-text-center">
                  <button hidden type="submit" disabled={loading}>
                    hidden submit
                  </button>
                  <IonButton expand="block" onClick={handleSubmit} disabled={loading}>
                    {loading ? <IonSpinner></IonSpinner> : 'Login'}
                  </IonButton>
                </IonCol>
              </IonRow>
            </form>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};
export default LoginPage;
