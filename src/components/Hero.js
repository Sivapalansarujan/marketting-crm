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
            <h2 className="hero-heading">REVOLUTIONIZE YOUR CUSTOMER MANGEMENT </h2>
            <p className="hero-text">
              Streaming your sales and enhance customes satisfaction with our
              powerful CRM solutions. Streamline your sales and enhance customer satisfaction with our powerful
              CRM solutions
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
