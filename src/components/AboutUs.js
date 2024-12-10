// src/components/AboutUs.js
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/AboutUs.css';
import aboutUsImage from '../assets/aboutus.png';
import aboutUsBgImage from '../assets/aboutus_bg.png';

const AboutUs = () => {
  return (
    <section className="about-us-section" id="about">
      <div className="about-us-container">
        <div className="about-left-column">
          <h3 className="about-subheading">About Us</h3>
          <h2 className="about-heading">
            With our AI-powered Marketing CRM, businesses can simplify
            marketing automation, gain deep customer insights, and deliver
            personalized experiences at scale.
          </h2>
          <p className="about-text">
            The platform is made for both new organizations and established
            brands and thus makes it possible for everyone to be heard at the
            right time through the right place and messages. Allow the power of
            customer data to help you make informed decisions, improve return
            on investment, and scale. Join thousands of businesses today using
            our CRM to drive further engagement and loyalty.
          </p>
          <button className="about-btn">Follow us </button>
        </div>

        <div className="about-right-column">
          <motion.img
            src={aboutUsImage}
            alt="About Us"
            className="about-image"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: 'easeOut' }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
