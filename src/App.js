import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import DeleteAccount from './components/DeleteAccount';

const scrollToSection = (href) => {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
};

const HomePage = () => (
  <main className="main-content">
    <Hero />
    <FeaturesSection />
    <TestimonialsSection />
    <CTASection />
    <Footer onScrollTo={scrollToSection} />
  </main>
);

const App = () => (
  <Router>
    <div className="app-wrapper">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/delete-account" element={<DeleteAccount />} />
      </Routes>
    </div>
  </Router>
);

export default App;
