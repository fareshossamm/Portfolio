import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'; // Correct import
import SocialMediaIcons from './SocialMediaIcons'; 
import './Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
       
        <div className="about-us">
          <h2>About Me</h2>
       <p>I’m a frontend developer and UI/UX designer with a passion for transforming ideas into engaging digital experiences. I thrive on crafting clean,
         responsive code and intuitive designs that prioritize user needs. Every project I take on balances functionality with aesthetics,
         ensuring that the result is both visually appealing and highly usable.</p>
         <SocialMediaIcons/> 

        </div>

        {/* Contact Information Section */}
        <div className="contact-info">
          <h2>Contact Info</h2>
          <p><FontAwesomeIcon icon={faEnvelope} className="icon" /> <a href="mailto:contact@mybrand.com">fareshossam543@gmail.com</a></p>
          <p><FontAwesomeIcon icon={faPhone} className="icon" /> +201029832925</p>
        </div>
        <div className="footer-links">
  <h2>Links</h2>
  
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/projects">Projects</a>
    <a href="/contact">Contact</a>
  
</div>


      </div>

      {/* Copyright Section */}
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Fares Hossam All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
