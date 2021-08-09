import { useIonToast } from '@ionic/react';
import { useEffect } from 'react';

export const useErrorToast = (error?: any) => {
  const [presentToast] = useIonToast();
  useEffect(() => {
    if (error) {
      presentToast({
        message: error.message,
        color: 'danger',
        duration: 3000,
        buttons: [
          {
            side: 'end',
            text: 'hide',
            role: 'cancel',
          },
        ],
      });

      // TODO: Log error to Rollbar here.
    }
  }, [error]);
};
