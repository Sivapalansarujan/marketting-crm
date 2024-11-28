// src/components/Header.js
import React from 'react';
import '../styles/Header.css';  // Corrected the path for Header CSS
import logo from '../assets/logo.png'

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <nav>
          <ul>
            <li><a href="#hero">Home</a></li> {/* Link to Hero section */}
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
