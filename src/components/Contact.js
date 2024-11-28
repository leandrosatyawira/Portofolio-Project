import React from 'react';
import './Contact.css'; 


function Contact() {
  return (
    <section id= "contact" className="contact-section">
      <h2>Contact</h2>
      <div className="contact-card">
        <p>
          <img src="/assets/Gmail.png" alt="Email:" className="contact-icon" />  
          <a href="mailto:leandrozhang14@gmail.com"> leandrozhang14@gmail.com</a>
        </p>
        <p>
          <img src="/assets/Github.png" alt="GitHub:" className="contact-icon" />  
          <a href="https://github.com/leandrosatyawira" target="_blank" rel="noopener noreferrer"> leandrosatyawira</a>
        </p>
        <p>
          <img src="/assets/Linkedin.png" alt="LinkedIn:" className="contact-icon" />  
          <a href="https://www.linkedin.com/in/leandro-satyawira-tionanda-00654a263/" target="_blank" rel="noopener noreferrer"> Leandro Satyawira Tionanda</a>
        </p>
        <p>
          <img src="/assets/Whatsapp.png" alt="Whatsapp:" className="contact-icon" />  
          <a href="https://wa.me/0895329087955" target="_blank" rel="noopener noreferrer"> 0895-3290-87955</a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
