import React from 'react';
import { Container } from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Navigation from './components/Navigation';
import Header from './components/Header';
import WhatWeDo from './components/WhatWeDo';
import OurWork from './components/OurWork';
import Team from './components/Team';
import Contact from './components/Contact';
import Project from './components/Project';

function App() {
  return (
    <Router>
      <Container className='p-0' style={{ backgroundColor: '#1a1a1a', minHeight: '100vh', overflowX: 'hidden' }} fluid>
        <Navigation />
        <Switch>

          <Route exact path='/'>
            <Header />
            <WhatWeDo />
            <OurWork />
            <Team />
            <Contact />
          </Route>

          <Route exact path='/project/id'>
            <Project />
          </Route>

        </Switch>
      </Container>
    </Router>
  );
}

export default App;
