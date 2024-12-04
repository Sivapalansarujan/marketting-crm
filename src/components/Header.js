// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import '../styles/Header.css'; // Corrected the path for Header CSS
import logo from '../assets/logo.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
  };

  return (
    <header>
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        {/* Hamburger Menu for small screens */}
        <div
          className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`} // Add 'active' class when menu is open
          onClick={handleMenuToggle}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Navigation Section */}
        <nav className={isMenuOpen ? 'open' : ''}>
          <ul>
            <li><Link to="hero" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="plans" smooth={true} duration={500}>Pricing</Link></li>
            <li><Link to="about" smooth={true} duration={500}>About Us</Link></li>
            <li><Link to="howitworks" smooth={true} duration={500}>How it works</Link></li>
            <li><Link to="contact" smooth={true} duration={500}>Contact Us</Link></li>
          </ul>
          <button className="nav-btn">Get Started</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
