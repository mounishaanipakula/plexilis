import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Products.css';

const products = [
  {
    id: 'migration-accelerators',
    title: 'Migration Accelerators',
    description: 'Streamline your data and application migration processes with our specialized tools and frameworks.',
    icon: '🚀'
  },
  {
    id: 'system-analyzers',
    title: 'System Analyzers',
    description: 'Comprehensive analysis tools to evaluate, optimize, and enhance your existing systems and infrastructure.',
    icon: '🔍'
  },
  {
    id: 'custom-deep-research',
    title: 'Custom Deep Research',
    description: 'In-depth research solutions tailored to your specific industry challenges and business objectives.',
    icon: '📊'
  }
];

const Products = () => {
  const navigate = useNavigate();

  const handleProductClick = (path) => {
    navigate(`/plexilis/product/${path}`);
  };

  return (
    <section className="products-section">
      <div className="products-container">
        <div className="products-header">
          <h2>Our Products</h2>
          <p>Innovative solutions to accelerate your digital transformation journey</p>
        </div>
        
        <div className="products-grid">
          {products.map((product) => (
            <div 
              key={product.id}
              className="product-card"
              onClick={() => handleProductClick(product.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleProductClick(product.id);
                }
              }}
            >
              <div className="product-icon">{product.icon}</div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <div className="product-cta">
                <span>Learn More</span>
                <span className="arrow">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products; 