// src/components/Hero.js
import React from 'react';
import '../styles/Hero.css'; 
import frameImage from '../assets/Frame.svg';
import groupImage from '../assets/Group.png'; 

function Hero() {
  return (
    <main className="hero-main">
      <section id="hero" className="hero">
      <img src={groupImage} alt="Decorative Group" className="group-img" />
        <div className="hero-content">
          <div className="left-column">
            <h2 className="hero-heading">Unlock the Power of Customer Engagement with Our CRM Solution </h2>
            <p className="hero-text">
            Leverage data driven insights and personalization for engagement, retention, 
            and growth among customers.Our next generation Marketing CRM platform allows 
            you to make value added connections with your customers, efficiently run your 
            campaigns, and deliver measurable results at every touchpoint. 
            </p>
            <button className="hero-btn">get started</button>
          </div>
          <div className="right-column">
          <img src={frameImage} className="hero-img" alt="Hero Graphic" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;
