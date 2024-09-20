import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import heroImage from "./imgs/me.webp";
import SocialMediaIcons from "./SocialMediaIcons";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 hero-content" data-aos="fade-up">
            <h2 className="hero-title">
              Welcome to My Creative Hub!{" "}
              <span className="highlight wave-icon" role="img" aria-label="wave">
                👋
              </span>
            </h2>
            <h4 className="hero-subtitle">
              <span className="name">
                I’m <span className="highlight">Fares Hossam</span>
              </span>{" "}
              <br />
            </h4>
            <h4 className="job">
              Frontend Developer & UI/UX Designer{" "}
              <span className="emoji">🎨</span>
            </h4>
            <p className="story">
              I’m dedicated to transforming ideas into engaging digital experiences. My passion lies in crafting clean, responsive code and intuitive designs that prioritize user needs. Here, every project reflects a balance of functionality and aesthetics. Explore my latest work, download my resume to learn more about my experience.
            </p>
            <SocialMediaIcons />

            <div className="btns">
              <Link to="/contact" className="hero-button contact">
                Contact Me{" "}
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              </Link>
              <a
  href="/Fares's Resume.pdf" // Path to the PDF file in the public directory
  className="hero-button download"
  download
>
  Download Resume{" "}
  <FontAwesomeIcon icon={faDownload} className="resume-icon" />
</a>

            </div>
          </div>

          <div className="col-lg-6 col-md-12 hero-img-container" data-aos="fade-left">
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
