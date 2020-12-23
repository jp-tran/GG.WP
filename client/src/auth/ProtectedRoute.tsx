import React from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from './Loading';

import { ProtectedRoutesProps } from '../types/authTypes';

const ProtectedRoute = ({ component, path }: ProtectedRoutesProps) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <Loading />,
    })}
    path={path}
  />
);

export default ProtectedRoute;
