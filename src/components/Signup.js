import React, { useState } from 'react';
import '../styles/Signup.css'; 
import frameImage from '../assets/signup.png'; 

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      termsAccepted: e.target.checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="signup-container">
      {/* Left side with the image */}
      <div className="left-side">
        <img src={frameImage} alt="Signup Frame" className="signup-image" />
      </div>

      {/* Right side with the signup form */}
      <div className="right-side">
        <h2>Sign Up</h2>
        <p>Create an account to get started</p>

        <form onSubmit={handleSubmit} className="signup-form">
          {/* Name and Username */}
          <div className="input-group">
            <div className="input-column">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-column">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Sign Up Button */}
          <button type="submit" className="signup-button">
            Sign Up
          </button>

          {/* Terms and conditions checkbox */}
          <div className="terms-checkbox">
            <input
              type="checkbox"
              id="terms"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleCheckboxChange}
              required
            />
            <label htmlFor="terms">
              I agree to the <span>Terms and Conditions</span> and <span>Privacy Policy</span>
            </label>
          </div>

          {/* Continue with Google */}
          <div className="google-signup">
            <p>Or</p>
            <button type="button" className="google-button">
              <span>Continue with Google</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
