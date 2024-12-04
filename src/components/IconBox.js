import React from 'react';
import '../styles/IconBox.css'; // Import the CSS file for the icon boxes
import iconbox_1 from '../assets/iconbox_1.png'; // Import custom icon 1
import iconbox_2 from '../assets/iconbox_2.png'; // Import custom icon 2

const IconBox = () => {
  const iconBoxes = [
    {
      icon: iconbox_1, // Custom icon for Sales Tracking
      title: 'Automated Campaigns',
      description: 'Personalize and automate emails, SMSs, and social campaigns.',
    },
    {
      icon: iconbox_2, // Custom icon for Contact Management
      title: '360° Customer View',
      description: 'Personalized journeys to generate powerful customer interactions.',
    },
    {
      icon: iconbox_1, // Custom icon for Automated Workflows
      title: 'Predictive Analytics',
      description: 'Predict, strategize, and drive decisions more intelligently.',
    },
  ];

  return (
    <div className="icon-box-container">
      {iconBoxes.map((box, index) => (
        <div key={index} className={`icon-box ${index === 1 ? 'icon-box-middle' : ''}`}>
          <img src={box.icon} alt={box.title} className="icon-img" /> {/* Render image */}
          <h3>{box.title}</h3>
          <p>{box.description}</p>
        </div>
      ))}
    </div>
  );
};

export default IconBox;
