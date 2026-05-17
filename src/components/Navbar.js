import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NAV_LINKS } from '../constants/data';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    if (href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderNavItem = (item, className) => {
    if (item.href.startsWith('#')) {
      return (
        <button key={item.name} onClick={() => handleNavClick(item.href)} className={className}>
          {item.name}
        </button>
      );
    }
    return (
      <Link key={item.name} to={item.href} className={className} onClick={() => setIsMenuOpen(false)}>
        {item.name}
      </Link>
    );
  };

  return (
    <nav className="navbar">
      <div className="container-width">
        <div className="nav-content">
          <div className="nav-logo">
            <Link to="/" className="logo-link">TrackaExpense</Link>
          </div>

          <div className="nav-links-desktop">
            {NAV_LINKS.map((item) => renderNavItem(item, 'nav-link'))}
          </div>

          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            {NAV_LINKS.map((item) => renderNavItem(item, 'mobile-nav-link'))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
