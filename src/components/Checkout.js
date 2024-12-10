import React, { useState } from "react";
import "../styles/Checkout.css";

const Checkout = () => {
  const pricingPlans = [
    { id: 1, name: "Basic Plan", price: 49, discountPercentage: 5 },
    { id: 2, name: "Standard Plan", price: 99, discountPercentage: 10 },
    { id: 3, name: "Premium Plan", price: 149, discountPercentage: 15 },
    { id: 4, name: "Ultimate Plan", price: 199, discountPercentage: 20 },
  ];

  const [selectedPlan, setSelectedPlan] = useState(pricingPlans[0]);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setCardDetails((prev) => ({ ...prev, [id]: value }));
  };

  const handleProceed = () => {
    const { cardNumber, cardName, expiryDate, cvv } = cardDetails;

    // Validate card details
    if (!cardNumber || !cardName || !expiryDate || !cvv) {
      alert("Please fill in all card details.");
      return;
    }

    // Simulate a successful purchase
    alert(`Successfully purchased the ${selectedPlan.name} plan!`);
  };

  // Calculate the discount amount based on the percentage
  const discountAmount = (selectedPlan.price * selectedPlan.discountPercentage) / 100;
  const totalPrice = selectedPlan.price - discountAmount;

  return (
    <div className="checkout-container">
      {/* Left Column: Pricing Plans */}
      <div className="pricing-plans">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className={`plan ${selectedPlan.id === plan.id ? "active" : ""}`}
            onClick={() => handlePlanSelection(plan)}
          >
            <div className="plan-content">
              <h3 className="plan-name">{plan.name}</h3>
              <div className="price">
                ${plan.price}{" "}
                <span className="discount">(-{plan.discountPercentage}% discount)</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Column: Checkout Details */}
      <div className="checkout-details">
        <h2>{selectedPlan.name}</h2>

        {/* Payment Options */}
        <div className="payment-options">
          <button className="payment-button">Pay with Card</button>
          <button className="payment-button">Pay with PayPal</button>
        </div>

        {/* Card Details */}
        <div className="card-details">
          <div className="input-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              placeholder="Card Number"
              value={cardDetails.cardNumber}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-row">
            <div className="input-group">
              <label htmlFor="cardName">Cardholder Name</label>
              <input
                type="text"
                id="cardName"
                placeholder="Cardholder Name"
                value={cardDetails.cardName}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="expiryDate">Expiry Date</label>
              <input
                type="text"
                id="expiryDate"
                placeholder="MM/YY"
                value={cardDetails.expiryDate}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                placeholder="CVV"
                value={cardDetails.cvv}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        {/* Total Calculation */}
        <div className="total-calculation">
          <div className="line-item">
            <span>Original Price:</span>
            <span>${selectedPlan.price}</span>
          </div>
          <div className="line-item">
            <span>Discount:</span>
            <span>-${discountAmount.toFixed(2)}</span>
          </div>
          <div className="line-item total">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>

        {/* Confirm Purchase */}
        <div className="confirm-purchase">
          <p>Please confirm your purchase and proceed.</p>
          <button className="proceed-button" onClick={handleProceed}>
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;



