import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaMoneyBillWave,
  FaDownload,
  FaChevronLeft,
  FaChevronRight,
  FaChartBar,
  FaPiggyBank,
  FaHandshake,
  FaShieldAlt,
  FaUsers,
  FaArrowUp,
  FaCheck,
  FaStar,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaBars,
  FaTimes,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";
import "./App.css";
import "./StoreButtons.css";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import PrivacyPolicy from "./components/PrivacyPolicy";
import DeleteAccount from "./components/DeleteAccount";

const carouselData = [
  {
    title: "Income & Expense Tracking",
    description:
      "Easily track every rupee coming in and going out. Categorize your transactions and maintain a clear financial record.",
    icon: <FaMoneyBillWave size={48} className="feature-gradient-icon" />,
  },
  {
    title: "Financial Statistics",
    description:
      "Get detailed insights with visual statistics and reports. Understand your spending patterns and income trends over time.",
    icon: <FaChartBar size={48} className="feature-gradient-icon" />,
  },
  {
    title: "Smart Savings Management",
    description:
      "Set savings goals, track your progress to help you save more effectively.",
    icon: <FaPiggyBank size={48} className="feature-gradient-icon" />,
  },
  {
    title: "Bill Splitting Made Easy",
    description:
      "Split expenses with friends hassle-free. Keep track of shared expenses and settle up with ease.",
    icon: <FaHandshake size={48} className="feature-gradient-icon" />,
  },
];

