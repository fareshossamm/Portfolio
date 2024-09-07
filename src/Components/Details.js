// src/components/ProjectDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetails.css'; // Import the CSS file

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A brief description of Project One. This project involves various technologies and has interesting features.',
    image: 'path/to/image1.jpg', // Replace with your image path
    technologies: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A brief description of Project Two. This project involves innovative solutions and has a unique approach.',
    image: 'path/to/image2.jpg', // Replace with your image path
    technologies: ['Vue.js', 'Express', 'MySQL'],
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A brief description of Project Three. This project showcases cutting-edge technology and creative design.',
    image: 'path/to/image3.jpg', // Replace with your image path
    technologies: ['Angular', 'Spring Boot', 'PostgreSQL'],
  },
  {
    id: 4,
    title: 'Project Four',
    description: 'A brief description of Project Four. This project highlights advanced features and exceptional performance.',
    image: 'path/to/image4.jpg', // Replace with your image path
    technologies: ['Next.js', 'GraphQL', 'Firebase'],
  }
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className='project-details'>
      <img src={project.image} alt={project.title} className='project-image' />
      <div className='project-info'>
        <h1 className='project-title'>{project.title}</h1>
        <p className='project-description'>{project.description}</p>
        <h3>Technologies Used:</h3>
        <ul className='tech-list'>
          {project.technologies.map((tech, index) => (
            <li key={index} className='tech-item'>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetails;
