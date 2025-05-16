import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-main-info">
        <div className="footer-company">
          <div className="footer-company-row">
            <span className="footer-logo">
              <svg className="footer-logo-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="footer-company-name">Plexilis LLC</span>
          </div>
          <div className="footer-company-desc">Empowering digital transformation with innovative solutions in AI, Data, and Digital Systems.</div>
        </div>
        <div className="footer-address">
          <div className="footer-address-title">Reach Us</div>
          <div>2603 HOLLINSWORTH PINE LN<br />KATY, TX 77494<br />USA</div>
        </div>
      </div>
      <div className="footer-content">
        <div className="copyright">
          &copy; {currentYear} Plexilis LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 