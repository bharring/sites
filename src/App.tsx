import { ApolloProvider } from '@apollo/client';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

import Menu from './components/Menu';
import LoginPage from './pages/LoginPage/LoginPage';
import SitesPage from './pages/SitesPage/SitesPage';
import apolloClient from './state/apolloClient';
import { UserContextProvider } from './state/userContext';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './global.css';
import ProtectedRoute from './components/ProtectedRoute';

const App: React.FC = () => (
  <ApolloProvider client={apolloClient}>
    <UserContextProvider>
      <IonApp>
        <IonReactRouter>
          <Menu />
          <IonRouterOutlet id="main-content">
            <Route exact path="/login" component={LoginPage}></Route>
            <ProtectedRoute path="/sites" component={SitesPage}></ProtectedRoute>
            <Route exact path="/">
              <Redirect to="/sites" />
            </Route>
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </UserContextProvider>
  </ApolloProvider>
);

export default App;
