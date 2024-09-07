import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPalette, faMobileAlt, faLaptopCode, faTabletAlt, faNetworkWired } from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    title: 'Frontend Development',
    description: 'Specializing in building interactive and high-performance web applications using React JS.',
    icon: faCode
  },
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive user interfaces and experiences with Figma to enhance user satisfaction.',
    icon: faPalette
  },
  {
    title: 'Mobile App Design',
    description: 'Designing seamless mobile app experiences with Figma, ensuring both functionality and aesthetics.',
    icon: faMobileAlt
  },
  {
    title: 'Web Design',
    description: 'Crafting visually appealing and responsive web designs that look great on any device.',
    icon: faLaptopCode
  },
  {
    title: 'Responsive Web Design',
    description: 'Developing responsive web designs with React JS, ensuring your site looks great on all screen sizes.',
    icon: faTabletAlt
  },
  {
    title: 'API Integration',
    description: 'I integrate third-party APIs to extend functionality, ensuring smooth communication between services and seamless experiences.',
    icon: faNetworkWired
  }
];

const Services = () => {
  return (
    <section id="services" className="services-section" >
      <div className="container">
        <h2 className="section-title" data-aos='fade-down'>My Services</h2>
        <div className="services-grid" >
          {services.map((service, index) => (
            <div key={index} className="service-card" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
              <div className="service-icon">
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
