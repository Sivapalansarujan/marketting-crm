import React from 'react';
import '../styles/IconBox.css'; // Import the CSS file for the icon boxes
import iconbox_1 from '../assets/iconbox_1.png'; // Import custom icon 1
import iconbox_2 from '../assets/iconbox_2.png'; // Import custom icon 2

const IconBox = () => {
  const iconBoxes = [
    {
      icon: iconbox_1, // Custom icon for Sales Tracking
      title: 'Sales Tracking',
      description: 'Track and analyze your sales performance.',
    },
    {
      icon: iconbox_2, // Custom icon for Contact Management
      title: 'Contact Management',
      description: 'Organize and manage customer contacts effectively.',
    },
    {
      icon: iconbox_1, // Custom icon for Automated Workflows
      title: 'Automated Workflows',
      description: 'Create automated workflows to enhance efficiency.',
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
