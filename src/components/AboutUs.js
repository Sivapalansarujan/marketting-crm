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
          <h2 className="about-heading">With our AI-powered Marketing CRM, businesses can simplify 
            marketing automation, gain deep customer insights, and deliver 
            personalized experiences at scale.</h2>
          <p className="about-text">
          The platform is made for both new organizations and established brands and 
          thus makes it possible for everyone to be heard at the right time through 
          the right place and messages. Allow the power of customer data to help you 
          make informed decisions, improve return on investment, and scale. 
          Join thousands of businesses today using our CRM to drive further 
          engagement and loyalty.
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
