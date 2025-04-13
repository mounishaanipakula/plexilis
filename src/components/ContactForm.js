import React, { useState } from 'react';
import './ContactForm.css';
import { FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Handle form submission here
      console.log('Form submitted:', formData);
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: ''
      });
      onClose();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="contact-form-overlay">
      <div className="contact-form-container">
        <button className="close-button" onClick={onClose}>
          <FaTimes />
        </button>
        
        <div className="contact-form-content">
          <div className="contact-form-left">
            <h2>Contact us</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name *"
                  className={errors.fullName ? 'error' : ''}
                />
                {errors.fullName && <span className="error-message">{errors.fullName}</span>}
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email *"
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message *"
                  rows="4"
                  className={errors.message ? 'error' : ''}
                />
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
          
          <div className="contact-form-right">
            <div className="contact-illustration">
              <svg viewBox="0 0 500 500" className="illustration">
                {/* Person with envelope/message illustration */}
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: 'var(--primary-color)', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#0055aa', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                
                {/* Background circle */}
                <circle cx="250" cy="250" r="200" fill="#f0f4f8" opacity="0.5" />
                
                {/* Envelope base */}
                <path d="M150 200 L350 200 L350 350 L150 350 Z" 
                      fill="white" 
                      stroke="url(#grad1)" 
                      strokeWidth="4"/>
                
                {/* Envelope flap */}
                <path d="M150 200 L250 280 L350 200" 
                      fill="none" 
                      stroke="url(#grad1)" 
                      strokeWidth="4"/>
                
                {/* Message lines */}
                <g transform="translate(180, 250)">
                  <rect width="140" height="4" rx="2" fill="var(--primary-color)" opacity="0.3"/>
                  <rect y="20" width="100" height="4" rx="2" fill="var(--primary-color)" opacity="0.3"/>
                  <rect y="40" width="120" height="4" rx="2" fill="var(--primary-color)" opacity="0.3"/>
                </g>
                
                {/* Flying messages */}
                <g transform="translate(100, 150)">
                  <rect width="40" height="30" rx="4" fill="var(--primary-color)" opacity="0.2" transform="rotate(-15)"/>
                </g>
                <g transform="translate(380, 180)">
                  <rect width="40" height="30" rx="4" fill="var(--primary-color)" opacity="0.2" transform="rotate(15)"/>
                </g>
                
                {/* Decorative dots */}
                <g fill="var(--primary-color)" opacity="0.2">
                  <circle cx="120" cy="150" r="5"/>
                  <circle cx="380" cy="140" r="8"/>
                  <circle cx="420" cy="280" r="6"/>
                  <circle cx="100" cy="320" r="7"/>
                </g>
                
                {/* Curved lines */}
                <path d="M80 200 Q 250 120 420 200" 
                      fill="none" 
                      stroke="var(--primary-color)" 
                      strokeWidth="2" 
                      opacity="0.2"
                      strokeDasharray="5,5"/>
                <path d="M100 350 Q 250 420 400 350" 
                      fill="none" 
                      stroke="var(--primary-color)" 
                      strokeWidth="2" 
                      opacity="0.2"
                      strokeDasharray="5,5"/>
              </svg>
            </div>
            <div className="contact-info">
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span>+1 (987) 651-1111</span>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>contact@plexilis.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm; 