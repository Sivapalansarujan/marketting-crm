import React from 'react';
import '../styles/Footer.css'; // Import the CSS file for styling
import logo from '../assets/logo.png'; // Replace with the actual logo path

const Footer = () => {
  return (
    <footer className="footer">
      {/* Email Subscription Section */}
      <div className="footer-subscription">
        <h3>Subscribe to our Newsletter</h3>
        <form className="subscription-form">
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="email-input"
          />
          <button type="submit" className="subscribe-button">
            Subscribe
          </button>
        </form>
      </div>

      {/* Footer Columns Section */}
      <div className="footer-columns">
        {/* Column 1: Logo and Elevator Pitch */}
        <div className="footer-column">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p className="elevator-pitch">
            Transforming education with AI-powered AR/VR solutions. Unlock new
            possibilities with interactive, adaptive learning experiences.
          </p>
        </div>

        {/* Column 2: Additional Links */}
        <div className="footer-column">
          <h4>Additional Links</h4>
          <ul className="footer-links">
            <li>About Us</li>
            <li>Contact</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>FAQ</li>
            <li>Support</li>
          </ul>
        </div>

        {/* Column 3: Additional Links */}
        <div className="footer-column">
          <h4>Additional Links</h4>
          <ul className="footer-links">
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>Case Studies</li>
            <li>Developers</li>
            <li>API Documentation</li>
          </ul>
        </div>

        {/* Column 4: Additional Links */}
        <div className="footer-column">
          <h4>Additional Links</h4>
          <ul className="footer-links">
            <li>Partners</li>
            <li>Media</li>
            <li>Events</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="footer-bottom">
        <span>© 2024 All Rights Reserved</span>
        <div className="footer-bottom-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <span>|</span>
          <a href="/terms-and-conditions">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
