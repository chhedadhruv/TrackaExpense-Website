import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
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
    <Helmet>
      <title>TrackaExpense - Free Expense Tracker, Budget Planner &amp; Bill Splitter App</title>
      <meta name="description" content="Track expenses, plan monthly budgets, split bills with friends &amp; hit your savings goals — 100% ad-free. The all-in-one personal finance tracker for Android &amp; iOS." />
    </Helmet>
    <Hero />
    <FeaturesSection />
    <TestimonialsSection />
    <CTASection />
    <Footer onScrollTo={scrollToSection} />
  </main>
);

const AboutPage = () => (
  <>
    <Helmet>
      <title>About TrackaExpense | Built by Dhruv Chheda</title>
      <meta name="description" content="TrackaExpense is built by Dhruv Chheda — a free, ad-free expense tracker and budget planner for Android &amp; iOS. Learn about the app and its creator." />
    </Helmet>
    <AboutUs />
  </>
);

const ContactPage = () => (
  <>
    <Helmet>
      <title>Contact TrackaExpense Support | Expense Tracker Help</title>
      <meta name="description" content="Get help with the TrackaExpense expense tracker app. Reach our team for support, feedback, or questions." />
    </Helmet>
    <Contact />
  </>
);

const PrivacyPage = () => (
  <>
    <Helmet>
      <title>Privacy Policy | TrackaExpense Expense Tracker</title>
      <meta name="description" content="TrackaExpense never sells your data. Read our privacy policy for the ad-free expense tracker and budget planner app." />
    </Helmet>
    <PrivacyPolicy />
  </>
);

const DeleteAccountPage = () => (
  <>
    <Helmet>
      <title>Delete Account | TrackaExpense</title>
      <meta name="description" content="Instructions to permanently delete your TrackaExpense account and all associated expense data." />
    </Helmet>
    <DeleteAccount />
  </>
);

const App = () => (
  <HelmetProvider>
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/delete-account" element={<DeleteAccountPage />} />
        </Routes>
      </div>
    </Router>
  </HelmetProvider>
);

export default App;
