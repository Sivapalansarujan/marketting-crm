// src/components/AboutUs.js
import React from 'react';
import '../styles/AboutUs.css'; // Import the CSS file for the About Us section
import aboutUsImage from '../assets/aboutus.png'; // Import your image
import aboutUsBgImage from '../assets/aboutus_bg.png'; // Import your background image

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <div className="about-us-container">
        {/* Left Column */}
        <div className="about-left-column">
          <h3 className="about-subheading">About Us</h3>
          <h2 className="about-heading">Empowering Businesses with Smart Solutions</h2>
          <p className="about-text">
          Founded with a mission to empower businesses, our company has been delivering innovative CRM solutions that blend simplicity with powerful customization. 
          We believe in making customer management easy and efficient for teams of all sizes.Our CRM stands out for its intuitive interface, adaptable features, 
          and seamless integrations that cater to your unique workflow needs.
          </p>
          <button className="about-btn">Read More</button>
        </div>

        {/* Right Column */}
        <div className="about-right-column">
          <img 
            src={aboutUsImage} 
            alt="About Us" 
            className="about-image" 
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
