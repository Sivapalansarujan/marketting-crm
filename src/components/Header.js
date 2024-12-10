import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Keep this for smooth scrolling
import { useNavigate } from 'react-router-dom'; // Add this for programmatic navigation
import '../styles/Header.css';
import logo from '../assets/logo.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false); // Close menu when the close button is clicked
  };

  const handleLinkClick = (sectionId) => {
    navigate('/'); // Ensure navigation goes to the home page
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    setIsMenuOpen(false); // Close menu after link click
  };

  return (
    <header>
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo-container">
          <img
            src={logo}
            alt="Logo"
            className="logo"
            onClick={() => handleLinkClick('hero')} // Connect the logo click to Home
            style={{ cursor: 'pointer' }} // Indicate it's clickable
          />
        </div>

        {/* Hamburger Menu for small screens */}
        <div
          className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
          onClick={handleMenuToggle}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Navigation Section */}
        <nav className={isMenuOpen ? 'open' : ''}>
          {isMenuOpen && (
            <button className="close-btn" onClick={handleMenuClose}>
              &times;
            </button>
          )}
          <ul>
            {[
              { to: 'hero', label: 'Home' },
              { to: 'about', label: 'About Us' },
              { to: 'plans', label: 'Plans' },
              { to: 'blog', label: 'Blog' },
              { to: 'contact', label: 'Contact' },
            ].map((item, index) => (
              <li key={index}>
                <button onClick={() => handleLinkClick(item.to)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <button className="nav-btn">Get Started</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
