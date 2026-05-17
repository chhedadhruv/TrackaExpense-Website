import React from 'react';
import { FEATURES } from '../constants/data';

const FeaturesSection = () => (
  <section id="features" className="features-section">
    <div className="container-width">
      <div className="section-header">
        <h2 className="section-title">Everything You Need to Succeed</h2>
        <p className="section-subtitle">
          Powerful features designed to help you achieve complete financial control
        </p>
      </div>

      <div className="features-grid">
        {FEATURES.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
