import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Landing />
        <Projects />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
