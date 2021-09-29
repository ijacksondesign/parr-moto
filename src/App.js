import React from 'react';
import { Container } from 'react-bootstrap';
import Navigation from './components/Navigation';
import Header from './components/Header';
import WhatWeDo from './components/WhatWeDo';
import OurWork from './components/OurWork';
import Team from './components/Team';
import Contact from './components/Contact';

function App() {
  return (
    <Container className='p-0' style={{ backgroundColor: 'black', minHeight: '100vh' }} fluid>
      <Navigation />
      <Header />
      <WhatWeDo />
      <OurWork />
      <Team />
      <Contact />
    </Container>
  );
}

export default App;
