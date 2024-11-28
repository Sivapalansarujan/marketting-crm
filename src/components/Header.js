// src/components/Header.js
import React, { useState } from 'react';
import '../styles/Header.css';  // Corrected the path for Header CSS
import logo from '../assets/logo.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);  // Toggle the menu visibility
  };

  return (
    <header>
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        {/* Hamburger Menu for small screens */}
        <div className="hamburger-menu" onClick={handleMenuToggle}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Navigation Section */}
        <nav className={isMenuOpen ? 'open' : ''}>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#plans">Pricing</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#howitworks">How it works</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
          <button className="nav-btn">Get Started</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
