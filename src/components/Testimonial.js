import React from 'react';
import '../styles/testimonial.css'; // Correct path to the CSS file
import testimonialImage from '../assets/testimonial.png'; // Correct path to the testimonial image
import backgroundImage from '../assets/testimonial_bg.png'; // Correct path to the background image

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <h2 className="testimonial-heading">Success Stories from Our Users</h2>
      <div className="testimonial-container">
        {/* First Testimonial */}
        <div className="testimonial-card">
          <p className="testimonial-name">Peline Jan</p>
          <p className="testimonial-role">Product Designer</p>
          <p className="testimonial-text">
            “Not only did it save me time, but it also helped produce content that was more engaging and effective.”
          </p>
          <img
            src={testimonialImage}
            alt="Peline Jan"
            className="profile-image"
          />
        </div>

        {/* Second Testimonial */}
        <div className="testimonial-card">
          <p className="testimonial-name">Peline Jan</p>
          <p className="testimonial-role">Product Designer</p>
          <p className="testimonial-text">
            “Not only did it save me time, but it also helped produce content that was more engaging and effective.”
          </p>
          <img
            src={testimonialImage}
            alt="Peline Jan"
            className="profile-image"
          />
        </div>
      </div>

      {/* Background Shape */}
      <div
        className="background-shape"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Navigation Buttons */}
      <div className="nav-buttons">
        <button>&larr;</button>
        <button>&rarr;</button>
      </div>
    </div>
  );
};

export default Testimonial;
