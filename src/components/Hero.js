import React from 'react';
import {
  FaCheckCircle,
  FaRocket,
  FaLock,
  FaMobileAlt,
  FaGooglePlay,
  FaApple,
  FaShoppingCart,
  FaMoneyBillWave,
} from 'react-icons/fa';
import { STORE_LINKS } from '../constants/data';

const PhoneMockup = () => (
  <div className="phone-mockup">
    <div className="phone-frame">
      <div className="phone-notch" />
      <div className="phone-screen">
        <div className="system-status-bar">
          <span className="status-time">9:41</span>
          <div className="status-icons">
            <span className="status-signal">●●●●</span>
            <span className="status-battery">100%</span>
          </div>
        </div>

        <div className="app-status-bar">
          <h3 className="app-bar-title">TrackaExpense</h3>
        </div>

        <div className="app-header-section">
          <h3 className="app-greeting">Hello, User!</h3>
          <p className="app-subgreeting">Track your expenses today</p>
        </div>

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

        <div className="transactions-wrapper">
          <div className="transactions-header-row">
            <div>
              <h4 className="transactions-title">Recent Transactions</h4>
              <p className="transactions-subtitle">Live updates</p>
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
);

const Hero = () => (
  <section className="hero-section">
    <div className="container-width">
      <div className="hero-grid">
        <div className="hero-content">
          <h1 className="hero-title">
            Transform Your Financial Management with TrackaExpense
          </h1>
          <p className="hero-subtitle">
            A comprehensive, ad-free personal finance app for managing expenses,
            tracking income, and achieving your financial goals. Join thousands who've
            taken control of their finances.
          </p>

          <div className="hero-badges">
            <span className="badge"><FaCheckCircle className="badge-icon" /> 100% Ad-Free</span>
            <span className="badge"><FaRocket className="badge-icon" /> Easy to Use</span>
            <span className="badge"><FaLock className="badge-icon" /> Secure & Private</span>
            <span className="badge"><FaMobileAlt className="badge-icon" /> Mobile Ready</span>
          </div>

          <div className="hero-cta">
            <a
              href={STORE_LINKS.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary btn-large"
            >
              <FaGooglePlay className="btn-icon" />
              Get on Play Store
            </a>
            <a
              href={STORE_LINKS.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary btn-large"
            >
              <FaApple className="btn-icon" />
              Get on App Store
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <PhoneMockup />
          <div className="hero-decoration decoration-1" />
          <div className="hero-decoration decoration-2" />
        </div>
      </div>
    </div>

    <div className="hero-background">
      <div className="bg-circle bg-circle-1" />
      <div className="bg-circle bg-circle-2" />
    </div>
  </section>
);

export default Hero;
