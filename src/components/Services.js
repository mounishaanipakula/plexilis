import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';

// Get the base URL for GitHub Pages
const baseUrl = process.env.PUBLIC_URL || '';

const visionItems = [
  {
    title: 'UI & UX',
    subtitle: 'Creating intuitive and engaging user experiences',
    image: `${baseUrl}/images/uiandux.png`,
    path: 'ui-ux'
  },
  {
    title: 'Data and Technology Migration',
    subtitle: 'Seamlessly transitioning your systems to modern platforms',
    image: `${baseUrl}/images/datamigration.png`,
    path: 'data-migration'
  },
  {
    title: 'ERP Services',
    subtitle: 'Streamlining business processes with integrated solutions',
    image: `${baseUrl}/images/erp.png`,
    path: 'erp-services'
  },
  {
    title: 'AI & ML',
    subtitle: 'Leveraging technology to drive innovation and growth',
    image: `${baseUrl}/images/aiml.png`,
    path: 'ai-ml'
  },
  {
    title: 'ETL and Data Integration',
    subtitle: 'Connecting systems to unlock data-driven insights',
    image: `${baseUrl}/images/etl.png`,
    path: 'etl-integration'
  },
  {
    title: 'Big Data Solutions',
    subtitle: 'Transforming vast data into actionable business intelligence',
    image: `${baseUrl}/images/bigdata.png`,
    path: 'big-data'
  }
];

const Services = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 1024 && window.innerWidth > 768);
  const [isSmallTablet, setIsSmallTablet] = useState(window.innerWidth <= 900 && window.innerWidth > 768);
  const [isLargeTablet, setIsLargeTablet] = useState(window.innerWidth <= 1200 && window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth <= 1024 && window.innerWidth > 768);
      setIsSmallTablet(window.innerWidth <= 900 && window.innerWidth > 768);
      setIsLargeTablet(window.innerWidth <= 1200 && window.innerWidth > 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleServiceClick = (path) => {
    navigate(`/plexilis/service/${path}`);
  };

  // Determine font size based on screen size
  const getTitleFontSize = () => {
    if (isMobile) return '1.4rem';
    if (isSmallTablet) return '1.6rem';
    if (isTablet) return '1.8rem';
    if (isLargeTablet) return '2rem';
    return '2.2rem';
  };

  return (
    <main className="main-content">
      <div className="vision-circle">
        <div className="center-content" style={{ backgroundImage: `url(${baseUrl}/images/services.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="center-text">
            <h1 style={{ 
              color: 'var(--primary-color)', 
              fontFamily: "'Playfair Display', serif", 
              fontWeight: 700, 
              fontSize: getTitleFontSize(), 
              lineHeight: 1.2, 
              letterSpacing: '-0.02em',
              maxWidth: isMobile ? '100%' : isTablet ? '90%' : '80%',
              margin: '0 auto'
            }}>
              Intelligent Transformation Through AI, Data, and Digital Systems.
            </h1>
          </div>
        </div>
        {visionItems.map((item, index) => (
          <div
            key={item.title}
            className="vision-item"
            style={{
              '--index': index,
              '--total': visionItems.length,
              backgroundImage: `url(${item.image})`
            }}
            onClick={() => handleServiceClick(item.path)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleServiceClick(item.path);
              }
            }}
          >
            <div className="vision-content">
              <h2>{item.title}</h2>
              <p>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Services; 