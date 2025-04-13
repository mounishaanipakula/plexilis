import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';

const visionItems = [
  {
    title: 'UI & UX',
    subtitle: 'Creating intuitive and engaging user experiences',
    image: '/images/uiandux.png',
    path: 'ui-ux'
  },
  {
    title: 'Data and Technology Migration',
    subtitle: 'Seamlessly transitioning your systems to modern platforms',
    image: '/images/datamigration.png',
    path: 'data-migration'
  },
  {
    title: 'ERP Services',
    subtitle: 'Streamlining business processes with integrated solutions',
    image: '/images/erp.png',
    path: 'erp-services'
  },
  {
    title: 'AI & ML',
    subtitle: 'Leveraging technology to drive innovation and growth',
    image: '/images/aiml.png',
    path: 'ai-ml'
  },
  {
    title: 'ETL and Data Integration',
    subtitle: 'Connecting systems to unlock data-driven insights',
    image: '/images/etl.png',
    path: 'etl-integration'
  },
  {
    title: 'Big Data Solutions',
    subtitle: 'Transforming vast data into actionable business intelligence',
    image: '/images/bigdata.png',
    path: 'big-data'
  }
];

const Services = () => {
  const navigate = useNavigate();

  const handleServiceClick = (path) => {
    navigate(`/plexilis/service/${path}`);
  };

  return (
    <main className="main-content">
      <div className="vision-circle">
        <div className="center-content" style={{ backgroundImage: 'url(/images/services.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="center-text">
            <h1 style={{ color: 'white', fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '2.2rem', lineHeight: 1.2, letterSpacing: '-0.02em' }}>Intelligent Transformation Through AI, Data, and Digital Systems.</h1>
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