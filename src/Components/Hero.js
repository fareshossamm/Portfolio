import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import "./Hero.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import AOS from "aos";
import "aos/dist/aos.css";
import heroImage from "./imgs/me.webp"; // Update with your image path

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="hero" className="hero-section">
      {/* Cool animated shape background */}
      <div className="shape-bg"></div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 hero-content" data-aos="fade-up">
            <h1 className="hero-title">
              Hello there!{" "}
              <span
                className="highlight wave-icon"
                role="img"
                aria-label="wave"
              >
                👋
              </span>
            </h1>
            <p className="hero-subtitle">
              <span className="name">
                I'm <span className="highlight">Fares Hossam</span>
                <span className="emoji"> ✨</span>
              </span>
              <br />
            </p>
            <p>
              <span className="job">
                Frontend Developer & UI/UX Designer{" "}
                <span className="emoji">🎨</span>
              </span>
            </p>
            <div className="btns">
            <Link
      to="/contact" // Use the route path for the Contact component
      className="hero-button contact"
    >
      Contact Me <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
    </Link>
              <a
                href="/src/Fares's Resume .pdf"
                className="hero-button download"
                download
              >
                Download Resume <FontAwesomeIcon icon={faDownload} className="resume-icon" />

              </a>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-12 hero-img-container"
            data-aos="fade-left"
          >
            <img
              src={heroImage}
              alt="Fares Hossam - Frontend Developer"
              className="hero-image"
            />
          </div>
        </div>
        
      </div>

    </section>
    
  );
};

export default Hero;
