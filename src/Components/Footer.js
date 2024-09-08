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
       <p>I'm a passionate Developer & Designer dedicated to delivering high-quality services and products.
         My goal is to bring innovative solutions to my clients and ensure satisfaction through my work.</p>
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
        <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
