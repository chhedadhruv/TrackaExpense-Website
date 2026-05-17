import React from 'react';
import { FaStar } from 'react-icons/fa';
import { TESTIMONIALS } from '../constants/data';

const TestimonialsSection = () => (
  <section id="testimonials" className="testimonials-section">
    <div className="container-width">
      <div className="section-header">
        <h2 className="section-title">What Our Users Say</h2>
        <p className="section-subtitle">
          Don't just take our word for it — hear from some of our satisfied users
        </p>
      </div>

      <div className="testimonials-grid">
        {TESTIMONIALS.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="quote-icon">
              <div className="quote-bubble">
                <span>"</span>
              </div>
            </div>

            <div className="stars">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <FaStar key={i} className="star-icon" />
              ))}
            </div>

            <blockquote className="testimonial-text">"{testimonial.text}"</blockquote>

            <div className="testimonial-author">
              <div className="author-avatar">
                <span>{testimonial.name.charAt(0)}</span>
              </div>
              <div className="author-info">
                <div className="author-name">{testimonial.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="trust-indicators">
        <div className="trust-item">
          <FaStar className="trust-icon" />
          <span className="trust-value">5</span>
          <span className="trust-label">rating</span>
        </div>
        <div className="trust-item">
          <span className="trust-value">100%</span>
          <span className="trust-label">ad-free experience</span>
        </div>
        <div className="trust-item">
          <span className="trust-value">Free</span>
          <span className="trust-label">forever</span>
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
