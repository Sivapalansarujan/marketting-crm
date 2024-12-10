// src/components/Blog2.js
import React from "react";
import '../styles/Blog1.css'; // Shared styles for all blogs
import blogImage2 from '../assets/blog_2.png'; // Import background image

function Blog2() {
  return (
    <div className="blog-container">
      {/* Full-width section for the first heading and introductory paragraph */}
      <div className="full-width-section">
        <h1>5 Ways AI in CRM Is Revolutionizing Marketing Strategies</h1>
        <p>
          Artificial Intelligence (AI) is no longer just a buzzword—it’s a game-changer for marketing. 
          By integrating AI into your Customer Relationship Management (CRM) system, businesses can unlock smarter, 
          more efficient marketing strategies. Here are five key ways AI is revolutionizing marketing:
        </p>
      </div>

      {/* Question and Answer section with image on the right */}
      <div className="qa-container">
        <div className="qa-content">
          <h2>1. Predictive Analytics for Smarter Campaigns</h2>
          <p>
            AI-powered CRMs analyze customer behavior and predict future actions. This means you can create highly 
            targeted campaigns based on what your customers are most likely to do next—whether it’s making a purchase, 
            subscribing to a service, or engaging with your content.
          </p>
          <h2>2. Personalized Marketing at Scale</h2>
          <p>
            AI allows businesses to automate personalization, delivering tailored messages to customers at the right time 
            through the right channels. Whether it's email, SMS, or social media, AI ensures that your communication feels personal, 
            boosting engagement and conversions.
          </p>
          <h2>3. Enhanced Lead Scoring</h2>
          <p>
            AI-driven CRMs improve lead scoring by analyzing customer interactions and predicting which leads are most likely to convert. 
            This allows sales and marketing teams to focus their efforts on high-potential prospects, improving efficiency and sales outcomes.
          </p>
          <h2>4. Automated Content Creation</h2>
          <p>
            AI can help generate personalized content for your audience, from email subject lines to social media posts. 
            By using customer data and behavior, AI can craft messages that resonate with your audience, saving time and ensuring 
            consistency across your campaigns.
          </p>
          <h2>5. Optimized Marketing Campaigns</h2>
          <p>
            AI continuously learns from customer interactions, optimizing marketing campaigns in real-time. Whether it’s adjusting content, 
            timing, or messaging, AI helps marketers make data-driven decisions that improve campaign performance and maximize ROI.
          </p>
        </div>
        <div className="qa-image">
          <img src={blogImage2} alt="AI CRM Marketing Strategies" className="blog-image" />
        </div>
      </div>

      {/* Conclusion section (full width) */}
      <div className="conclusion-section">
        <h2>Conclusion</h2>
        <p>
          AI is transforming CRM systems from simple tools into powerful, data-driven marketing engines. By leveraging AI, 
          businesses can create smarter, more personalized campaigns, predict customer behavior, and optimize their marketing strategies 
          for greater impact. If you’re not using AI in your CRM, now’s the time to get started. The future of marketing is here, and it’s powered by AI.
        </p>
      </div>
    </div>
  );
}

export default Blog2;
