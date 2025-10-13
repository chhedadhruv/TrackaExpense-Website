import React from 'react';
import { 
  FaMobileAlt, 
  FaChartBar, 
  FaShieldAlt,
  FaClock,
  FaHeart,
  FaRocket,
  FaUsers,
  FaLightbulb,
  FaGithub,
  FaLinkedin,
  FaArrowRight
} from 'react-icons/fa';
import './AboutUs.css';

const AboutUs = () => {
  const features = [
    {
      icon: <FaMobileAlt />,
      title: "React Native App",
      description: "Built with React Native for a smooth, native mobile experience on both iOS and Android platforms."
    },
    {
      icon: <FaChartBar />,
      title: "Visual Statistics",
      description: "View graphs and charts of your expenses and income to analyze financial patterns effectively."
    },
    {
      icon: <FaShieldAlt />,
      title: "Firebase Backend",
      description: "Secure cloud storage with Firebase ensures your data is safe and accessible anywhere."
    },
    {
      icon: <FaClock />,
      title: "Real-time Updates",
      description: "Home screen displays recent transactions for quick access to your financial activity."
    }
  ];

  const values = [
    {
      icon: <FaHeart />,
      title: "User-Friendly",
      description: "Simple input forms and intuitive interface make financial tracking effortless for everyone."
    },
    {
      icon: <FaRocket />,
      title: "Modern Tech Stack",
      description: "Built with React Native, Firebase, and modern libraries for optimal performance."
    },
    {
      icon: <FaUsers />,
      title: "Open Source",
      description: "Available on GitHub for transparency and community contributions."
    },
    {
      icon: <FaLightbulb />,
      title: "No Hidden Costs",
      description: "100% free to use with no ads, subscriptions, or hidden fees."
    }
  ];

  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container-width">
          <div className="page-hero-content">
            <h1 className="page-hero-title">About TrackaExpense</h1>
            <p className="page-hero-subtitle">
              A comprehensive, ad-free personal finance app built with React Native and Firebase 
              to help you take control of your financial life.
            </p>
          </div>
        </div>
        <div className="page-hero-bg">
          <div className="page-bg-circle page-bg-circle-1"></div>
          <div className="page-bg-circle page-bg-circle-2"></div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission-section">
        <div className="container-width">
          <div className="section-header">
            <h2 className="section-title">Our Mission</h2>
            <p className="section-subtitle">
              To provide an intuitive, easy-to-use personal finance app that helps you manage expenses, 
              track income, set savings goals, and split bills—all without ads or distractions.
            </p>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Ad-Free</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">Free</div>
              <div className="stat-label">To Download</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">All</div>
              <div className="stat-label">Platforms</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="about-features-section">
        <div className="container-width">
          <div className="section-header">
            <h2 className="section-title">Key Features</h2>
            <p className="section-subtitle">
              Everything you need to manage your finances in one comprehensive app
            </p>
          </div>

          <div className="about-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="about-feature-card">
                <div className="about-feature-icon">
                  {feature.icon}
                </div>
                <h3 className="about-feature-title">{feature.title}</h3>
                <p className="about-feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values-section">
        <div className="container-width">
          <div className="section-header">
            <h2 className="section-title">What Makes Us Different</h2>
            <p className="section-subtitle">
              The principles that make TrackaExpense the best choice for your financial needs
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((value, index) => (
              <div key={index} className="about-value-card">
                <div className="about-value-icon">
                  {value.icon}
                </div>
                <h3 className="about-value-title">{value.title}</h3>
                <p className="about-value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team-section">
        <div className="container-width">
          <div className="section-header">
            <h2 className="section-title">Meet the Creator</h2>
            <p className="section-subtitle">
              Passionate about making financial management accessible to everyone
            </p>
          </div>

          <div className="team-card-wrapper">
            <div className="team-card">
              <div className="team-image">
                <img src="https://www.dhruvchheda.com/dhruv-chheda.webp" alt="Dhruv Chheda" />
              </div>
              <div className="team-info">
                <h3 className="team-name">Dhruv Chheda</h3>
                <p className="team-role">Founder & Lead Developer</p>
                <p className="team-bio">
                  Passionate developer with a vision to revolutionize personal finance management
                  through technology. Building TrackaExpense to make financial tracking simple and
                  accessible for everyone.
                </p>
                <div className="team-social">
                  <a href="https://github.com/chhedadhruv" target="_blank" rel="noopener noreferrer" className="team-social-link">
                    <FaGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/dhruv-chheda/" target="_blank" rel="noopener noreferrer" className="team-social-link">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-cta-section">
        <div className="container-width">
          <div className="page-cta-content">
            <h2 className="page-cta-title">Start Managing Your Money Better Today</h2>
            <p className="page-cta-subtitle">
              Download TrackaExpense and experience the easiest way to track expenses, 
              manage income, and achieve your financial goals.
            </p>
            <a href="https://trackaexpense.dhruvchheda.com" target="_blank" rel="noopener noreferrer" className="btn-white btn-large">
              Download Now
              <FaArrowRight className="btn-arrow" />
            </a>
          </div>
        </div>
        <div className="page-cta-bg">
          <div className="page-cta-decoration page-cta-decoration-1"></div>
          <div className="page-cta-decoration page-cta-decoration-2"></div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
