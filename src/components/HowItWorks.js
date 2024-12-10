// src/components/HowItWorks.js
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/HowItWorks.css';
import hiw_bg from '../assets/hiw_bg.png';
import hiw_1 from '../assets/hiw_1.png';
import hiw_2 from '../assets/hiw_2.png';
import hiw_3 from '../assets/hiw_3.png';

const HowItWorks = () => {
  return (
    <div className="how-it-works" id="howitworks">
      {/* First container */}
      <div className="first-container">
        <div className="heading-container">
          <h2 className="sub-heading">How It Works</h2>
          <h1 className="main-heading">
            Begin your journey to smarter customer management right today. Sign up today and see the power of automation in action!
          </h1>
        </div>
        <div className="image-container">
          <img src={hiw_bg} alt="How it works" className="hiw-image" />
        </div>
      </div>

      {/* Second container with 6 sections */}
      <div className="second-container">
        <div className="row">
          <div className="section section1">
            <div className="number-circle">1</div>
            <h3 className="section-heading">Create Your Account And Get Started</h3>
            <p className="section-text">
              It's quite simple to get started. Spend minutes to create an account with just a few personal credentials. Our user-friendly signup process makes you ready to go in no time.
            </p>
          </div>
          {/* Image 1 with entrance animation */}
          <motion.div
            className="section section2"
            initial={{ opacity: 0, y: -100 }} // Increased falling height (y: -100)
            whileInView={{ opacity: 1, y: 0 }} // Falling animation
            transition={{ duration: 1.5, ease: 'easeOut' }}
            viewport={{ once: true }} // Trigger animation only once when the image comes into view
          >
            <img src={hiw_1} alt="Image 1" className="section-image" />
          </motion.div>
        </div>

        <div className="row">
          {/* Image 2 with entrance animation */}
          <motion.div
            className="section section2"
            initial={{ opacity: 0, y: -100 }} // Increased falling height (y: -100)
            whileInView={{ opacity: 1, y: 0 }} // Falling animation
            transition={{ duration: 1.5, ease: 'easeOut' }}
            viewport={{ once: true }} // Trigger animation only once when the image comes into view
          >
            <img src={hiw_2} alt="Image 2" className="section-image" />
          </motion.div>
          <div className="section section1">
            <div className="number-circle">2</div>
            <h3 className="section-heading">Upload Your Contacts & Data</h3>
            <p className="section-text">
              Seamlessly upload existing customer data and contact lists. Easy integrations help in the migration of data from other platforms without losing any information.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="section section1">
            <div className="number-circle">3</div>
            <h3 className="section-heading">Manage & Track Customer Interactions</h3>
            <p className="section-text">
              Organize your customer relations with our full tools armor. Sales tracking, workflow automation, and advanced analytics for enhanced efficiency or output in monitoring customer journeys.
            </p>
          </div>
          {/* Image 3 with entrance animation */}
          <motion.div
            className="section section2"
            initial={{ opacity: 0, y: -100 }} // Increased falling height (y: -100)
            whileInView={{ opacity: 1, y: 0 }} // Falling animation
            transition={{ duration: 1.5, ease: 'easeOut' }}
            viewport={{ once: true }} // Trigger animation only once when the image comes into view
          >
            <img src={hiw_3} alt="Image 3" className="section-image" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
