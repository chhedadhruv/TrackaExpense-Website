import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  FaMoneyBillWave, 
  FaDownload, 
  FaUser, 
  FaBug, 
  FaChevronLeft, 
  FaChevronRight,
  FaChartBar,
  FaChartLine,
  FaCreditCard,
  FaPiggyBank,
  FaHandshake,
  FaUserCog,
  FaShieldAlt,
  FaUsers
} from "react-icons/fa";
import "./App.css";

const carouselData = [
  {
    title: "Your Financial Dashboard",
    description: "Stay on top of your finances with a clean, intuitive home screen showing your expenses, income, and recent transactions – all at a glance.",
    icon: <FaChartBar size={48} />
  },
  {
    title: "Visual Financial Insights",
    description: "Make informed decisions with clear, interactive graphs that show your spending and earning patterns over time.",
    icon: <FaChartLine size={48} />
  },
  {
    title: "Effortless Transaction Management",
    description: "Add and track your expenses and income with our streamlined input system – quick, simple, and hassle-free.",
    icon: <FaCreditCard size={48} />
  },
  {
    title: "Goal-Driven Savings",
    description: "Set, track, and achieve your savings goals with visual progress tracking and milestone celebrations.",
    icon: <FaPiggyBank size={48} />
  },
  {
    title: "Simplified Bill Splitting",
    description: "Share expenses fairly with friends using flexible splitting options – making group finances stress-free.",
    icon: <FaHandshake size={48} />
  },
  {
    title: "Personalized Experience",
    description: "Customize your profile, share your feedback, and enjoy a secure, private financial management experience.",
    icon: <FaUserCog size={48} />
  }
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  };

  const downloadApp = () => {
    window.open(process.env.PUBLIC_URL + "/TrackaExpense.apk", "_blank");
  };

  return (
    <div className="app-container">
      <section className="hero">
        <div className="hero-content" data-aos="fade-up">
          <h1>TrackaExpense</h1>
          <p className="hero-subtitle">Your Path to Effortless Financial Management</p>
          <button onClick={downloadApp} className="download-btn primary">
            <FaDownload className="btn-icon" /> Start Your Journey
          </button>
          <div className="features-list">
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaMoneyBillWave color="#fff" className="feature-icon" />
              <span>Clean & Simple</span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaShieldAlt color="#fff" className="feature-icon" />
              <span>Ad-Free Experience</span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaUsers color="#fff" className="feature-icon" />
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
          <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
            <div className="feature-icon">
              <FaBug />
            </div>
            <h3>Community-Driven Improvements</h3>
            <p>Share your thoughts and help shape the future of TrackaExpense. Your feedback directly influences our updates and improvements.</p>
          </div>
          <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
            <div className="feature-icon">
              <FaMoneyBillWave />
            </div>
            <h3>Smart Money Management</h3>
            <p>Take control of your finances with intuitive expense tracking, income monitoring, and savings management tools.</p>
          </div>
          <div className="feature-card" data-aos="fade-up" data-aos-delay="300">
            <div className="feature-icon">
              <FaUser />
            </div>
            <h3>Distraction-Free Focus</h3>
            <p>Enjoy a clean, ad-free environment with no interruptions. Your financial journey, your way – without any unnecessary notifications.</p>
          </div>
        </div>
      </section>

      <section className="carousel" data-aos="fade-up">
        <h2>Discover Your Financial Tools</h2>
        <div className="carousel-container">
          <button className="carousel-btn prev" onClick={prevSlide}>
            <FaChevronLeft />
          </button>
          <div className="carousel-content">
            <div className="screen-icon">{carouselData[currentIndex].icon}</div>
            <h3>{carouselData[currentIndex].title}</h3>
            <p>{carouselData[currentIndex].description}</p>
          </div>
          <button className="carousel-btn next" onClick={nextSlide}>
            <FaChevronRight />
          </button>
        </div>
        <div className="carousel-indicators">
          {carouselData.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </section>

      <section className="cta" data-aos="fade-up">
        <div className="cta-content">
          <h2>Ready to Transform Your Financial Management?</h2>
          <p>Join us and experience a simpler way to handle your money. No ads, no distractions – just pure financial focus.</p>
          <button onClick={downloadApp} className="download-btn secondary">
            <FaDownload className="btn-icon" /> Download Now
          </button>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 TrackaExpense | Simplifying Your Financial Journey</p>
      </footer>

      {showScrollTop && (
        <button className="scroll-top" onClick={scrollToTop}>
          <FaChevronLeft className="rotate-90" />
        </button>
      )}
    </div>
  );
};

export default App;
