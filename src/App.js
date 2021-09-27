import React from 'react';
import { Container } from 'react-bootstrap';
import Navigation from './components/Navigation';
import Header from './components/Header';
import WhatWeDo from './components/WhatWeDo';

function App() {
  return (
    <Container style={{ backgroundColor: 'black', minHeight: '100vh' }} fluid>
      <Navigation />
      <Header />
      <WhatWeDo />
    </Container>
  );
}

export default App;
