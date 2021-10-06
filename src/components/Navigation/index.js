import React, { useEffect, useState } from 'react';
import { Image, Nav, Navbar } from 'react-bootstrap';
import Logo from '../../assets/logo/parr-moto-logo.svg';

function Navigation() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 100)
    })
  });

  return (
    <Navbar fixed='top' expand='lg' variant='dark' className={scroll ? 'px-5 py-4 navbar-scrolled' : 'px-5 py-4 navbar-unscrolled'}>
      <Navbar.Brand href='/' style={{ width: '150px' }}>
        <Image src={Logo} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
        <Nav>
          <Nav.Link href='/#what-we-do' className='nav-links'>what we do</Nav.Link>
          <Nav.Link href='/#our-work' className='nav-links'>our work</Nav.Link>
          <Nav.Link href='/#team' className='nav-links'>meet the team</Nav.Link>
          <Nav.Link href='/#contact' className='nav-links'>contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;