import React from 'react';
import { Container } from 'react-bootstrap';
import Navigation from './components/Navigation'

function App() {
  return (
    <Container style={{ backgroundColor: 'black' }} fluid>
      <Navigation />
    </Container>
  );
}

export default App;
