import React from 'react';
import '../styles/IconBox.css'; 
import iconbox_1 from '../assets/box_1.svg'; 
import iconbox_2 from '../assets/box_2.svg'; 
import iconbox_3 from '../assets/box_3.svg'; 

const IconBox = () => {
  const iconBoxes = [
    {
      icon: iconbox_1, 
      title: 'Automated Campaigns',
      description: 'Personalize and automate emails, SMSs, and social campaigns.',
    },
    {
      icon: iconbox_2, 
      title: '360° Customer View',
      description: 'Personalized journeys to generate powerful customer interactions.',
    },
    {
      icon: iconbox_3, 
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
