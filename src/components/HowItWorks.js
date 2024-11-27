import React from 'react';
import '../styles/HowItWorks.css';
import hiw_bg from '../assets/hiw_bg.png';
import hiw_1 from '../assets/hiw_1.png';
import hiw_2 from '../assets/hiw_2.png';
import hiw_3 from '../assets/hiw_3.png';

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      {/* First container */}
      <div className="first-container">
        <div className="heading-container">
          <h2 className="sub-heading">How It Works</h2>
          <h1 className="main-heading">Your Journey to Smarter Customer Management</h1>
        </div>
        <div className="image-container">
          <img src={hiw_bg} alt="How it works" className="hiw-image" />
        </div>
      </div>

      {/* Second container with 6 sections */}
      <div className="second-container">
        <div className="row">
          <div className="section section1">
            <div className="number-circle">1</div>
            <h3 className="section-heading">Sign up and set up your account</h3>
            <p className="section-text">Begin by registering for an account. 
                The sign-up process is simple and intuitive, requiring only basic 
                information to get started quickly</p>
          </div>
          <div className="section section2">
            <img src={hiw_1} alt="Image 1" className="section-image" />
          </div>
        </div>

        <div className="row">
          <div className="section section2">
            <img src={hiw_2} alt="Image 2" className="section-image" />
          </div>
          <div className="section section1">
            <div className="number-circle">2</div>
            <h3 className="section-heading">Import your contacts and data</h3>
            <p className="section-text">Seamlessly upload your current customer lists and business data.
                 The CRM supports easy file uploads or integrations with other platforms, ensuring a smooth 
                 transition without data loss</p>
          </div>
        </div>

        <div className="row">
          <div className="section section1">
            <div className="number-circle">3</div>
            <h3 className="section-heading">Use our suite of tools to manage and track customer interactions</h3>
            <p className="section-text">Explore the CRM's features, such as tracking sales pipelines, automating workflows,
                 and generating insightful analytics. These tools are designed to help you enhance productivity and provide 
                 better customer service.
            </p>
          </div>
          <div className="section section2">
            <img src={hiw_3} alt="Image 3" className="section-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
