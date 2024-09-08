// src/Components/SocialMediaIcons.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faLinkedin, faFacebook, faInstagram, faBehance, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './SocialMediaIcons.css'; // Import CSS for styling

const SocialMediaIcons = () => {
  return (
    <div className="social-media">
       <a href="https://wa.me/201029832925" target="_blank" rel="noopener noreferrer" className="whatsapp">
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="linkedin">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="github">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer" className="behance">
        <FontAwesomeIcon icon={faBehance} />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="instagram">
        <FontAwesomeIcon icon={faInstagram} />
      </a>

      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
     
    </div>
  );
};

export default SocialMediaIcons;
