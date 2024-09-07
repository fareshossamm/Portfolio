import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {

  faUser,
  faGraduationCap,
  faStar,
} from '@fortawesome/free-solid-svg-icons'; // Solid icons
import './About.css';
import Avatar from './imgs/avatar.png';

const About = () => {
  const [activeTab, setActiveTab] = useState('personal');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="about-container">
      <div className="left-pane" data-aos="fade-right">
        <div className="avatar-section">
          <img src={Avatar} alt="Avatar" className="avatar" />
          <h1>Fares Hossam</h1>
          <p className="subtitle">Front-end Developer & UI/UX Designer</p>
        </div>
        <nav className="nav">
          <ul>
            <li
              onClick={() => handleTabChange('personal')}
              className={activeTab === 'personal' ? 'active' : ''}
              data-aos="fade-up"
            >
              <FontAwesomeIcon icon={faUser} className="icon" /> Personal Info
            </li>
            <li
              onClick={() => handleTabChange('education')}
              className={activeTab === 'education' ? 'active' : ''}
              data-aos="fade-up"
            >
              <FontAwesomeIcon icon={faGraduationCap} className="icon" /> Education
            </li>
           
          </ul>
        </nav>
      </div>
      <div className="right-pane">
        {activeTab === 'personal' && (
          <div className="content-section" data-aos="fade-up">
            <h4>Welcome to My Portfolio! Self-Taught Frontend Developer with Dedication, Quick Learning, and Collaborative Spirit.</h4>
            <h2>
              What I Offer <FontAwesomeIcon icon={faStar} className="section-icon" />
            </h2>
            <p>
              

Passionate Frontend Developer & UI/UX Designer: Crafting exceptional user interfaces and creating memorable digital experiences is my forte. I specialize in designing and building engaging, user-centric web applications.

Educational Background: Currently pursuing a degree in Information Technology at Beni-Suef University, focusing on Computer Science and Artificial Intelligence.

Continuous Learning: Committed to staying current with industry trends and enhancing my skills through various online courses and workshops.

Technical Expertise: Proficient in HTML5, CSS3, and JavaScript, with a strong focus on modern frameworks such as ReactJS and Bootstrap. Experienced in creating responsive and interactive designs.

UI/UX Design Skills: Skilled in using Figma to design intuitive and visually appealing user interfaces. My approach combines aesthetic design with a deep understanding of user experience principles.

Versatility in Tools: Proficient with Git & GitHub for version control, ensuring smooth collaboration and efficient development workflows.

Adaptable Under Pressure: Demonstrated ability to quickly learn new technologies and deliver high-quality results even in challenging scenarios. <br/>
              <span className="Languages">Languages:</span> Fluent in Arabic (Mother Tongue) and intermediate proficiency in English.
            </p>
          </div>
        )}
        {activeTab === 'education' && (
          <div className="content-section" data-aos="fade-up">
            <h4>Studying information technology at Beni-Suef University, Faculty of Computer Science and Artificial Intelligence</h4>
            <p>
              Computer Science and Artificial Intelligence (AI) form a dynamic and cutting-edge faculty that explores the vast realm of information technology,<br />
              computational theories, and intelligent systems. Students in this faculty delve into the core principles of computer science, gaining expertise in programming,<br />
              algorithms, data structures, and software development. The faculty emphasizes hands-on experience through projects, encouraging students to apply theoretical knowledge<br />
              to real-world challenges. Research opportunities abound, allowing students to contribute to advancements in AI, data science, and computer systems. In a world increasingly<br />
              driven by technology, graduates from the Computer Science and AI faculty emerge with a versatile skill set, ready to tackle complex problems and lead innovations in diverse<br />
              industries, from healthcare to finance and beyond. The faculty serves as a hub for cultivating the next generation of tech-savvy professionals who will shape the future of computing and artificial intelligence.
            </p>
          </div>
        )}
      
      </div>
    </div>
  );
};

export default About;
