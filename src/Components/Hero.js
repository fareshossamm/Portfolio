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
              UI/UX Designer & Frontend Developer {" "}
              <span className="emoji">🎨</span>
            </h4>
            <p className="story">
            Here, you’ll find a blend of visually stunning designs and user-centric digital experiences. With a keen eye for detail and a passion for problem-solving, I craft intuitive interfaces and responsive web applications that resonate with users. Explore the intersection of design and technology as I bring ideas to life! 🎨✨            </p>
            <SocialMediaIcons />

            <div className="btns">
              <Link to="/contact" className="hero-button contact">
                Contact Me{" "}
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              </Link>
              <a
  href="/Fares's Resume.pdf"
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
