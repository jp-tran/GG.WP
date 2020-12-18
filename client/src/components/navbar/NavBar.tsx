import React from 'react';

import MainNavButtons from './MainNavButtons';
import AuthNavButtons from './AuthNavButtons';

const NavBar = () => {
  return (
    <div className='nav-container mb-3'>
      <nav className='navbar navbar-expand-md navbar-light bg-light'>
        <div className='container'>
          <div className='navbar-brand logo' />
          <MainNavButtons />
          <AuthNavButtons />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
