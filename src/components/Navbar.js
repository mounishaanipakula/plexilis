import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { 
  FaBuilding, 
  FaCogs, 
  FaBoxOpen, 
  FaUsers, 
  FaPhoneAlt,
  FaChevronRight,
  FaChevronLeft
} from 'react-icons/fa';
import ContactForm from './ContactForm';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const buttonRef = useRef(null);
  const navigate = useNavigate();

  // Services data with paths
  const services = [
    { name: 'UI & UX', path: 'ui-ux' },
    { name: 'Data and Technology Migration', path: 'data-migration' },
    { name: 'ERP Services', path: 'erp-services' },
    { name: 'AI & ML', path: 'ai-ml' },
    { name: 'ETL and Data Integration', path: 'etl-integration' },
    { name: 'Big Data Solutions', path: 'big-data' }
  ];

  // Products data with paths
  const products = [
    { name: 'Migration Accelerators', path: 'migration-accelerators' },
    { name: 'System Analyzers', path: 'system-analyzers' },
    { name: 'Custom Deep Research', path: 'custom-deep-research' }
  ];

  const menuItems = {
    'ABOUT US': {
      icon: <FaBuilding className="menu-icon" />,
      items: ['Our Story', 'Leadership', 'Locations']
    },
    'SERVICES': {
      icon: <FaCogs className="menu-icon" />,
      items: services
    },
    'PRODUCTS': {
      icon: <FaBoxOpen className="menu-icon" />,
      items: products
    },
    'INDUSTRIES': {
      icon: <FaBuilding className="menu-icon" />,
      items: [
        'Finance and Banking',
        'Oil and Gas',
        'Healthcare',
        'Retail and E-Commerce',
        'Manufacturing',
        'Telecommunications',
        'Energy & Utilities',
        'Transportation & Logistics',
        'Government & Public Sector',
        'Education & E-learning',
        'Media & Entertainment',
        'Real Estate & Construction',
        'Legal'
      ]
    },
    'CAREERS': {
      icon: <FaUsers className="menu-icon" />,
      items: ['Current Openings', 'Life at Plexis LLC', 'Benefits', 'Learning & Development']
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        setActiveSubmenu(null);
      }
    };

    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
        setActiveSubmenu(null);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (activeSubmenu) {
      setActiveSubmenu(null);
    }
  };

  const toggleSubmenu = (submenu) => {
    setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
  };

  const handleBackClick = (e) => {
    e.stopPropagation();
    setActiveSubmenu(null);
  };

  const handleServiceClick = (path) => {
    navigate(`/plexilis/service/${path}`);
    setIsMobileMenuOpen(false);
    setActiveSubmenu(null);
  };

  const handleProductClick = (path) => {
    navigate(`/plexilis/product/${path}`);
    setIsMobileMenuOpen(false);
    setActiveSubmenu(null);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <Link to="/plexilis" className="logo">
            <div className="logo-container">
              <svg className="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Plexilis LLC</span>
            </div>
          </Link>

          <div className="nav-links desktop-menu">
            {Object.entries(menuItems).map(([category, { icon, items }]) => (
              <div className="nav-item" key={category}>
                <span className="nav-link">
                  {icon}
                  {category}
                </span>
                <div className="dropdown-menu">
                  <div className="dropdown-content">
                    {items.map((item) => (
                      category === 'SERVICES' ? (
                        <span 
                          key={item.name} 
                          className="dropdown-item"
                          onClick={() => handleServiceClick(item.path)}
                        >
                          {item.name}
                        </span>
                      ) : category === 'PRODUCTS' ? (
                        <span 
                          key={item.name} 
                          className="dropdown-item"
                          onClick={() => handleProductClick(item.path)}
                        >
                          {item.name}
                        </span>
                      ) : (
                        <span key={item} className="dropdown-item">
                          {item}
                        </span>
                      )
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <button className="contact-button-nav" onClick={() => setIsContactFormOpen(true)}>
              <FaPhoneAlt className="menu-icon" />
              Contact Us
            </button>
          </div>

          <button 
            ref={buttonRef}
            className="mobile-menu-button" 
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          {/* Mobile Menu */}
          <div
            ref={mobileMenuRef}
            className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
          >
            <div className="mobile-menu-content">
              {Object.entries(menuItems).map(([category, { icon, items }]) => (
                <div key={category} className="mobile-menu-item">
                  <div 
                    className="mobile-menu-header" 
                    onClick={() => toggleSubmenu(category)}
                  >
                    <span className="mobile-menu-title">
                      {icon}
                      {category}
                    </span>
                    <FaChevronRight 
                      className={`mobile-menu-arrow ${activeSubmenu === category ? 'rotate' : ''}`} 
                    />
                  </div>
                  <div className={`mobile-submenu ${activeSubmenu === category ? 'open' : ''}`}>
                    <div 
                      className="mobile-submenu-back"
                      onClick={handleBackClick}
                    >
                      <FaChevronLeft />
                      <span>Back to Menu</span>
                    </div>
                    {category === 'SERVICES' ? (
                      items.map((item) => (
                        <span 
                          key={item.name} 
                          className="mobile-menu-subitem"
                          onClick={() => handleServiceClick(item.path)}
                        >
                          {item.name}
                        </span>
                      ))
                    ) : category === 'PRODUCTS' ? (
                      items.map((item) => (
                        <span 
                          key={item.name} 
                          className="mobile-menu-subitem"
                          onClick={() => handleProductClick(item.path)}
                        >
                          {item.name}
                        </span>
                      ))
                    ) : (
                      items.map((item) => (
                        <span key={item} className="mobile-menu-subitem">
                          {item}
                        </span>
                      ))
                    )}
                  </div>
                </div>
              ))}
              <button 
                className="mobile-contact-button"
                onClick={() => {
                  setIsContactFormOpen(true);
                  setIsMobileMenuOpen(false);
                }}
              >
                <FaPhoneAlt className="menu-icon" />
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </>
  );
};

export default Navbar; 