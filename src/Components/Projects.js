import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from './imgs/cerca.webp';
import img2 from './imgs/organick.webp';
import img3 from './imgs/e learning.webp'; 
import img4 from './imgs/Quiz.webp'; 
import img5 from './imgs/medical.webp'; 
import img6 from './imgs/alwalaa.webp'; 
import img7 from './imgs/lumicare2.webp'; 
import img8 from './imgs/landing laptop.webp'; 
import img9 from './imgs/file cover - 1.webp'; 
import img10 from './imgs/CRUD-1.webp'; 
import img11 from './imgs/fetch.webp' ; 

const projects = [
  { id: 1, title: 'Cerca', imageUrl: img1, category: 'Frontend' },
  { id: 2, title: 'Organick', imageUrl: img2, category: 'Frontend' },
  { id: 3, title: 'E-learning', imageUrl: img3, category: 'Frontend' },
  { id: 4, title: 'Quiz', imageUrl: img4, category: 'Frontend' },
  { id: 5, title: 'Medical', imageUrl: img5, category: 'Frontend' },
  { id: 6, title: 'Alwalaa', imageUrl: img6, category: 'Frontend' },
  { id: 9, title: 'BookVoyage', imageUrl: img9, category: 'UI/UX' },
  { id: 8, title: 'EduPulse', imageUrl: img8, category: 'UI/UX' },
  { id: 7, title: 'LumkiCare', imageUrl: img7, category: 'UI/UX' },
  { id: 10, title: 'CRUD System', imageUrl: img10, category: 'Frontend' },
  { id: 11, title: 'Fetch Repos', imageUrl: img11, category: 'Frontend' },
];

const Categories = ['Frontend', 'UI/UX'];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('Frontend');
  const [showAll, setShowAll] = useState(false);
  const projectsGridRef = useRef(null); 
  const sectionRef = useRef(null); // Ref for the section to scroll to top

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (showAll && projectsGridRef.current) {
      projectsGridRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showAll]);

  const scrollToTop = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShowAllToggle = () => {
    setShowAll(prev => {
      const newState = !prev;
      if (!newState) {
        scrollToTop();
      }
      return newState;
    });
  };

  const filteredProjects = projects.filter(project => project.category === selectedCategory);
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <section className='projects-section' ref={sectionRef}>
      <h2 className='section-title' data-aos='fade-up'>Projects</h2>
      
      <div className='filter-container' data-aos='fade-up'>
        {Categories.map(category => (
          <button 
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className='projects-grid' ref={projectsGridRef}>
        {displayedProjects.map(project => (
          <div key={project.id} className='project-card' data-aos='fade-up'>
            <Link to={`/projects/${project.id}`} className='project-link'>
              <img src={project.imageUrl} alt={project.title} className='project-image' />
              <div className='project-content'>
                <h3 className='project-title'>{project.title}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className='see-all-container'>
        <button 
          className='see-all-btn' 
          onClick={handleShowAllToggle}
        >
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </section>
  );
};

export default Projects;
