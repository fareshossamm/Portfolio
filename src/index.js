import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles
import reportWebVitals from './reportWebVitals';

// Initialize AOS
AOS.init({
  duration: 3000, // Duration of animations in milliseconds
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
