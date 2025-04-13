import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ServiceDetails.css';

// Service details data
const serviceDetails = {
  'ui-ux': {
    title: 'UI/UX Design',
    description: 'Our UI/UX design services create intuitive, engaging digital experiences that delight users and drive business growth. We combine creative design with technical expertise to build responsive web and mobile applications using modern frameworks like React, Angular, and Vue.js. Our user-centered approach ensures every interface is accessible, performant, and scalable, delivering consistent brand experiences across all platforms.',
    features: [
      'User research and persona development',
      'Wireframing and prototyping',
      'Responsive web design and development',
      'Cross-platform mobile app development',
      'Design systems and component libraries',
      'Accessibility compliance (WCAG)',
      'Performance optimization and testing',
      'User testing and iterative improvement'
    ],
    benefits: [
      'Intuitive and engaging user experiences',
      'Increased user satisfaction and retention',
      'Reduced development time and costs',
      'Consistent brand experience across platforms',
      'Improved conversion rates and business metrics',
      'Accessible designs that reach all users',
      'Scalable solutions that grow with your business',
      'Competitive advantage through superior UX'
    ],
    technologies: [
      'ReactJS',
      'Angular',
      'Vue.js',
      'React Native',
      'Flutter',
      'Django',
      'Next.js',
      'Tailwind CSS',
      'Strapi',
      'Contentful',
      'Figma',
      'Adobe XD',
      'TypeScript',
      'GraphQL',
      'Redux'
    ],
    useCases: [
      'Enterprise web applications',
      'E-commerce platforms',
      'Mobile applications',
      'Admin dashboards and analytics',
      'Customer portals and self-service tools',
      'Educational platforms and learning management systems',
      'Healthcare patient portals',
      'Financial services interfaces'
    ]
  },
  'data-migration': {
    title: 'Data and Technology Migration Services',
    description: 'Our Data and Technology Migration services help businesses seamlessly transition from legacy systems to modern, scalable platforms without disruption or data loss. We support database migrations (Oracle, PostgreSQL, MySQL, MongoDB), data platform modernization (Cloudera, Hadoop to Databricks, Snowflake), and analytics tool migrations (Dataiku, Alteryx, Apache Airflow). With expertise in AWS, Azure, and GCP, we enable cloud-to-cloud, on-prem-to-cloud, and hybrid migrations that are future-ready and aligned with your business objectives.',
    features: [
      'Database migration (Oracle, PostgreSQL, MySQL, MongoDB)',
      'Data platform modernization (Cloudera, Hadoop to Databricks, Snowflake)',
      'Analytics tool migration (Dataiku, Alteryx, Apache Airflow)',
      'Cloud environment migration (AWS, Azure, GCP)',
      'Data validation and quality assurance',
      'Minimal disruption migration strategies',
      'Post-migration support and optimization',
      'Legacy system decommissioning'
    ],
    benefits: [
      'Seamless transition to modern platforms',
      'Zero data loss during migration',
      'Improved system performance and scalability',
      'Enhanced data accessibility and usability',
      'Reduced operational costs and maintenance',
      'Future-ready technology infrastructure',
      'Better alignment with business objectives',
      'Competitive advantage through modern technology'
    ],
    technologies: [
      'Oracle',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Cloudera',
      'Hadoop',
      'Databricks',
      'Snowflake',
      'Google BigQuery',
      'Dataiku',
      'Alteryx',
      'Apache Airflow',
      'AWS',
      'Azure',
      'GCP'
    ],
    useCases: [
      'Legacy database modernization',
      'Data warehouse migration to cloud',
      'Analytics platform upgrade',
      'Cloud provider migration',
      'Hybrid cloud implementation',
      'Data lake migration',
      'ETL tool migration',
      'Business intelligence platform upgrade'
    ]
  },
  'erp-services': {
    title: 'ERP Services',
    description: 'Our ERP services streamline operations and drive efficiency across business functions. We provide end-to-end consulting, implementation, and support for leading platforms like SAP, Oracle, Microsoft Dynamics, and NetSuite. Whether deploying new systems, upgrading legacy infrastructure, or integrating with other enterprise tools, we ensure smooth transitions with minimal disruption. Our expertise spans finance, supply chain, HR, manufacturing, and CRM modules—helping businesses gain real-time insights and enhance decision-making.',
    features: [
      'ERP implementation and deployment',
      'System upgrade and migration',
      'Customization and configuration',
      'Integration with other enterprise systems',
      'Module-specific implementation (Finance, Supply Chain, HR, etc.)',
      'Training and change management',
      'Ongoing support and maintenance',
      'Performance optimization and tuning'
    ],
    benefits: [
      'Streamlined business processes and workflows',
      'Improved data accuracy and visibility',
      'Enhanced decision-making capabilities',
      'Reduced operational costs and inefficiencies',
      'Better resource allocation and utilization',
      'Increased productivity and efficiency',
      'Compliance with industry regulations',
      'Scalable solutions that grow with your business'
    ],
    technologies: [
      'SAP ECC',
      'SAP S/4HANA',
      'Oracle E-Business Suite',
      'Oracle Fusion Cloud',
      'Microsoft Dynamics',
      'NetSuite',
      'Workday',
      'Infor',
      'Epicor',
      'IFS',
      'Acumatica',
      'Sage',
      'Odoo',
      'ERPNext',
      'Dynamics 365'
    ],
    useCases: [
      'New ERP system deployment',
      'Legacy system upgrade and migration',
      'Multi-module implementation',
      'Cloud ERP migration',
      'ERP integration with other systems',
      'Custom module development',
      'Global ERP rollout',
      'Post-implementation optimization'
    ]
  },
  'ai-ml': {
    title: 'AI & Machine Learning',
    description: 'Our AI and machine learning services leverage cutting-edge technologies to build intelligent systems that transform business processes. We specialize in developing custom AI solutions that automate tasks, provide predictive analytics, and enable data-driven decision making. Our team works with the latest frameworks and tools to create scalable, efficient, and innovative AI applications tailored to your specific needs.',
    features: [
      'Large Language Models (LLMs) and generative AI',
      'Agentic AI frameworks and autonomous systems',
      'Custom AI model development and training',
      'Natural Language Processing (NLP) solutions',
      'Computer vision and image recognition',
      'Predictive analytics and forecasting',
      'AI-powered automation and optimization',
      'Integration with existing business systems'
    ],
    benefits: [
      'Intelligent systems that learn and adapt over time',
      'Automated workflows that reduce manual effort',
      'Data-driven insights for better decision making',
      'Scalable AI solutions that grow with your business',
      'Competitive advantage through cutting-edge technology',
      'Improved efficiency and productivity',
      'Enhanced customer experiences through personalization',
      'Future-proof technology investments'
    ],
    technologies: [
      'LangChain',
      'AutoGen',
      'CrewAI',
      'OpenAI',
      'Hugging Face',
      'TensorFlow',
      'PyTorch',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'FastAPI',
      'Django',
      'React',
      'Vue.js',
      'Angular'
    ],
    useCases: [
      'Intelligent chatbots and virtual assistants',
      'Document processing and information extraction',
      'Predictive maintenance and anomaly detection',
      'Customer behavior analysis and personalization',
      'Process automation and optimization',
      'Image and video analysis',
      'Natural language understanding and generation',
      'Recommendation systems'
    ]
  },
  'etl-integration': {
    title: 'ETL and Data Integration',
    description: 'Our ETL and Data Integration services connect and transform data from diverse sources into clean, analytics-ready datasets. We build robust, scalable pipelines that automate data ingestion, transformation, and loading across cloud, on-premise, and hybrid environments. Using modern tools like Apache NiFi, Airflow, and cloud-native services, we ensure your data is always where it needs to be, in the right format, and at the right time—enabling better business intelligence and AI initiatives.',
    features: [
      'Data extraction from multiple sources',
      'Data transformation and cleansing',
      'Data loading and warehousing',
      'Real-time data streaming and processing',
      'Legacy system migration and modernization',
      'Data lake and warehouse implementation',
      'Data quality and governance',
      'Automated ETL pipeline development'
    ],
    benefits: [
      'Unified view of business data across systems',
      'Improved data accuracy and consistency',
      'Enhanced reporting and analytics capabilities',
      'Streamlined business processes',
      'Better decision-making through integrated insights',
      'Reduced manual data handling and errors',
      'Scalable data infrastructure for future growth',
      'Compliance with data regulations and standards'
    ],
    technologies: [
      'Apache NiFi',
      'Talend',
      'Airflow',
      'dbt',
      'AWS Glue',
      'Azure Data Factory',
      'Google Cloud Dataflow',
      'Snowflake',
      'Databricks',
      'Fivetran',
      'Stitch',
      'Python',
      'SQL',
      'Spark',
      'Kafka'
    ],
    useCases: [
      'Enterprise data warehouse implementation',
      'Real-time data streaming and analytics',
      'Legacy system data migration',
      'Data lake architecture and implementation',
      'Cross-system data integration',
      'Business intelligence and reporting',
      'Machine learning data pipeline development',
      'Data quality and governance programs'
    ]
  },
  'big-data': {
    title: 'Big Data Solutions',
    description: 'Our Big Data solutions transform vast amounts of data into actionable business intelligence. We leverage cutting-edge technologies like Apache Spark, Kafka, and cloud-native services to build real-time, scalable, and cost-efficient data pipelines. Whether you\'re modernizing your data architecture, building analytics platforms, or enabling machine learning at scale, we deliver robust, future-ready solutions backed by years of industry expertise.',
    features: [
      'Big data architecture design and implementation',
      'Real-time data processing and analytics',
      'Data lake and data warehouse solutions',
      'Stream processing and event-driven architectures',
      'Big data migration and modernization',
      'Data governance and security implementation',
      'Machine learning integration at scale',
      'Performance optimization and tuning'
    ],
    benefits: [
      'Deeper insights into business operations and customer behavior',
      'Improved decision-making through data-driven approaches',
      'Identification of new business opportunities and trends',
      'Enhanced operational efficiency and resource allocation',
      'Better risk management and fraud detection',
      'Increased competitive advantage in the market',
      'Scalable data infrastructure for future growth',
      'Cost-effective data processing and storage'
    ],
    technologies: [
      'Apache Spark',
      'Apache Kafka',
      'Apache Cassandra',
      'Apache NiFi',
      'Apache Iceberg',
      'Apache Hudi',
      'Apache Flink',
      'Apache Pinot',
      'AWS Glue',
      'Amazon EMR',
      'Google BigQuery',
      'Azure Synapse Analytics',
      'Databricks',
      'Hadoop',
      'Hive'
    ],
    useCases: [
      'Real-time analytics and reporting',
      'Customer 360 and personalization',
      'Fraud detection and risk management',
      'Supply chain optimization',
      'Predictive maintenance and IoT analytics',
      'Market basket analysis and recommendation engines',
      'Sentiment analysis and social media insights',
      'Regulatory compliance and reporting'
    ]
  }
};

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [hoveredBenefit, setHoveredBenefit] = useState(null);
  const [hoveredTech, setHoveredTech] = useState(null);
  const [hoveredUseCase, setHoveredUseCase] = useState(null);
  
  // Get service details based on the service name
  const service = serviceDetails[serviceId];
  
  // If service doesn't exist, redirect to home
  if (!service) {
    return (
      <div className="service-details-container">
        <div className="service-not-found">
          <h2>Service Not Found</h2>
          <p>The service you're looking for doesn't exist.</p>
          <button onClick={() => navigate('/plexilis')}>Return to Home</button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="service-details-container">
      <div className="service-details-header">
        <button className="back-button" onClick={() => navigate('/')}>
          <span>←</span> Back to Services
        </button>
        <h1>{service.title}</h1>
        <p className="service-description">{service.description}</p>
      </div>
      
      <div className="service-details-content">
        <div className="service-features">
          <h2>Key Features</h2>
          <ul>
            {service.features.map((feature, index) => (
              <li 
                key={index}
                className={hoveredFeature === index ? 'hovered' : ''}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="service-benefits">
          <h2>Business Benefits</h2>
          <ul>
            {service.benefits.map((benefit, index) => (
              <li 
                key={index}
                className={hoveredBenefit === index ? 'hovered' : ''}
                onMouseEnter={() => setHoveredBenefit(index)}
                onMouseLeave={() => setHoveredBenefit(null)}
              >
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {service.technologies && (
        <div className="service-technologies">
          <h2>Technologies We Use</h2>
          <div className="tech-grid">
            {service.technologies.map((tech, index) => (
              <div 
                key={index}
                className={`tech-item ${hoveredTech === index ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredTech(index)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {service.useCases && (
        <div className="service-use-cases">
          <h2>Use Cases</h2>
          <ul>
            {service.useCases.map((useCase, index) => (
              <li 
                key={index}
                className={hoveredUseCase === index ? 'hovered' : ''}
                onMouseEnter={() => setHoveredUseCase(index)}
                onMouseLeave={() => setHoveredUseCase(null)}
              >
                {useCase}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <div className="service-cta">
        <h3>Ready to transform your business?</h3>
        <p>Contact us today to discuss how our {service.title} can help your organization.</p>
        <button className="contact-button">Contact Us</button>
      </div>
    </div>
  );
};

export default ServiceDetails; 