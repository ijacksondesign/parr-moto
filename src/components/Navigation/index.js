import React from 'react';
import { Image, Nav, Navbar } from 'react-bootstrap';
import Logo from '../../assets/logo/parr-moto-logo.svg';

function Navigation() {
  return (
    <Navbar fixed='top' expand='lg' className='px-5 py-4'>
      <Navbar.Brand href='#home' style={{ width: '150px' }}>
        <Image src={Logo} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
        <Nav>
          <Nav.Link href='#what-we-do' className='nav-links'>what we do</Nav.Link>
          <Nav.Link href='#our-work' className='nav-links'>our work</Nav.Link>
          <Nav.Link href='#meet-the-team' className='nav-links'>meet the team</Nav.Link>
          <Nav.Link href='#contact' className='nav-links'>contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;