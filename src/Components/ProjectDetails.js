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
    description: `
      Project: Custom E-Commerce Website for a Local T-shirt Brand
  
      For this project, I collaborated with a local t-shirt brand to create a dynamic, user-friendly e-commerce website. The site features a sleek product catalog where users can explore a variety of unisex t-shirts. One of the standout features is the ability to easily switch between available colors for each product, enhancing the shopping experience.
  
      The ordering process was designed with simplicity in mind: users can fill out a form with their name, address, phone number, and product choice. Through integration with EmailJS, the order details are automatically sent to the admin via email for processing. Additionally, I implemented an "Order on WhatsApp" button, allowing users to place their order directly through WhatsApp. The button auto-generates a message containing all the relevant product and customer details, making it as seamless as possible.
  
      This project emphasized both the functional and user experience aspects, ensuring an efficient and enjoyable shopping process for customers, while keeping the admin workflow smooth and automated.
    `,
    technologies: ['React', 'React-DOM', 'React-Router-Dom', 'React-Bootstrap'],
    repoLink: 'https://github.com/fareshossamm/Cerca.git',
    demoLink: 'https://cerca-fareshossamms-projects.vercel.app/'
  }
  ,
  {
    id: 2,
    imageUrl: img2,
    description: `

Project: Healthy Food and Vegetable Store Website

I developed a clean and intuitive website for a local healthy food and vegetable store, offering users an easy way to browse through a wide variety of fresh produce. The website showcases all available products, complete with prices, ratings, and detailed descriptions. 

Users can effortlessly add items to their shopping cart and curate their list of desired products. However, purchases aren’t completed online—users can review their cart and then place their orders via phone or email, both of which are prominently displayed on the website for quick contact.

This project was focused on delivering an easy-to-navigate platform for users to explore products, while integrating simple and effective communication methods for placing orders directly with the store.
`,
    technologies: ['HTML', 'CSS', 'JS', 'Bootstrap'],
    repoLink: 'https://github.com/fareshossamm/Organick.git',
    demoLink: 'https://fareshossamm.github.io/Organick/'
  },
  {
    id: 3,
    imageUrl: img3,
    description: `

Project: Online Courses Platform with User Authentication and Advanced Search

In this project, I developed a comprehensive online platform for users to explore and enroll in courses. The website features both "Sign Up" and "Login" functionalities, allowing new users to create an account and returning users to log in seamlessly.

The homepage provides a clean and engaging introduction to the platform, complete with quick navigation buttons for easy access. Users can browse through a variety of available courses, utilizing an advanced search feature that filters results in real-time as they type. Once a course is selected, users can purchase and begin watching the course directly through the website.

Additionally, I integrated a section where users can explore detailed profiles of the instructors, complete with their credentials, course specializations, and contact information for further engagement. The platform also includes an "About Us" page to provide background on the platform’s mission and goals.

This project focused on creating an intuitive, user-friendly experience while ensuring smooth functionality for browsing, filtering, and purchasing courses.
`,
    technologies: ['HTML', 'CSS', 'JS', 'Bootstrap'],
    repoLink: 'https://github.com/fareshossamm/E-learning.git',
    demoLink: 'https://fareshossamm.github.io/E-learning/'
  },
  {
    id: 4,
    imageUrl: img4,
    description: `

Project: Interactive JavaScript Quiz Platform

I built an interactive and user-friendly JavaScript quiz platform, designed to test users' knowledge through a 10-question exam. The platform presents a beautifully crafted card layout with clear instructions and rules, ensuring a seamless and enjoyable experience for users.

Upon starting the quiz, users receive immediate feedback on each question, highlighting any incorrect answers to enhance their learning. At the end of the quiz, a detailed results page summarizes the performance, providing both the score and an overview of the user's mistakes for further improvement.

This project focused on creating a visually appealing and intuitive interface, offering real-time feedback and a smooth, engaging experience for users looking to sharpen their JavaScript skills.

`,
    technologies: ['HTML', 'CSS', 'JS', 'Bootstrap'],
    repoLink: 'https://github.com/fareshossamm/Quiz-APP.git',
    demoLink: 'https://fareshossamm.github.io/Quiz-APP/'
  },
  {
    id: 5,
    imageUrl: img5,
    description: `
Project: Comprehensive Hospital Website with Doctor Schedules and Appointment Booking

For this project, I designed a professional and user-friendly website for a hospital, providing visitors with key information about the medical services offered. Users can easily explore detailed profiles of the doctors, including their specialties and available appointment times, making it simple to choose the right physician.

The website features a dedicated section about the hospital, highlighting the number of rooms, doctors, patients, and years of experience. An engaging video introduces the hospital, showcasing its mission and the quality of care provided. In case of emergencies, users can quickly access the hospital’s emergency contact information via a prominent "Emergency Contact" section.

Additionally, the site offers a wide range of services, a blog with the latest medical and health news, and a convenient appointment booking form for users to schedule visits directly through the site.

This project focused on delivering a smooth and informative user experience, while ensuring essential services and information are easily accessible to patients.
`,
    technologies: ['HTML', 'CSS', 'JS', 'Bootstrap'],
    repoLink: 'https://github.com/fareshossamm/Medical.git',
    demoLink: 'https://fareshossamm.github.io/Medical/'
  },
  {
    id: 6,
    imageUrl: img6,
    description: `

Project: Construction Company Website Showcasing Projects and Services

For this project, I collaborated closely with the company’s director to understand their vision for the website. The goal was to create an engaging platform that effectively showcases the company’s services and how they assist clients with various construction needs.

The website highlights the company’s previous projects through high-quality images and videos, offering detailed descriptions of each project. In addition, it showcases the company’s certifications, ensuring credibility and trust with potential clients. The director’s personal message, along with a company overview, provides insights into the company’s values and expertise.

Key features also include easy access to contact information, branch locations, and details about the different types of services the company offers. The site was designed to provide an informative and user-friendly experience, allowing potential clients to connect with the company effortlessly.

`,
    technologies: ['HTML', 'CSS', 'JS', 'Bootstrap'],
    repoLink: 'https://github.com/fareshossamm/alwalaa.git',
    demoLink: 'https://fareshossamm.github.io/alwalaa/'
  },
  {
    id: 7,
    imageUrl: img7,
    description: `

Project: UI/UX Design for a Senior Assistance Mobile App

In this project, I collaborated closely with the client to understand their vision for a mobile app designed to assist the elderly in managing their daily health needs. The app was created with simplicity and ease of use in mind, ensuring a smooth user experience for older individuals.

The app provides features such as medication reminders, doctor appointments, and scheduled hydration alerts to help seniors maintain a healthy lifestyle. It also allows users to communicate with doctors, book appointments, and even hold video calls for remote consultations. Seniors can also add daily tasks, set goals, and receive timely notifications to stay on track.

One unique aspect of the app is the ability for caregivers or family members to manage the schedules and appointments for their loved ones, ensuring everything is well-organized. In emergencies, the app includes an emergency contact button, automatically dialing a chosen number, with a secondary contact receiving a message if the first contact is unavailable.

Throughout the design process, I focused on creating a visually comfortable and user-friendly interface, enhancing usability and accessibility for the elderly. The design ensures a relaxing and supportive experience, empowering users to manage their health effortlessly.

`,
    technologies: ['Figma'],
    BehanceLink: 'https://www.behance.net/gallery/206773061/LumiCare'
  },
  {
    id: 8,
    imageUrl: img8,
    description: `

Project: UI/UX Design for an Online Courses Platform (Figma)

I designed a comprehensive online courses platform using Figma, aimed at delivering an efficient learning experience for users. The website features a "Sign Up" and "Login" system, allowing users to create accounts or access their existing ones.

The homepage provides a clear introduction to the platform, with quick navigation buttons and a detailed view of available courses. An advanced search filter enhances user experience by providing real-time results as users type. Once a course is selected, users can purchase and start their learning journey directly from the site.

For administrators, I designed a dedicated dashboard allowing them to add new courses effortlessly. This dashboard provides a streamlined interface for course management, without requiring a login system or displaying instructor details. The design ensures that admins can efficiently manage course content while maintaining a user-friendly experience for visitors.

The design emphasizes usability and simplicity, ensuring both users and administrators have a smooth and effective experience.

`,
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
           
            <p className='project-description'>{project.description}</p>
            
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
