import React, { useState } from 'react';
import '../styles/FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle the visibility of the answer
  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
    { question: "What is JSX?", answer: "JSX is a syntax extension for JavaScript, which allows HTML-like code in JavaScript." },
    { question: "How do I create a component?", answer: "You can create a component by defining a function or class that returns JSX." },
    { question: "What are props in React?", answer: "Props are arguments passed into React components to provide data." },
    { question: "What is the Virtual DOM?", answer: "The Virtual DOM is a lightweight copy of the real DOM that React uses to optimize updates." },
    { question: "What are hooks in React?", answer: "Hooks are functions that let you use state and other React features in functional components." },
    { question: "What is Redux?", answer: "Redux is a state management tool often used with React." },
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
