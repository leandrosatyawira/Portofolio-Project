import React from 'react';
import './Landing.css';

function LandingPage({ scrollToContact }) {

    return (
    <section className="landing-container">
      <div className="logo-container">
        <img src="/assets/LST.png" alt="Logo" className="logo" />
      </div>
      <div className="landing-content">
        <h1>Hello, I'm <span className="name-highlight">Leandro Satyawira Tionanda</span><span className="blinking-cursor">|</span></h1>
        <p className="roles">Web Developer | Novice Programmer</p>
        <button onClick={scrollToContact} className="contact-button">Contact Me</button>
      </div>
    </section>
  );
}
export default LandingPage;