const testimonials = [
  {
    name: "Arya Madan",
    content:
      "Perfect for tracking business expenses, income streams, and maintaining clear financial records for tax purposes.",
    rating: 5,
  },
  {
    name: "Zia Dongri",
    content:
      "Ideal for managing student budgets, tracking shared apartment expenses, and splitting costs with roommates.",
    rating: 5,
  },
  {
    name: "Sanaj Jadhav",
    content:
      "Clean, intuitive, and exactly what I needed. The savings goals feature keeps me motivated.",
    rating: 5,
  },
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("menu-open");
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove("menu-open");
  };

  useEffect(() => {
    closeMenu();
  }, [window.location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        !event.target.closest(".nav-links") &&
        !event.target.closest(".menu-toggle")
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + carouselData.length) % carouselData.length
    );
  };

  const downloadApp = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch(
        process.env.PUBLIC_URL + "/TrackaExpense.apk"
      );
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "TrackaExpense.apk";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Download failed:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Router>
      <div className="app-container">
        <nav className="main-nav">
          <div className="nav-content">
            <Link to="/" className="nav-logo" onClick={closeMenu}>
              TrackaExpense
            </Link>
            <button
              className="menu-toggle"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
            <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
              <Link to="/" className="nav-link" onClick={closeMenu}>
                Home
              </Link>
              <Link to="/about" className="nav-link" onClick={closeMenu}>
                About Us
              </Link>
              <Link to="/contact" className="nav-link" onClick={closeMenu}>
                Contact
              </Link>
              <Link to="/privacy" className="nav-link" onClick={closeMenu}>
                Privacy
              </Link>
            </div>
          </div>
        </nav>

        {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}

        <Routes>
          <Route
            path="/"
            element={
              <>
                <section className="hero">
                  <div className="hero-content" data-aos="fade-up">
                    <h1>TrackaExpense</h1>
                    <p className="hero-subtitle">
                      Your Path to Effortless Financial Management
                    </p>
                    <div className="download-buttons-hero">
                      <button className="store-download-btn coming-soon" disabled>
                        <FaGooglePlay size={24} />
                        <div className="download-btn-text">
                          <span className="download-btn-title">Get it on</span>
                          <span className="download-btn-store">Google Play</span>
                          <span className="coming-soon-badge">Coming Soon</span>
                        </div>
                      </button>
                      <button className="store-download-btn coming-soon" disabled>
                        <FaApple size={24} />
                        <div className="download-btn-text">
                          <span className="download-btn-title">Download on the</span>
                          <span className="download-btn-store">App Store</span>
                          <span className="coming-soon-badge">Coming Soon</span>
                        </div>
                      </button>
                    </div>
                    <div className="temporary-download">
                      <p className="temp-download-text">For now, try our Android APK:</p>
                      <button
                        onClick={downloadApp}
                        className={`download-btn secondary ${
                          isDownloading ? "loading" : ""
                        }`}
                        disabled={isDownloading}
                      >
                        {isDownloading ? (
                          <>
                            <div className="loading-spinner" />
                            Downloading...
                          </>
                        ) : (
                          <>
                            <FaDownload className="btn-icon" /> Download APK
                          </>
                        )}
                      </button>
                    </div>
                    <div className="features-list">
                      <div>
                        <FaMoneyBillWave
                          style={{
                            fontSize: "1.25rem",
                            color: "white",
                            margin: 0,
                          }}
                        />
                        <span>Clean & Simple</span>
                      </div>
                      <div>
                        <FaShieldAlt
                          style={{
                            fontSize: "1.25rem",
                            color: "white",
                            margin: 0,
                          }}
                        />
                        <span>Ad-Free Experience</span>
                      </div>
                      <div>
                        <FaUsers
                          style={{
                            fontSize: "1.25rem",
                            color: "white",
                            margin: 0,
                          }}
                        />
                        <span>Community-Driven</span>
                      </div>
                    </div>
                  </div>
                  <div className="hero-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                  </div>
                </section>

                <section className="features" data-aos="fade-up">
                  <h2>Experience Stress-Free Finance Management</h2>
                  <div className="features-grid">
                    <div
                      className="feature-card"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <div className="feature-icon">
                        <FaMoneyBillWave />
                      </div>
                      <h3>Income & Expense Tracking</h3>
                      <p>
                        Keep track of your finances with our comprehensive
                        tracking system. Never miss a transaction again.
                      </p>
                      <ul className="feature-list">
                        <li>
                          <FaCheck /> Multiple Categories
                        </li>
                        <li>
                          <FaCheck /> Transaction History
                        </li>
                        <li>
                          <FaCheck /> Custom Categories
                        </li>
                      </ul>
                    </div>
                    <div
                      className="feature-card"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <div className="feature-icon">
                        <FaPiggyBank />
                      </div>
                      <h3>Savings Management</h3>
                      <p>
                        Set and achieve your savings goals with our smart
                        savings management tools.
                      </p>
                      <ul className="feature-list">
                        <li>
                          <FaCheck /> Savings Goals
                        </li>
                        <li>
                          <FaCheck /> Progress Tracking
                        </li>
                        <li>
                          <FaCheck /> Collaborative Savings
                        </li>
                      </ul>
                    </div>
                    <div
                      className="feature-card"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      <div className="feature-icon">
                        <FaHandshake />
                      </div>
                      <h3>Bill Splitting</h3>
                      <p>
                        Split bills with friends effortlessly. Keep track of
                        shared expenses and settle up without any hassle.
                      </p>
                      <ul className="feature-list">
                        <li>
                          <FaCheck /> Group Expenses
                        </li>
                        <li>
                          <FaCheck /> Easy Settlement
                        </li>
                        <li>
                          <FaCheck /> Split History
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="carousel" data-aos="fade-up">
                  <h2>Discover Your Financial Tools</h2>
                  <div className="carousel-container">
                    <button
                      className="carousel-btn prev"
                      onClick={prevSlide}
                      aria-label="Previous slide"
                    >
                      <FaChevronLeft />
                    </button>
                    <div className="carousel-content">
                      {carouselData[currentIndex].icon}
                      <h3>{carouselData[currentIndex].title}</h3>
                      <p>{carouselData[currentIndex].description}</p>
                    </div>
                    <button
                      className="carousel-btn next"
                      onClick={nextSlide}
                      aria-label="Next slide"
                    >
                      <FaChevronRight />
                    </button>
                  </div>
                  <div className="carousel-indicators">
                    {carouselData.map((_, index) => (
                      <button
                        key={index}
                        className={`indicator ${
                          index === currentIndex ? "active" : ""
                        }`}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </section>

                <section className="testimonials" data-aos="fade-up">
                  <h2>What Our Users Say</h2>
                  <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                      <div
                        key={index}
                        className="testimonial-card"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                      >
                        <div className="testimonial-rating">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <FaStar key={i} className="star-icon" />
                          ))}
                        </div>
                        <p className="testimonial-content">
                          {testimonial.content}
                        </p>
                        <div className="testimonial-author">
                          <strong>{testimonial.name}</strong>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="cta" data-aos="fade-up">
                  <div className="cta-content">
                    <h2>Ready to Transform Your Financial Management?</h2>
                    <p>
                      Join us and experience a simpler way to handle your money.
                      No ads, no distractions – just pure financial focus.
                    </p>
                    <div className="download-buttons-cta">
                      <button className="store-download-btn coming-soon" disabled>
                        <FaGooglePlay size={24} />
                        <div className="download-btn-text">
                          <span className="download-btn-title">Get it on</span>
                          <span className="download-btn-store">Google Play</span>
                          <span className="coming-soon-badge">Coming Soon</span>
                        </div>
                      </button>
                      <button className="store-download-btn coming-soon" disabled>
                        <FaApple size={24} />
                        <div className="download-btn-text">
                          <span className="download-btn-title">Download on the</span>
                          <span className="download-btn-store">App Store</span>
                          <span className="coming-soon-badge">Coming Soon</span>
                        </div>
                      </button>
                    </div>
                    <div className="temporary-download-cta">
                      <button
                        onClick={downloadApp}
                        className={`download-btn primary ${
                          isDownloading ? "loading" : ""
                        }`}
                        disabled={isDownloading}
                      >
                        {isDownloading ? (
                          <>
                            <div className="loading-spinner" />
                            Downloading...
                          </>
                        ) : (
                          <>
                            <FaDownload className="btn-icon" /> Try APK Version
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </section>
              </>
            }
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
        </Routes>

        <footer className="footer">
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p style={{ textAlign: 'center', width: '100%' }}>
                © {new Date().getFullYear()} TrackaExpense | Coming Soon to Play Store
              </p>
              <p style={{ textAlign: 'center', width: '100%', marginTop: '0.5rem', fontSize: '0.9rem' }}>
                <Link to="/privacy" style={{ color: '#6366f1', textDecoration: 'none' }}>
                  Privacy Policy
                </Link>
                {' | '}
                <Link to="/contact" style={{ color: '#6366f1', textDecoration: 'none' }}>
                  Contact Us
                </Link>
                {' | '}
                <Link to="/delete-account" style={{ color: '#6366f1', textDecoration: 'none' }}>
                  Delete Account
                </Link>
              </p>
            </div>
          </div>
        </footer>

        {showScrollTop && (
          <button
            className="scroll-top"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </button>
        )}
      </div>
    </Router>
  );
};

export default App;
