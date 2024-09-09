import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Bootstrap JS
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles
import reportWebVitals from './reportWebVitals';

// Initialize AOS
AOS.init({
  duration: 1000, // Duration of animations in milliseconds
  easing: 'ease-in-out', // Easing function for animations
  once: true, // Animation only occurs once when scrolling down
});

// Render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Performance measurement
reportWebVitals();
