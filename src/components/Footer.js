import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="copyright">
          &copy; {currentYear} Plexilis LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 