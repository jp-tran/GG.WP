import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Nav,
  Navbar,
  Container,
  NavbarBrand,
  NavbarToggler,
  Collapse,
} from 'reactstrap';
import { useAuth0 } from '@auth0/auth0-react';

import MainNavButtons from './MainNavButtons';
import AuthNavButtons from './AuthNavButtons';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const { isAuthenticated } = useAuth0();

  const authButtons = (
    <Nav className='ml-auto' navbar>
      <MainNavButtons />
      <AuthNavButtons />
    </Nav>
  );

  const guestButtons = (
    <Nav className='ml-auto' navbar>
      <AuthNavButtons />
    </Nav>
  );

  return (
    <Navbar color='dark' dark expand='md' className='mb-5'>
      <Container>
        <NavbarBrand>
          <NavLink
            to='/'
            exact
            className='nav-link'
            activeClassName='router-link-exact-active'
          >
            GG.WP
          </NavLink>
        </NavbarBrand>
        <NavbarToggler onClick={handleToggle} />
        <Collapse isOpen={isOpen} navbar>
          {isAuthenticated ? authButtons : guestButtons}
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
