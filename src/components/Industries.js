import React from 'react';
import { FaPlaneDeparture, FaMoneyCheckAlt, FaHeartbeat, FaNetworkWired, FaIndustry, FaShoppingCart } from 'react-icons/fa';
import './Industries.css';

const baseUrl = process.env.PUBLIC_URL || '';

const industries = [
  {
    name: 'Travel And Tourism',
    icon: <FaPlaneDeparture size={44} color="#00bcd4" />,
  },
  {
    name: 'Financial Services',
    icon: <FaMoneyCheckAlt size={44} color="#005bea" />,
  },
  {
    name: 'Insurance Healthcare',
    icon: <FaHeartbeat size={44} color="#e91e63" />,
  },
  {
    name: 'Tele Communications',
    icon: <FaNetworkWired size={44} color="#4caf50" />,
  },
  {
    name: 'Manufacturing',
    icon: <FaIndustry size={44} color="#ff9800" />,
  },
  {
    name: 'E-Commerce & Retail',
    icon: <FaShoppingCart size={44} color="#9c27b0" />,
  },
];

const Industries = () => (
  <section className="industries-section">
    <h2 className="industries-title">Industries</h2>
    <p className="industries-description">
      With our deep expertise and experienced Team, we have created Road Maps, Build Solutions and Delivered Value across Organizations. Here is the list of tools we have acquired and equipped with...
    </p>
    <div className="industries-grid">
      {industries.map((industry) => (
        <div className="industry-card fancy-card" key={industry.name}>
          <div className="industry-icon">
            {industry.icon}
          </div>
          <div className="industry-name">{industry.name}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Industries; 