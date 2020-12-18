import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

// need to add the production logout URL to the "Allowed Logout URLs"
const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <button
      className='btn btn-danger btn-block'
      onClick={() =>
        logout({
          returnTo: window.location.origin, // change later to customize where users end up after logging out
        })
      }
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
