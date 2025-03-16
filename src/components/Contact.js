import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaTwitter, 
  FaLinkedin,
  FaQuestionCircle,
  FaComments,
  FaHeadset
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const faqs = [
    {
      icon: <FaHeadset />,
      question: "How quickly do you respond?",
      answer: "We typically respond within 24 hours during business days."
    },
    {
      icon: <FaQuestionCircle />,
      question: "Do you offer technical support?",
      answer: "Yes, our team provides comprehensive technical support for all users."
    },
    {
      icon: <FaComments />,
      question: "Can I request new features?",
      answer: "We welcome feature requests and actively incorporate user feedback."
    }
  ];

  return (
    <div className="contact-container">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Let's Connect</h1>
          <p>Have questions or suggestions? We'd love to hear from you.</p>
        </div>
        <div className="hero-shapes">
          <div className="hero-shape shape-1"></div>
          <div className="hero-shape shape-2"></div>
          <div className="hero-shape shape-3"></div>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card">
              <h2>Get in Touch</h2>
              <p>
                We're here to help! Choose the most convenient way to reach us.
              </p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <FaEnvelope />
                  </div>
                  <div className="method-details">
                    <h3>Email Us</h3>
                    <a href="mailto:me@dhruvchheda.com" target="_blank" rel="noopener noreferrer" aria-label="Email" style={{ textDecoration: 'none', color: 'inherit' }}>me@dhruvchheda.com</a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <FaPhone />
                  </div>
                  <div className="method-details">
                    <h3>Call Us</h3>
                    <a href="tel:+918097217836" target="_blank" rel="noopener noreferrer" aria-label="Phone" style={{ textDecoration: 'none', color: 'inherit' }}>+91 8097217836</a>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h3>Connect With Us</h3>
                <div className="social-icons">
                  <a href="https://github.com/chhedadhruv" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub />
                  </a>
                  <a href="https://x.com/ChhedaDhruv4" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <FaTwitter />
                  </a>
                  <a href="https://linkedin.com/in/dhruv-chheda/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form ref={form} onSubmit={handleSubmit(onSubmit)} className="contact-form">
              <h2>Send a Message</h2>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters"
                      }
                    })}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="error-message">{errors.name.message}</p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address"
                      }
                    })}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="error-message">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  {...register("subject", {
                    required: "Subject is required",
                    minLength: {
                      value: 3,
                      message: "Subject must be at least 3 characters"
                    }
                  })}
                  placeholder="How can we help?"
                />
                {errors.subject && (
                  <p className="error-message">{errors.subject.message}</p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters"
                    }
                  })}
                  placeholder="Your message"
                  rows="5"
                />
                {errors.message && (
                  <p className="error-message">{errors.message.message}</p>
                )}
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="submit-status success">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="submit-status error">
                  Oops! Something went wrong. Please try again later.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Quick answers to common questions about our support and services</p>
        </div>
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-card">
              <div className="faq-icon">{faq.icon}</div>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact; 