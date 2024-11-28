import React from 'react';
import './About.css'; 

function AboutMe() {
  return (
    <section className="about-section">
      <div className="about-container">
        <img 
          src="/assets/PFP.png" 
          alt="Your Profile" 
          className="about-image" 
        />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm a passionate web developer who loves creating clean and user-friendly websites. 
            As a Computer Science student at Bina Nusantara University, I have hands-on experience in building modern and responsive web application using React, Java, HTML, and CSS frameworks. I also have some experience handling Databases with MySQL.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
