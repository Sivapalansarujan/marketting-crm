import React, { useState } from 'react';
import '../styles/testimonial.css';
import testimonialImage from '../assets/testimonial.png'; // Ensure this image exists
import backgroundImage from '../assets/testimonial_bg.png';

const Testimonial = () => {
  const testimonials = [
    {
      name: 'Goodwin M',
      role: 'Marketing Director',
      text: `"A Game Changer for Our Marketing Team!"
The efficiency and customer engagement levels that our squad has achieved are
 just incredible. We save so many hours each week through automation- and the 
 personalized campaigns have pitched conversion. This is just the best possible CRM!
`,
      image: testimonialImage,
    },
    {
      name: 'Robert Y',
      role: 'Sales Manager',
      text: `"Invaluable Insights & Seamless Integration!"
      The predictive analytics and the 360-degree customer view have played a very helpful role in comprehending our customers' requirements.
      The CRM seamlessly integrates with other tools, giving us worthy management from one place. It has been a great asset in streamlining our sales process.`,
      image: testimonialImage,
    },
    {
      name: 'Wimberly E',
      role: ' Business Owner',
      text: `"Increased Customer Retention & ROI!"
Since implementing this CRM, our retention has taken off like a shot. 
The automatic workflows and targeted campaigns keep us on top of customer engagement,
 and the analytics-driven insights have significantly elevated our returns. 
 This is the platform for any business really serious about growth.`,
      image: testimonialImage,
    },
    {
      name: 'Alice T',
      role: 'HR Manager',
      text: `"Invaluable Insights & Seamless Integration!"
      The predictive analytics and the 360-degree customer view have played a very helpful role in comprehending our customers' requirements.
      The CRM seamlessly integrates with other tools, giving us worthy management from one place. It has been a great asset in streamlining our sales process.`,
      image: testimonialImage,
    },
   
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1));
  };

  return (
    <div className="testimonial-section">
      <h2 className="testimonial-heading">Success Stories from Our Users</h2>
      <div className="testimonial-container">
        {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <p className="testimonial-name">{testimonial.name}</p>
            <p className="testimonial-role">{testimonial.role}</p>
            <div className="testimonial-text">{testimonial.text}</div>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="profile-image"
            />
          </div>
        ))}
      </div>

      {/* Background Shape */}
      <div
        className="background-shape"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Navigation Buttons */}
      <div className="nav-buttons">
        <button onClick={handlePrev}>&larr;</button>
        <button onClick={handleNext}>&rarr;</button>
      </div>
    </div>
  );
};

export default Testimonial;
