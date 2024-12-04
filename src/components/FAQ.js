import React, { useState } from 'react';
import '../styles/FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle the visibility of the answer
  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    { question: "What is Marketing CRM?", 
      answer: "A marketing CRM streamlines customer interactions, incorporates automated tasks, and integrates data across pipelines simply to provide personalized experiences and lead to better performance." },
    { question: "How can an AI-powered CRM improve my marketing strategy?", 
      answer: "AI-powered CRM analyzes customer data to predict future behavior, helps in automating personalized campaigns, and optimizes marketing efforts toward smarter decisions, timely engagement, and a better return on this investment." },
    { question: "Can I integrate CRM with my existing tools?", 
      answer: "Of course, yes you can, our CRM is seamlessly integrated with email, social media, and sales tools for a smooth, comprehensive experience." },
    { question: " How secure is my customer data on your platform?",
       answer: "Your data is safely secured with the finest level of encryption and with all the required security measures in the industry, making it completely safe, private, and compliant." },
    { question: "Is training available for using the CRM?",
       answer: "Of course! We have extensive onboarding and training for you to take full advantage of our CRM. You can also reach out to our customer support team for any questions or concerns that you may have." },
    ,
  ];

  return (
    <div className="faq-section">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          >
            <div
              className="faq-question"
              onClick={() => toggleAnswer(index)}
            >
              {item.question}
              <div className="plus-sign">
                {activeIndex === index ? 'X' : '+'}
              </div>
            </div>
            <div className={`faq-answer ${activeIndex === index ? 'visible' : ''}`}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
