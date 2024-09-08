import React from 'react';
import { useParams } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaBehance } from 'react-icons/fa'; // Import the Behance icon
import './ProjectDetails.css'; // Import the updated CSS
import img1 from './imgs/cerca.webp';
import img2 from './imgs/organick.webp';
import img3 from './imgs/e learning.webp'; 
import img4 from './imgs/Quiz.webp'; 
import img5 from './imgs/medical.webp'; 
import img6 from './imgs/alwalaa.webp'; 
import img7 from './imgs/lumicare2.webp'; 
import img8 from './imgs/edupulsa.webp'; 
import img9 from './imgs/file cover - 1.webp'; 
import img10 from './imgs/CRUD-1.webp'; 
import img11 from './imgs/fetch.webp' ; 
const projects = [
  {
    id: 1,
    imageUrl: img1,
    description: 'Cerca is a local t-shirt brand that focuses on providing high-quality, stylish, and comfortable unisex t-shirts. The website features a modern and clean design.',
    technologies: ['React', 'React-DOM', 'React-Router-Dom', 'React-Bootstrap'],
    repoLink: 'https://github.com/fareshossamm/Cerca.git',
    demoLink: 'https://cerca-fareshossamms-projects.vercel.app/'
  },
  {
    id: 2,
    imageUrl: img2,
    description: 'Organick is a business website dedicated to promoting organic and natural food products. It features a clean and modern design with a focus on healthy living ',
    technologies: ['HTML', 'CSS', 'JS', 'Bootstrap'],
    repoLink: 'https://github.com/fareshossamm/Organick.git',
    demoLink: 'https://fareshossamm.github.io/Organick/'
  },
  {
    id: 3,
    imageUrl: img3,
    description: 'courses website serves as a centralized platform for individuals to discover, explore, and enroll in various educational courses, a courses website offers a diverse range of learning opportunities ',
    technologies: ['HTML', 'CSS', 'JS', 'Bootstrap'],
    repoLink: 'https://github.com/fareshossamm/E-learning.git',
    demoLink: 'https://fareshossamm.github.io/E-learning/'
  },
  {
    id: 4,
    imageUrl: img4,
    description: 'This app begins with a click on the start button and shows a card with the rules of the quiz. Two buttons allow you to either exit or continue to the quiz, which shows your correct points at the end ',
    technologies: ['HTML', 'CSS', 'JS', 'Bootstrap'],
    repoLink: 'https://github.com/fareshossamm/Quiz-APP.git',
    demoLink: 'https://fareshossamm.github.io/Quiz-APP/'
  },
  {
    id: 5,
    imageUrl: img5,
    description: 'The Medical website features sections on emergency services, doctors timetables, and opening hours ',
    technologies: ['HTML', 'CSS', 'JS', 'Bootstrap'],
    repoLink: 'https://github.com/fareshossamm/E-learning.git',
    demoLink: 'https://fareshossamm.github.io/E-learning/'
  },
  {
    id: 6,
    imageUrl: img6,
    description: 'AIWALAA company website effectively showcases the companys expertise, credibility, and past successes while providing easy access to key information and encouraging visitor engagement',
    technologies: ['HTML', 'CSS', 'JS', 'Bootstrap'],
    repoLink: 'https://github.com/fareshossamm/alwalaa.git',
    demoLink: 'https://fareshossamm.github.io/alwalaa/'
  },
  {
    id: 7,
    imageUrl: img7,
    description: 'Design a user-centric elder healthcare app in Figma, focusing on ease of use and accessibility. Create clear, intuitive interfaces for features like medication management, appointment scheduling, and health monitoring. Ensure large, readable text, simple navigation, and high-contrast colors to enhance usability for elders.',
    technologies: ['Figma'],
    BehanceLink: 'https://www.behance.net/gallery/206773061/LumiCare'
  },
  {
    id: 8,
    imageUrl: img8,
    description: 'Design an intuitive E-learning platform by creating wireframes and high-fidelity mockups in Figma. Focus on user-friendly layouts for course listings, details, and dashboards, ensuring responsive design across devices. Use Figma’s collaborative features for feedback and iterate on designs for accessibility and consistency.',
    technologies: ['Figma'],
    BehanceLink: 'https://www.behance.net/gallery/206463579/EduPluse'
  },
  {
    id: 9,
    imageUrl: img9,
    description: 'BookVoyage is a cutting-edge mobile app designed to transform the way book enthusiasts discover, purchase, and read their favorite titles. Whether you are an avid reader or just beginning your literary journey, BookVoyage offers a seamless and personalized experience tailored to your reading preferences',
    technologies: ['Figma'],
    BehanceLink: 'https://www.behance.net/gallery/207179997/BookVoyage'
  },
  {
    id: 10,
    imageUrl: img10,
    description: 'This system facilitates efficient management of data. Users can seamlessly perform all CRUD operations on their data sets',
    technologies: ['HTML', 'CSS', 'JS', 'Bootstrap'],
    repoLink: 'https://github.com/fareshossamm/CRUD.git',
    demoLink: 'https://fareshossamm.github.io/CRUD/'
  },
  {
    id: 11,
    imageUrl: img11,
    description: 'Fetch Repositories is a powerful tool designed to streamline the process of discovering, managing, and organizing your GitHub repositories ',
    technologies: ['HTML', 'CSS', 'JS', 'Bootstrap'],
    repoLink: 'https://github.com/fareshossamm/alwalaa.git',
    demoLink: 'https://fareshossamm.github.io/alwalaa/'
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return <div className='not-found'>Project not found</div>;

  return (
    <div className='project-details-container'>
      <section className='project-details'>
        <div className='project-content'>
          <img src={project.imageUrl} alt={project.title} className='project-image' />
          <div className='project-info'>
            <h1 className='project-title'>{project.title}</h1>
            <p className='project-description'>{project.description}</p>
            <div className='project-tech'>
              {project.technologies.map((tech, index) => (
                <span key={index} className='tech-tag'>{tech}</span>
              ))}
            </div>
            <div className='project-links'>
              {project.technologies.includes('Figma') ? (
                <a 
                  href={project.BehanceLink} 
                  target='_blank' 
                  rel='noopener noreferrer' 
                  className='link-button'
                >
                  <FaBehance className='icon' />
                </a>
              ) : (
                <>
                  <a 
                    href={project.repoLink} 
                    target='_blank' 
                    rel='noopener noreferrer' 
                    className='link-button'
                  >
                    <FaGithub className='icon' />
                  </a>
                  <a 
                    href={project.demoLink} 
                    target='_blank' 
                    rel='noopener noreferrer' 
                    className='link-button'
                  >
                    <FaExternalLinkAlt className='icon' />
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
