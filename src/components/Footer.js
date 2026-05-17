import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = ({ onScrollTo }) => (
  <footer className="footer">
    <div className="container-width">
      <div className="footer-grid">
        <div className="footer-brand">
          <h3 className="footer-logo">TrackaExpense</h3>
          <p className="footer-tagline">Your comprehensive, ad-free personal finance app</p>
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

        <div className="footer-section">
          <h4 className="footer-heading">Product</h4>
          <ul className="footer-links">
            <li><button onClick={() => onScrollTo('#features')} className="footer-link">Features</button></li>
            <li><button onClick={() => onScrollTo('#testimonials')} className="footer-link">Testimonials</button></li>
            <li>
              <a href="https://play.google.com/store/apps/details?id=com.trackaexpense" target="_blank" rel="noopener noreferrer" className="footer-link">
                Download
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Company</h4>
          <ul className="footer-links">
            <li><Link to="/about" className="footer-link">About</Link></li>
            <li><Link to="/contact" className="footer-link">Contact</Link></li>
            <li>
              <a href="https://github.com/chhedadhruv/TrackaExpense" target="_blank" rel="noopener noreferrer" className="footer-link">
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Legal</h4>
          <ul className="footer-links">
            <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
            <li><Link to="/delete-account" className="footer-link">Delete Account</Link></li>
          </ul>
        </div>
      </div>

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
);

export default Footer;
