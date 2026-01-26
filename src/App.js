import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Cover from './components/Cover';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Cover />
      <Profile />
      <Skills />
      <Projects />
      <Education />
      <Certificates />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
