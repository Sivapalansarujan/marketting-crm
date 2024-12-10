// src/components/Contact.js
import React, { useState } from 'react';
import '../styles/Contact.css'; 
import callIcon from '../assets/call.png'; 
import mailIcon from '../assets/mail.png'; 
import mapIcon from '../assets/map.png'; 

const Contact = () => {
  const [selectedBullet, setSelectedBullet] = useState(null); 

  const handleBulletSelect = (index) => {
    setSelectedBullet(index === selectedBullet ? null : index); 
  };

  return (
    <div id="contact" className="contact-container">
      {/* Section 1: Contact Information and Form */}
      <div className="contact-info">
        <div className="contact-info-left">
          <h2>Contact Us</h2>
          <div className="contact-item">
            <img src={callIcon} alt="Call" />
            <span> 0112576397 </span>
          </div>
          <div className="contact-item">
            <img src={mailIcon} alt="Email" />
            <span> support@kolinasolutions.com </span>
          </div>
          <div className="contact-item">
            <img src={mapIcon} alt="Location" />
            <span> 30A Bodhiraja Mawatha, Kurunegala 60000 </span>
          </div>

          {/* Map iframe moved here */}
          <div className="contact-map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.7896394077075!2d80.36079431040807!3d7.488464611167344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae33a1e633ed65b%3A0x8f56c589770874ac!2s30a%20Bodhiraja%20Mawatha%2C%20Kurunegala%2060000!5e0!3m2!1sen!2slk!4v1733469020966!5m2!1sen!2slk"
              width="100%" 
              height="250"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        
        {/* Form Section moved to the right side */}
        <div className="contact-info-right">
          <div className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="form-row">
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Phone Number" />
            </div>
            <span className="select-subject-title">Select Subject?</span>
            <div className="bulletin-row">
              <div
                className={`bulletin ${selectedBullet === 0 ? 'active' : ''}`}
                onClick={() => handleBulletSelect(0)}
              >
                <span>{selectedBullet === 0 ? '✔' : '○'}</span>
                General Inquiry
              </div>
              <div
                className={`bulletin ${selectedBullet === 1 ? 'active' : ''}`}
                onClick={() => handleBulletSelect(1)}
              >
                <span>{selectedBullet === 1 ? '✔' : '○'}</span>
                Support
              </div>
              <div
                className={`bulletin ${selectedBullet === 2 ? 'active' : ''}`}
                onClick={() => handleBulletSelect(2)}
              >
                <span>{selectedBullet === 2 ? '✔' : '○'}</span>
                Feedback
              </div>
              <div
                className={`bulletin ${selectedBullet === 3 ? 'active' : ''}`}
                onClick={() => handleBulletSelect(3)}
              >
                <span>{selectedBullet === 3 ? '✔' : '○'}</span>
                Others
              </div>
            </div>
            <textarea placeholder="Write Message"></textarea>
            <button className="submit-button">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
