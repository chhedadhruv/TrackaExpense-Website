import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { 
  FaEnvelope, 
  FaPhone, 
  FaGithub, 
  FaTwitter, 
  FaLinkedin,
  FaQuestionCircle,
  FaShieldAlt,
  FaMobileAlt
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
      icon: <FaQuestionCircle />,
      question: "Is TrackaExpense really free?",
      answer: "Yes! TrackaExpense is 100% free with no ads, subscriptions, or hidden fees."
    },
    {
      icon: <FaMobileAlt />,
      question: "Which platforms are supported?",
      answer: "TrackaExpense is available on Android (Play Store) and iOS (App Store)."
    },
    {
      icon: <FaShieldAlt />,
      question: "How is my data protected?",
      answer: "Your data is securely stored in Firebase with encryption and is never shared with third parties."
    }
  ];

  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container-width">
          <div className="page-hero-content">
            <h1 className="page-hero-title">Get in Touch</h1>
            <p className="page-hero-subtitle">
              Have questions about TrackaExpense? Need support? We're here to help!
            </p>
          </div>
        </div>
        <div className="page-hero-bg">
          <div className="page-bg-circle page-bg-circle-1"></div>
          <div className="page-bg-circle page-bg-circle-2"></div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content-section">
        <div className="container-width">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info-wrapper">
              <div className="contact-info-card">
                <h2 className="contact-info-title">Contact Information</h2>
                <p className="contact-info-subtitle">
                  Reach out for support, feedback, or any questions about TrackaExpense.
                </p>
                
                <div className="contact-methods">
                  <div className="contact-method">
                    <div className="contact-method-icon">
                      <FaEnvelope />
                    </div>
                    <div className="contact-method-details">
                      <h3>Email Us</h3>
                      <a href="mailto:me@dhruvchheda.com">me@dhruvchheda.com</a>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="contact-method-icon">
                      <FaPhone />
                    </div>
                    <div className="contact-method-details">
                      <h3>Call Us</h3>
                      <a href="tel:+918097217836">+91 8097217836</a>
                    </div>
                  </div>
                </div>

                <div className="contact-social">
                  <h3>Connect With Us</h3>
                  <div className="contact-social-links">
                    <a href="https://github.com/chhedadhruv" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                      <FaGithub />
                    </a>
                    <a href="https://x.com/ChhedaDhruv4" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                      <FaTwitter />
                    </a>
                    <a href="https://linkedin.com/in/dhruv-chheda/" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <form ref={form} onSubmit={handleSubmit(onSubmit)} className="contact-form">
                <h2 className="contact-form-title">Send a Message</h2>
                
                <div className="form-row">
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
                      className={errors.name ? 'input-error' : ''}
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
                      className={errors.email ? 'input-error' : ''}
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
                    className={errors.subject ? 'input-error' : ''}
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
                    className={errors.message ? 'input-error' : ''}
                  />
                  {errors.message && (
                    <p className="error-message">{errors.message.message}</p>
                  )}
                </div>

                <button 
                  type="submit" 
                  className={`btn-primary btn-large contact-submit-btn ${isSubmitting ? 'loading' : ''}`}
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
                  <div className="submit-status submit-success">
                    Message sent successfully! We'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="submit-status submit-error">
                    Oops! Something went wrong. Please try again later.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq-section">
        <div className="container-width">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Quick answers to common questions about TrackaExpense</p>
          </div>
          
          <div className="contact-faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="contact-faq-card">
                <div className="contact-faq-icon">{faq.icon}</div>
                <h3 className="contact-faq-question">{faq.question}</h3>
                <p className="contact-faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
