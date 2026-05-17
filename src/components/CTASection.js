import React from 'react';
import { FaGooglePlay, FaApple, FaCheckCircle } from 'react-icons/fa';
import { STORE_LINKS } from '../constants/data';

const CTASection = () => (
  <section className="cta-section">
    <div className="container-width">
      <div className="cta-content">
        <h2 className="cta-title">Ready to Get Started?</h2>
        <p className="cta-subtitle">
          Join thousands of satisfied users and transform your financial management today.
        </p>

        <div className="cta-buttons">
          <a
            href={STORE_LINKS.playStore}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-white btn-large"
          >
            <FaGooglePlay className="btn-icon" />
            Get on Play Store
          </a>
          <a
            href={STORE_LINKS.appStore}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-white btn-large"
          >
            <FaApple className="btn-icon" />
            Get on App Store
          </a>
        </div>

        <p className="cta-note">
          <FaCheckCircle className="cta-note-icon" /> No credit card required • 100% Free • No Ads
        </p>
      </div>
    </div>

    <div className="cta-background">
      <div className="cta-decoration cta-decoration-1" />
      <div className="cta-decoration cta-decoration-2" />
    </div>
  </section>
);

export default CTASection;
