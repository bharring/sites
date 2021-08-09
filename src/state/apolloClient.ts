import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Auth } from '@aws-amplify/auth';

const authCconfig = JSON.parse(process.env.REACT_APP_AUTH_OPTIONS as string);
Auth.configure(authCconfig);

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_GQL_URL,
  headers: { 'x-glidecloud-tenant-id': process.env.REACT_APP_TENANT_ID },
});

// add the authorization to the headers
const authMiddlewareLink = setContext(async (operation) => {
  const token = (await Auth.currentSession()).getAccessToken().getJwtToken();

  return {
    headers: {
      Authorization: token,
    },
  };
});

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([authMiddlewareLink, httpLink]),
});

export default apolloClient;
