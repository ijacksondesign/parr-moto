import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import Logo from '../../assets/logo/parr-moto-logo.svg';

function Navigation() {
  return (
    <Navbar fixed='top' bg='dark'>
      <Container className='mx-5' fluid>
        <Navbar.Brand href='#home' style={{ width: '150px' }}>
          <Image src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          <Nav.Link href='#what-we-do'>what we do</Nav.Link>
          <Nav.Link href='#our-work'>our work</Nav.Link>
          <Nav.Link href='#meet-the-team'>meet the team</Nav.Link>
          <Nav.Link href='#contact'>contact</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;