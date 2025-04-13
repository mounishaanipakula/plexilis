import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetails.css';

// Product details data
const productDetails = {
  'migration-accelerators': {
    title: 'Migration Accelerators',
    description: 'Our suite of proprietary tools streamlines complex data and platform transitions. We support bidirectional database migrations, cloud platform transfers, ETL tool conversions, and analytics workflow modernization. These accelerators reduce manual effort while ensuring data integrity and business continuity.',
    icon: '🚀',
    migrationTypes: [
      {
        title: 'Database Migration',
        description: 'Bidirectional migration between MySQL and PostgreSQL with data integrity preservation',
        icon: '💾',
        color: '#4CAF50'
      },
      {
        title: 'Cloud Migration',
        description: 'Smooth data transfers from on-premise systems to cloud platforms',
        icon: '☁️',
        color: '#2196F3'
      },
      {
        title: 'ETL Tool Migration',
        description: 'Streamlined conversion from StreamSets to Apache NiFi',
        icon: '🔄',
        color: '#FF9800'
      },
      {
        title: 'Analytics Workflow',
        description: 'Automated migrations from Alteryx and Informatica to Dataiku',
        icon: '📊',
        color: '#9C27B0'
      },
      {
        title: 'Data Lake Migration',
        description: 'Cloudera-to-Databricks migration for modern lakehouse architectures',
        icon: '🏢',
        color: '#E91E63'
      },
      {
        title: 'Version Upgrades',
        description: 'Upgrade legacy deployments to latest versions with minimal downtime',
        icon: '⬆️',
        color: '#607D8B'
      }
    ],
    benefits: [
      'Accelerated migration timelines',
      'Reduced risk and data loss',
      'Minimal business disruption',
      'Improved performance and scalability',
      'Enhanced data integrity',
      'Lower operational costs'
    ]
  },
  'system-analyzers': {
    title: 'System Analyzers',
    description: 'Our suite of system analyzers provides automated insights into infrastructure health, security, and performance. We offer specialized tools for Linux systems, big data environments (Apache NiFi, Spark, Livy, Airflow), and databases (PostgreSQL, MySQL). Each analyzer delivers actionable recommendations to enhance reliability, security, and operational efficiency—empowering teams to proactively manage their environments with confidence.',
    icon: '🔍',
    migrationTypes: [
      {
        title: 'Performance Analysis',
        description: 'Comprehensive benchmarking of system performance metrics',
        icon: '⚡',
        color: '#4CAF50'
      },
      {
        title: 'Security Assessment',
        description: 'Vulnerability scanning and security posture evaluation',
        icon: '🔒',
        color: '#F44336'
      },
      {
        title: 'Code Quality',
        description: 'Analysis of code quality, complexity, and maintainability',
        icon: '📝',
        color: '#2196F3'
      },
      {
        title: 'Resource Utilization',
        description: 'Monitoring and optimization of resource allocation',
        icon: '📈',
        color: '#FF9800'
      },
      {
        title: 'Compliance Checking',
        description: 'Verification against industry standards and regulations',
        icon: '✅',
        color: '#9C27B0'
      },
      {
        title: 'Optimization',
        description: 'Recommendations for system improvements and enhancements',
        icon: '🔧',
        color: '#607D8B'
      }
    ],
    benefits: [
      'Improved system performance and reliability',
      'Enhanced security posture',
      'Reduced operational costs',
      'Extended system lifespan',
      'Proactive issue identification',
      'Data-driven optimization decisions'
    ]
  },
  'custom-deep-research': {
    title: 'Custom Deep Research',
    description: 'Our Custom Deep Research solutions provide in-depth analysis tailored to your specific industry challenges and business objectives.',
    icon: '📊',
    migrationTypes: [
      {
        title: 'Market Analysis',
        description: 'Industry-specific market analysis and trends',
        icon: '📈',
        color: '#4CAF50'
      },
      {
        title: 'Competitive Intelligence',
        description: 'Gathering and analysis of competitive information',
        icon: '🔍',
        color: '#F44336'
      },
      {
        title: 'Technology Assessment',
        description: 'Evaluation of emerging technologies and their impact',
        icon: '💻',
        color: '#2196F3'
      },
      {
        title: 'Regulatory Impact',
        description: 'Analysis of regulatory changes and compliance requirements',
        icon: '📜',
        color: '#FF9800'
      },
      {
        title: 'Consumer Behavior',
        description: 'Studies of consumer preferences and purchasing patterns',
        icon: '👥',
        color: '#9C27B0'
      },
      {
        title: 'Strategic Opportunities',
        description: 'Identification of strategic business opportunities',
        icon: '🎯',
        color: '#607D8B'
      }
    ],
    benefits: [
      'Informed strategic decision-making',
      'Competitive advantage through insights',
      'Risk mitigation through thorough analysis',
      'Identification of emerging opportunities',
      'Enhanced understanding of market dynamics',
      'Support for innovation initiatives'
    ]
  }
};

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  
  // Get product details based on the product ID
  const product = productDetails[productId];
  
  // If product doesn't exist, redirect to home
  if (!product) {
    return <div className="product-not-found">Product not found. <button onClick={() => navigate('/')}>Return to Home</button></div>;
  }
  
  return (
    <div className="product-details-container">
      
      <div className="product-header">
      <button className="back-button" onClick={() => navigate('/')}>
        <span>←</span> Back to Products
      </button>
        <div className="product-icon">{product.icon}</div>
        <h1>{product.title}</h1>
      </div>
      
      <div className="product-content">
        <div className="product-description">
          <p>{product.description}</p>
        </div>
        
        <div className="capabilities-section">
          <h2>Capabilities</h2>
          <div className="capabilities-grid">
            {product.migrationTypes.map((type, index) => (
              <div 
                key={index} 
                className="capability-card"
                style={{ borderTopColor: type.color }}
              >
                <div className="capability-icon" style={{ backgroundColor: type.color }}>
                  {type.icon}
                </div>
                <h3>{type.title}</h3>
                <p>{type.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="benefits-section">
          <h2>Key Benefits</h2>
          <div className="benefits-grid">
            {product.benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">✓</div>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="service-cta">
        <h3>Ready to transform your business?</h3>
        <p>Contact us today to learn how our {product.title} can help your organization.</p>
        <button className="contact-button">Contact Us</button>
      </div>
    </div>
  );
};

export default ProductDetails; 