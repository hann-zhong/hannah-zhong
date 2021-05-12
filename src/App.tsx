import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Work />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
