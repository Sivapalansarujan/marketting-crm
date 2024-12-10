import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Footer.css';
import logo from '../assets/logo.png';

const Footer = () => {
  const navigate = useNavigate();

  // Function for smooth scrolling after navigation
  const handleLinkClick = (sectionId) => {
    navigate('/'); // Ensure navigation to the home page
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

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
            <li>
              <button onClick={() => handleLinkClick('about')} className="footer-link-button">
                About Us
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('contact')} className="footer-link-button">
                Contact
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('plans')} className="footer-link-button">
                Plans
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('signup')} className="footer-link-button">
                Sign Up
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Follow Us */}
        <div className="footer-column">
          <h4>Follow Us</h4>
          <ul className="footer-links">
            <li>
              <a href="https://web.facebook.com/Kolinasolutions/" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/kolina-solutions-pvt-ltd/about/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://x.com/kolinasolutions" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@KolinaSolutions" target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
            </li>
            <li>
              <a href="https://www.crunchbase.com/organization/kolina-solutions" target="_blank" rel="noopener noreferrer">
              Crunchbase
              </a>
              </li>
            <li>
            <a href="https://www.f6s.com/kolina-solutions" target="_blank" rel="noopener noreferrer">
              F6s
              </a>
              </li>
          </ul>
        </div>

        {/* Column 4: Address Details */}
        <div className="footer-column">
          <h4>Contact Us</h4>
          <ul className="footer-links">
            <li>
              <strong>Sri Lanka:</strong><br />
              30A Bodhiraja Mawatha,<br />
              Kurunegala 60000
            </li>
            <li>
              <strong>Email:</strong><br />
              <a href="mailto:support@kolinasolutions.com" style={{ color: '#EF3237' }}>
                support@kolinasolutions.com
              </a>
            </li>
            <li>
              <strong>Mobile:</strong><br />
              (+94) (011) 2576397
            </li>
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
