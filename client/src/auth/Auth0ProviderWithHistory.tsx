import React from 'react';
import { useHistory } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
require('dotenv').config();

const Auth0ProviderWithHistory = ({ children }: { children: any }) => {
  const history = useHistory();
  let domain: string = process.env.REACT_APP_AUTH0_DOMAIN!;
  let clientId: string = process.env.REACT_APP_AUTH0_CLIENT_ID!;
  console.log(domain);
  console.log(clientId);
  console.log(process.env);
  // const audience = process.env.REACT_APP_AUTH0_AUDIENCE;

  const onRedirectCallback = (appState: any) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      // audience={audience}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
