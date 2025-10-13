import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  FaMoneyBillWave,
  FaChartBar,
  FaPiggyBank,
  FaHandshake,
  FaShieldAlt,
  FaMobileAlt,
  FaStar,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaBars,
  FaTimes,
  FaGooglePlay,
  FaApple,
  FaArrowRight,
  FaEnvelope,
  FaCheckCircle,
  FaRocket,
  FaLock,
  FaShoppingCart,
  FaCreditCard,
} from "react-icons/fa";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import PrivacyPolicy from "./components/PrivacyPolicy";
import DeleteAccount from "./components/DeleteAccount";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Features', href: '#features' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const scrollToSection = (href) => {
    setIsMenuOpen(false);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const features = [
    {
      icon: <FaMoneyBillWave />,
      title: "Income & Expense Tracking",
      description: "Track every transaction with ease. View your total expenses, income, and recent transactions on your home dashboard."
    },
    {
      icon: <FaChartBar />,
      title: "Visual Statistics",
      description: "Analyze your spending patterns with graphs and charts for any selected period to make better financial decisions."
    },
    {
      icon: <FaPiggyBank />,
      title: "Savings Goals",
      description: "Set and track progress toward your savings goals with visual progress bars to keep you motivated."
    },
    {
      icon: <FaHandshake />,
      title: "Bill Splitting",
      description: "Split bills with friends equally or by percentage. Simplify group expenses and settle up hassle-free."
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Ready",
      description: "Built with React Native for a smooth native experience on both iOS and Android devices."
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure & Private",
      description: "Your data is securely stored with Firebase encryption. 100% ad-free with no data sharing."
    }
  ];

  const testimonials = [
    {
      name: "Arya Madan",
      rating: 5,
      text: "TrackaExpense makes managing my personal finances incredibly easy. The visual statistics help me understand my spending patterns better."
    },
    {
      name: "Zia Dongri",
      rating: 5,
      text: "The bill splitting feature is a game-changer! No more awkward money conversations with roommates. Everything is clear and transparent."
    },
    {
      name: "Sanaj Jadhav",
      rating: 5,
      text: "I love the savings goals feature! It keeps me motivated and on track to achieve my financial dreams. Simple yet powerful."
    }
  ];

  return (
    <Router>
      <div className="app-wrapper">
        {/* Navbar */}
        <nav className="navbar">
          <div className="container-width">
            <div className="nav-content">
              <div className="nav-logo">
                <Link to="/" className="logo-link">TrackaExpense</Link>
              </div>

              {/* Desktop Navigation */}
              <div className="nav-links-desktop">
                {navigation.map((item) => (
                  item.href.startsWith('#') ? (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="nav-link"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link key={item.name} to={item.href} className="nav-link">
                      {item.name}
                    </Link>
                  )
                ))}
              </div>


              {/* Mobile menu button */}
              <button
                className="mobile-menu-btn"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="mobile-menu">
                {navigation.map((item) => (
                  item.href.startsWith('#') ? (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="mobile-nav-link"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link 
                      key={item.name} 
                      to={item.href} 
                      className="mobile-nav-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                ))}
              </div>
            )}
          </div>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <main className="main-content">
                {/* Hero Section */}
                <section className="hero-section">
                  <div className="container-width">
                    <div className="hero-grid">
                      {/* Content */}
                      <div className="hero-content">
                        <h1 className="hero-title">
                          Transform Your Financial Management with TrackaExpense
                        </h1>
                        <p className="hero-subtitle">
                          A comprehensive, ad-free personal finance app for managing expenses, 
                          tracking income, and achieving your financial goals. Join thousands who've 
                          taken control of their finances.
                        </p>

                        {/* Feature badges */}
                        <div className="hero-badges">
                          <span className="badge"><FaCheckCircle className="badge-icon" /> 100% Ad-Free</span>
                          <span className="badge"><FaRocket className="badge-icon" /> Easy to Use</span>
                          <span className="badge"><FaLock className="badge-icon" /> Secure & Private</span>
                          <span className="badge"><FaMobileAlt className="badge-icon" /> Mobile Ready</span>
                        </div>

                        {/* CTA Buttons */}
                        <div className="hero-cta">
                          <a
                            href="https://play.google.com/store/apps/details?id=com.trackaexpense"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary btn-large"
                          >
                            <FaGooglePlay className="btn-icon" />
                            Get on Play Store
                          </a>
                          <a
                            href="https://apps.apple.com/us/app/trackaexpense/id6752925670"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary btn-large"
                          >
                            <FaApple className="btn-icon" />
                            Get on App Store
                          </a>
                        </div>
                      </div>

                      {/* Hero Visual - Phone Mockup */}
                      <div className="hero-visual">
                        <div className="phone-mockup">
                          <div className="phone-frame">
                            <div className="phone-notch"></div>
                            <div className="phone-screen">
                              {/* System Status Bar */}
                              <div className="system-status-bar">
                                <span className="status-time">9:41</span>
                                <div className="status-icons">
                                  <span className="status-signal">●●●●</span>
                                  <span className="status-battery">100%</span>
                                </div>
                              </div>
                              
                              {/* App Status Bar with Title */}
                              <div className="app-status-bar">
                                <h3 className="app-bar-title">TrackaExpense</h3>
                              </div>

                              {/* Greeting Section */}
                              <div className="app-header-section">
                                <h3 className="app-greeting">Hello, User!</h3>
                                <p className="app-subgreeting">Track your expenses today</p>
                              </div>

                              {/* Summary Cards */}
                              <div className="summary-cards">
                                <div className="summary-card income-card">
                                  <div className="card-header-row">
                                    <div className="card-icon-wrapper income-icon">
                                      <span className="icon-arrow">↓</span>
                                    </div>
                                    <span className="card-label">Total Income</span>
                                  </div>
                                  <span className="card-amount income-amount">₹ 8,250</span>
                                </div>
                                <div className="summary-card expense-card">
                                  <div className="card-header-row">
                                    <div className="card-icon-wrapper expense-icon">
                                      <span className="icon-arrow">↑</span>
                                    </div>
                                    <span className="card-label">Total Expense</span>
                                  </div>
                                  <span className="card-amount expense-amount">₹ 3,420</span>
                                </div>
                              </div>

                              {/* Quick Actions */}
                              <div className="quick-actions-wrapper">
                                <h4 className="quick-actions-title">Quick Actions</h4>
                                <div className="quick-actions-buttons">
                                  <div className="quick-action-btn add-income-btn">
                                    <span className="quick-action-icon">+</span>
                                    <span className="quick-action-label">Add Income</span>
                                  </div>
                                  <div className="quick-action-btn add-expense-btn">
                                    <span className="quick-action-icon">-</span>
                                    <span className="quick-action-label">Add Expense</span>
                                  </div>
                                </div>
                              </div>

                              {/* Recent Transactions */}
                              <div className="transactions-wrapper">
                                <div className="transactions-header-row">
                                  <div>
                                    <h4 className="transactions-title">Recent Transactions</h4>
                                    <p className="transactions-subtitle">2 transactions</p>
                                  </div>
                                </div>
                                <div className="transaction-item">
                                  <div className="transaction-icon-wrapper">
                                    <FaShoppingCart className="transaction-category-icon" />
                                  </div>
                                  <div className="transaction-info">
                                    <span className="transaction-title">Grocery Shopping</span>
                                    <span className="transaction-date">Today, 2:30 PM</span>
                                  </div>
                                  <span className="transaction-amount expense-text">- ₹ 850</span>
                                </div>
                                <div className="transaction-item">
                                  <div className="transaction-icon-wrapper">
                                    <FaMoneyBillWave className="transaction-category-icon" />
                                  </div>
                                  <div className="transaction-info">
                                    <span className="transaction-title">Salary</span>
                                    <span className="transaction-date">Yesterday</span>
                                  </div>
                                  <span className="transaction-amount income-text">+ ₹ 5,000</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hero-decoration decoration-1"></div>
                        <div className="hero-decoration decoration-2"></div>
                      </div>
                    </div>
                  </div>

                  {/* Background */}
                  <div className="hero-background">
                    <div className="bg-circle bg-circle-1"></div>
                    <div className="bg-circle bg-circle-2"></div>
                  </div>
                </section>

                {/* Features Section */}
                <section id="features" className="features-section">
                  <div className="container-width">
                    <div className="section-header">
                      <h2 className="section-title">Everything You Need to Succeed</h2>
                      <p className="section-subtitle">
                        Powerful features designed to help you achieve complete financial control
                      </p>
                    </div>

                    <div className="features-grid">
                      {features.map((feature, index) => (
                        <div key={index} className="feature-item">
                          <div className="feature-icon">
                            {feature.icon}
                          </div>
                          <h3 className="feature-title">{feature.title}</h3>
                          <p className="feature-description">{feature.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Testimonials Section */}
                <section id="testimonials" className="testimonials-section">
                  <div className="container-width">
                    <div className="section-header">
                      <h2 className="section-title">What Our Users Say</h2>
                      <p className="section-subtitle">
                        Don't just take our word for it - hear from some of our satisfied users
                      </p>
                    </div>

                    <div className="testimonials-grid">
                      {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                          <div className="quote-icon">
                            <div className="quote-bubble">
                              <span>"</span>
                            </div>
                          </div>

                          <div className="stars">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <FaStar key={i} className="star-icon" />
                            ))}
                          </div>

                          <blockquote className="testimonial-text">
                            "{testimonial.text}"
                          </blockquote>

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

                    {/* Trust indicators */}
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

                {/* CTA Section */}
                <section className="cta-section">
                  <div className="container-width">
                    <div className="cta-content">
                      <h2 className="cta-title">Ready to Get Started?</h2>
                      <p className="cta-subtitle">
                        Join thousands of satisfied users and transform your financial management today.
                      </p>

                      <div className="cta-buttons">
                        <a
                          href="https://play.google.com/store/apps/details?id=com.trackaexpense"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-white btn-large"
                        >
                          <FaGooglePlay className="btn-icon" />
                          Get on Play Store
                        </a>
                        <a
                          href="https://apps.apple.com/us/app/trackaexpense/id6752925670"
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

                  {/* Background decorations */}
                  <div className="cta-background">
                    <div className="cta-decoration cta-decoration-1"></div>
                    <div className="cta-decoration cta-decoration-2"></div>
                  </div>
                </section>

                {/* Footer */}
                <footer className="footer">
                  <div className="container-width">
                    <div className="footer-grid">
                      {/* Company Info */}
                      <div className="footer-brand">
                        <h3 className="footer-logo">TrackaExpense</h3>
                        <p className="footer-tagline">
                          Your comprehensive, ad-free personal finance app
                        </p>
                        <div className="footer-social">
                          <a href="mailto:me@dhruvchheda.com" className="social-link" aria-label="Email">
                            <FaEnvelope />
                          </a>
                          <a href="https://x.com/ChhedaDhruv4" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
                            <FaTwitter />
                          </a>
                          <a href="https://linkedin.com/in/dhruv-chheda/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                            <FaLinkedin />
                          </a>
                          <a href="https://github.com/chhedadhruv" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                            <FaGithub />
                          </a>
                        </div>
                      </div>

                      {/* Product Links */}
                      <div className="footer-section">
                        <h4 className="footer-heading">Product</h4>
                        <ul className="footer-links">
                          <li><button onClick={() => scrollToSection('#features')} className="footer-link">Features</button></li>
                          <li><button onClick={() => scrollToSection('#testimonials')} className="footer-link">Testimonials</button></li>
                          <li><a href="https://trackaexpense.dhruvchheda.com" target="_blank" rel="noopener noreferrer" className="footer-link">Download</a></li>
                        </ul>
                      </div>

                      {/* Company Links */}
                      <div className="footer-section">
                        <h4 className="footer-heading">Company</h4>
                        <ul className="footer-links">
                          <li><Link to="/about" className="footer-link">About</Link></li>
                          <li><Link to="/contact" className="footer-link">Contact</Link></li>
                          <li><a href="https://github.com/chhedadhruv/TrackaExpense" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a></li>
                        </ul>
                      </div>

                      {/* Legal Links */}
                      <div className="footer-section">
                        <h4 className="footer-heading">Legal</h4>
                        <ul className="footer-links">
                          <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
                          <li><Link to="/delete-account" className="footer-link">Delete Account</Link></li>
                        </ul>
                      </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="footer-bottom">
                      <p className="footer-copyright">
                        © {new Date().getFullYear()} TrackaExpense. All rights reserved.
                      </p>
                      <div className="footer-legal-links">
                        <Link to="/privacy" className="footer-legal-link">Privacy</Link>
                        <Link to="/delete-account" className="footer-legal-link">Delete Account</Link>
                      </div>
                    </div>
                  </div>
                </footer>
              </main>
            }
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
