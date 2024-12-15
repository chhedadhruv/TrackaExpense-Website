import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMoneyBillWave, FaDownload, FaUser, FaBug } from "react-icons/fa";
import "./App.css";

const carouselData = [
  {
    title: "Home Screen",
    description: "The Home Screen displays your Total Expenses, Total Income, and a list of Recent Transactions for easy tracking.",
  },
  {
    title: "Statistics",
    description: "View graphs of your expenses and income for any selected period to analyze your financial patterns.",
  },
  {
    title: "Transactions",
    description: "Easily add new expenses or income with a simple, user-friendly input form.",
  },
  {
    title: "Savings",
    description: "Add savings goals and track progress with a progress bar to help you achieve your financial targets.",
  },
  {
    title: "Split Bills",
    description: "Split bills between friends equally or by percentage to simplify group expenses.",
  },
  {
    title: "Profile",
    description: "Manage your profile, provide feedback, view the privacy policy, and log out securely.",
  },
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  };

  const downloadApp = () => {
    window.open("/TrackaExpense.apk", "_blank");
  };

  return (
    <div className="landing-page">
      <header className="hero-section" data-aos="fade-down">
        <div className="hero-content">
          <h1>TrackaExpense</h1>
          <p>Your Comprehensive Financial Companion</p>
          <button onClick={downloadApp} className="download-btn">
            <FaDownload className="btn-icon" /> Download APK
          </button>
          <p className="highlight">
            🚫 No Ads | 🚫 No Notifications | 📣 Feedback-Friendly
          </p>
        </div>
      </header>

      <section className="carousel-section" data-aos="fade-up">
        <h2>Explore the App Screens</h2>
        <div className="carousel">
          <button className="carousel-btn" onClick={prevSlide}>&#8592;</button>
          <div className="carousel-content">
            <h3>{carouselData[currentIndex].title}</h3>
            <p>{carouselData[currentIndex].description}</p>
          </div>
          <button className="carousel-btn" onClick={nextSlide}>&#8594;</button>
        </div>
      </section>

      <section className="features-section" data-aos="fade-up">
        <h2>Why Choose TrackaExpense?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <FaBug className="feature-icon" />
            <h3>Feedback & Bug Fixes</h3>
            <p>Provide feedback from the Profile Page to help improve the app and resolve any issues.</p>
          </div>
          <div className="feature-card">
            <FaMoneyBillWave className="feature-icon" />
            <h3>Expense Management</h3>
            <p>Track income, expenses, and savings effortlessly with intuitive UI.</p>
          </div>
          <div className="feature-card">
            <FaUser className="feature-icon" />
            <h3>Privacy Focused</h3>
            <p>No ads, no push notifications — just clean, focused financial management.</p>
          </div>
        </div>
      </section>

      <section className="cta-section" data-aos="zoom-in">
        <div className="cta-content">
          <h2>Take Control of Your Finances!</h2>
          <p>Download TrackaExpense today and transform the way you manage money.</p>
          <button onClick={downloadApp} className="download-btn">
            <FaDownload className="btn-icon" /> Download Now
          </button>
        </div>
      </section>

      <footer className="landing-footer">
        <p>&copy; 2024 TrackaExpense. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
