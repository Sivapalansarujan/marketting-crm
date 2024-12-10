import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import '../styles/plans.css'; // Import the CSS file
import groupImage from '../assets/pricing_bg.png'; // Import the background image

const Plans = () => {
  const navigate = useNavigate(); // Initialize the navigation function

  const plansData = [
    {
      id: 1,
      color: "#FFFFFF",
      title: "Basic Plan",
      features: ["49$ / Month"], // Keep only the price
      bullets: [
        "Up to 10 Users",
        "Unlimited Deals, Tasks & Documents",
        "Basic Sales Tracking & Reporting",
        "Email Support",
      ],
    },
    {
      id: 2,
      color: "#FFFFFF",
      title: "Standard Plan",
      features: ["99$ / Month"], // Keep only the price
      bullets: [
        "Up to 50 Users",
        "Advanced Sales & Pipeline Tracking",
        "Marketing Automation (Email & SMS)",
        "Priority Support",
      ],
    },
    {
      id: 3,
      color: "#FFFFFF",
      title: "Premium Plan",
      features: ["149$ / Month"], // Keep only the price
      bullets: [
        "Up to 100 Users",
        "Customizable Workflows & Automations",
        "Predictive Analytics & Reporting",
        "Dedicated Account Manager",
      ],
    },
    {
      id: 4,
      color: "#FFFFFF",
      title: "Ultimate Plan",
      features: ["199$ / Month"], // Keep only the price
      bullets: [
        "Unlimited Users",
        "Full CRM Customization & Integrations",
        "Advanced AI-Powered Insights & Forecasting",
        "24/7 Premium Support & Onboarding",
      ],
    },
  ];

  const handleBuyPlan = (plan) => {
    // Navigate to Checkout with the selected plan details
    navigate("/checkout", { state: { selectedPlan: plan } });
  };

  return (
    <div
      id="plans"
      className="plans-container"
      style={{ backgroundImage: `url(${groupImage})` }}
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
              <button
                className="buy-button"
                onClick={() => handleBuyPlan(plan)}
              >
                Buy Plan
              </button>
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
