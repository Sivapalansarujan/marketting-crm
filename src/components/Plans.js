// src/components/Plans.js
import React from "react";
import '../styles/plans.css'; // Import the CSS file
import groupImage from '../assets/pricing_bg.png'; // Import the background image

const Plans = () => {
  const plansData = [
    {
      color: "#FFFFFF",
      title: "Basic Plan",
      features: ["Per Month", "For 10 Users"],
      bullets: ["Unlimited Deals, Tasks & Documents",
        "Unlimited Deals, Tasks & Documents",
         "Unlimited Deals, Tasks & Documents", 
         "Unlimited Deals, Tasks & Documents", 
         "Unlimited Deals, Tasks & Documents",
          "Unlimited Deals, Tasks & Documents"],
    },
    {
      color: "#FFFFFF",
      title: "Standard Plan",
      features: ["Per Month", "Marketing"],
      bullets: ["Unlimited Deals, Tasks & Documents",
         "Unlimited Deals, Tasks & Documents", 
        "Unlimited Deals, Tasks & Documents", 
        "Unlimited Deals, Tasks & Documents",
         "Unlimited Deals, Tasks & Documents", 
         "Unlimited Deals, Tasks & Documents"],
    },
    {
      color: "#FFFFFF",
      title: "Premium Plan",
      features: ["Per Month", "Enterorice"],
      bullets: ["Unlimited Deals, Tasks & Documents",
         "Unlimited Deals, Tasks & Documents",
          "Unlimited Deals, Tasks & Documents",
           "Unlimited Deals, Tasks & Documents",
            "Unlimited Deals, Tasks & Documents", 
            "Unlimited Deals, Tasks & Documents"],
    },
    {
      color: "#FFFFFF",
      title: "Ultimate Plan",
      features: ["Per Month", "Extra"],
      bullets: ["Unlimited Deals, Tasks & Documents", 
        "Unlimited Deals, Tasks & Documents",
         "Unlimited Deals, Tasks & Documents", 
         "Unlimited Deals, Tasks & Documents",
          "Unlimited Deals, Tasks & Documents",
           "Unlimited Deals, Tasks & Documents"],
    },
  ];

  return (
    <div
      className="plans-container"
      style={{ backgroundImage: `url(${groupImage})` }} // Dynamically set background image
    >
      <div className="plans-header">
        <p className="sub-heading">Affordable Plans</p>
        <h2 className="main-heading">Choose Your Plan</h2>
      </div>
      <div className="plans-grid">
        {plansData.map((plan, index) => (
          <div
            className="plans-section"
            key={index}
            style={{ backgroundColor: plan.color }}
          >
            <div className="left-section">
              <h3>{plan.title}</h3>
              <ul className="features-list">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button className="buy-button">Buy Plans</button>
            </div>
            <div className="right-section">
              <ul className="bullet-list">
                {plan.bullets.map((bullet, i) => (
                  <li key={i}>
                    <span className="bullet"></span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
