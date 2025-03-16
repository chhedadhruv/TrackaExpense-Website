import React from 'react';
import { 
  FaHeart, 
  FaShieldAlt, 
  FaLightbulb,
  FaRocket,
  FaUsers,
  FaMobileAlt,
  FaChartBar,
  FaClock,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';
import './AboutUs.css';

const AboutUs = () => {
  const features = [
    {
      icon: <FaMobileAlt />,
      title: "Mobile First Design",
      description: "Built for seamless mobile experience with intuitive controls and responsive design."
    },
    {
      icon: <FaChartBar />,
      title: "Smart Analytics",
      description: "Powerful insights into your spending patterns with visual analytics and reports."
    },
    {
      icon: <FaShieldAlt />,
      title: "Privacy Focused",
      description: "Your financial data is encrypted and never shared with third parties."
    },
    {
      icon: <FaClock />,
      title: "Real-time Tracking",
      description: "Monitor your expenses and income in real-time with instant updates."
    }
  ];

  const values = [
    {
      icon: <FaHeart />,
      title: "User-Centric",
      description: "Every feature is designed with our users in mind, focusing on simplicity and efficiency."
    },
    {
      icon: <FaRocket />,
      title: "Innovation",
      description: "Continuously evolving our platform with cutting-edge technology and features."
    },
    {
      icon: <FaUsers />,
      title: "Community",
      description: "Building a community of financially conscious individuals."
    },
    {
      icon: <FaLightbulb />,
      title: "Transparency",
      description: "Open and honest about our processes and development."
    }
  ];

  return (
    <div className="about-container">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>Transforming Personal Finance</h1>
          <p>Making financial management accessible, intuitive, and empowering for everyone.</p>
        </div>
        <div className="hero-background">
          <div className="hero-shape shape-1"></div>
          <div className="hero-shape shape-2"></div>
          <div className="hero-shape shape-3"></div>
        </div>
      </section>

      <section className="about-mission">
        <div className="section-header">
          <h2>Our Mission</h2>
          <p className="section-subtitle">
            We're on a mission to revolutionize how people manage their personal finances,
            making it simple, intuitive, and accessible for everyone.
          </p>
        </div>
        <div className="mission-stats">
          <div className="stat-card">
            <span className="stat-number">100%</span>
            <span className="stat-label">Ad-Free Experience</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Available</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">Free</span>
            <span className="stat-label">To Use</span>
          </div>
        </div>
      </section>

      <section className="about-features">
        <div className="section-header">
          <h2>Why Choose TrackaExpense</h2>
          <p className="section-subtitle">
            Powerful features designed to make financial management effortless
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-values">
        <div className="section-header">
          <h2>Our Core Values</h2>
          <p className="section-subtitle">
            The principles that guide us in building the best financial management tool
          </p>
        </div>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-team">
        <div className="section-header">
          <h2>Meet the Creator</h2>
          <p className="section-subtitle">
            Passionate about making financial management accessible to everyone
          </p>
        </div>
        <div className="team-content">
          <div className="team-card" data-aos="fade-up">
            <div className="team-image">
              <img src="https://www.dhruvchheda.com/dhruv-chheda.webp" alt="Dhruv Chheda" />
            </div>
            <div className="team-info">
              <h3>Dhruv Chheda</h3>
              <p className="team-role">Founder & Lead Developer</p>
              <p className="team-bio">
                Passionate developer with a vision to revolutionize personal finance management
                through technology. Building TrackaExpense to make financial tracking simple and
                accessible for everyone.
              </p>
              <div className="team-social">
                <a href="https://github.com/chhedadhruv" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/dhruv-chheda/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="cta-content">
          <h2>Ready to Take Control of Your Finances?</h2>
          <p>Join us in revolutionizing personal finance management.</p>
          <button className="cta-button">Download Now</button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs; 