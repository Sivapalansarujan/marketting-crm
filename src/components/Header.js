// src/components/Header.js
import React from 'react';
import '../styles/Header.css';  // Corrected the path for Header CSS
import logo from '../assets/logo.png'

function Header() {
  return (
    <header>
      <div className="header-container"> {/* Missing closing bracket fixed here */}
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">Pricing</a></li>
            <li><a href="/services">About Us</a></li>
            <li><a href="/contact">How it works</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
          <button className="nav-btn">Get Started</button>
        </nav>
      </div> {/* Closing div for header-container */}
    </header>
  );
}

export default Header;
