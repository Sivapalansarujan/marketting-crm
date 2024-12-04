// src/components/Plans.js
import React from "react";
import '../styles/plans.css'; // Import the CSS file
import groupImage from '../assets/pricing_bg.png'; // Import the background image

const Plans = () => {
  const plansData = [
    {
      color: "#FFFFFF",
      title: "Basic Plan",
      features: ["49$ / Month", " Ideal for small businesses getting started with CRM."],
      bullets: [
        "Up to 10 Users",
         "Unlimited Deals, Tasks & Documents", 
         "Basic Sales Tracking & Reporting", 
         "Email Support"],
    },
    {
      color: "#FFFFFF",
      title: "Standard Plan",
      features: ["99$ / Month", "Perfect for growing teams looking for more advanced features."],
      bullets: [
         "Up to 50 Users", 
        "Advanced Sales & Pipeline Tracking", 
         "Marketing Automation (Email & SMS)", 
         "Priority Support"],
    },
    {
      color: "#FFFFFF",
      title: "Premium Plan",
      features: ["149$ / Month", "Designed for larger teams with enterprise-level needs."],
      bullets: [
         "Up to 100 Users",
          "Customizable Workflows & Automations",
            "Predictive Analytics & Reporting", 
            "Dedicated Account Manager"],
    },
    {
      color: "#FFFFFF",
      title: "Ultimate Plan",
      features: ["199$ / Month", "For businesses that need the full power of CRM with custom features."],
      bullets: ["Unlimited Users", 
        "Full CRM Customization & Integrations",
          "Advanced AI-Powered Insights & Forecasting",
           "24/7 Premium Support & Onboarding"],
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
