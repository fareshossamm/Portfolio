import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Nav';
import Hero from './Components/Hero';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Projects from './Components/Projects';
import ProjectDetail from './Components/ProjectDetails'; 
import Skills from './Components/Skills'; 

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Projects /> 
              <Services /> 
              <Skills/> 
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
