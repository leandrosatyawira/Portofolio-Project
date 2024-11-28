import React from 'react';
import './App.css';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Landing scrollToContact={scrollToContact}  />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
