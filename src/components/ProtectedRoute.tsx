import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../state/userContext';

const ProtectedRoute: React.FC<{ path: string; component: React.FC }> = ({ path, component }) => {
  const {
    state: { signedIn },
  } = useContext(UserContext);

  return signedIn ? <Route exact path={path} component={component}></Route> : <Redirect to="/login" />;
};
export default ProtectedRoute;
