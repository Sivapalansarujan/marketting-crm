import React, { useState, useEffect } from 'react';
import '../styles/testimonial.css';
import testimonialImage1 from '../assets/test1.png';
import testimonialImage2 from '../assets/test2.png';
import testimonialImage3 from '../assets/test3.png';
import testimonialImage4 from '../assets/test4.png';
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
      image: testimonialImage1,
    },
    {
      name: 'Robert Y',
      role: 'Sales Manager',
      text: `"Invaluable Insights & Seamless Integration!"
      The predictive analytics and the 360-degree customer view have played a very helpful role in comprehending our customers' requirements.
      The CRM seamlessly integrates with other tools, giving us worthy management from one place. It has been a great asset in streamlining our sales process.`,
      image: testimonialImage2,
    },
    {
      name: 'Wimberly E',
      role: ' Business Owner',
      text: `"Increased Customer Retention & ROI!"
Since implementing this CRM, our retention has taken off like a shot. 
The automatic workflows and targeted campaigns keep us on top of customer engagement,
 and the analytics-driven insights have significantly elevated our returns. 
 This is the platform for any business really serious about growth.`,
      image: testimonialImage3,
    },
    {
      name: 'Alice T',
      role: 'HR Manager',
      text: `"Invaluable Insights & Seamless Integration!"
      The predictive analytics and the 360-degree customer view have played a very helpful role in comprehending our customers' requirements.
      The CRM seamlessly integrates with other tools, giving us worthy management from one place. It has been a great asset in streamlining our sales process.`,
      image: testimonialImage4,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);


  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 2 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 2 ? 0 : prevIndex + 1));
  };

  
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="testimonial-section" id="testimonial">
      <h2 className="testimonial-heading">Success Stories from Our Users</h2>
      <div className="testimonial-container">
        {testimonials.slice(currentIndex, currentIndex + 2).map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            {/* Left Column for Image */}
            <div className="testimonial-image-column">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="profile-image"
              />
            </div>

            {/* Right Column for Text */}
            <div className="testimonial-text-column">
              <p className="testimonial-name">{testimonial.name}</p>
              <p className="testimonial-role">{testimonial.role}</p>
              <div className="testimonial-text">{testimonial.text}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="nav-buttons">
        <button onClick={handlePrev}>&larr;</button>
        <button onClick={handleNext}>&rarr;</button>
      </div>
    </div>
  );
};

export default Testimonial;
