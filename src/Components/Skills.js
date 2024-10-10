import React, { useEffect } from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faBootstrap,
  faFigma,
} from '@fortawesome/free-brands-svg-icons';
import { faPalette, faDatabase } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const skillsData = [
  { icon: faFigma, name: 'Figma' },
  { icon: faPalette, name: 'UI/UX' },
  { icon: faHtml5, name: 'HTML' },
  { icon: faCss3Alt, name: 'CSS' },
  { icon: faJsSquare, name: 'JavaScript' },
  { icon: faReact, name: 'React' },
  { icon: faBootstrap, name: 'Bootstrap' },
  { icon: faDatabase, name: 'SQL' },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);

  return (
    <section className="skills-section">
      <div className="skills-content-section" data-aos="fade-up">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-container" data-aos="fade-up">
          {skillsData.map((skill, index) => (
            <div className="skill-box" key={index} data-aos="fade-up">
              <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
