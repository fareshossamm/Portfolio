import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'; // Import SweetAlert2
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import './Contact.css'; 
import ContactImg from './imgs/contact-img (1).svg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (ms)
      once: true, // Whether animation should happen only once
    });
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!/^\d{11}$/.test(formData.phone)) newErrors.phone = 'Phone number must be 11 digits';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear the specific error when user starts typing
    if (value.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    emailjs.sendForm('service_3k5339o', 'template_fy7jgtd', e.target, 'OQqBxhxLtxqchsNsI')
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          title: 'Success!',
          text: 'Your message has been sent successfully!',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        setFormData({ name: '', email: '', phone: '', message: '' }); // Clear form after submission
        setErrors({}); // Clear errors
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          title: 'Error!',
          text: 'An error occurred. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      });
  };

  return (
    <div className='contact-page'>
      <div className='contact-container'>
        <div className='form-container' data-aos="fade-right"> {/* Animation */}
          <h4>Get in Touch</h4>
          <h1>Contact Me</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
            />
            {errors.name && <div className='error-message'>{errors.name}</div>}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
            />
            {errors.email && <div className='error-message'>{errors.email}</div>}
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
            />
            {errors.phone && <div className='error-message'>{errors.phone}</div>}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
            />
            {errors.message && <div className='error-message'>{errors.message}</div>}
            <button className='btn' type="submit">Send Message</button>
          </form>

        </div>
        <div className='illustration-container' data-aos="fade-left"> {/* Animation */}
          <img src={ContactImg} alt="Contact Illustration" className="illustration" />
        </div>
        
      </div>

    </div>
    
  );
};

export default Contact;
