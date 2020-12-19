import React, { Fragment } from 'react';
import { NavItem } from 'reactstrap';
import { useAuth0 } from '@auth0/auth0-react';

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import SignupButton from './SignUpButton';

const AuthNavButtons = () => {
  const { isAuthenticated } = useAuth0();

  const guestLinks = (
    <Fragment>
      <NavItem>
        <LoginButton />
      </NavItem>
      <NavItem>
        <SignupButton />
      </NavItem>
    </Fragment>
    
  );
  
  const authLinks = (
    <Fragment>
      <NavItem>
        <LogoutButton />
      </NavItem>
    </Fragment>
  );
  
  return isAuthenticated ? authLinks : guestLinks;
};

export default AuthNavButtons;
