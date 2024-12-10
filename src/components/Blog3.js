// src/components/Blog3.js
import React from "react";
import '../styles/Blog1.css'; // Shared styles for all blogs
import blogImage3 from '../assets/blog_3.png'; // Import background image

function Blog3() {
  return (
    <div className="blog-container">
      {/* Full-width section for the first heading and introductory paragraph */}
      <div className="full-width-section">
        <h1>How to Personalize Marketing Campaigns Using CRM Data</h1>
        <p>
          Personalization is key to creating meaningful connections with customers and driving higher engagement and conversions. 
          With a CRM (Customer Relationship Management) system, you can leverage customer data to craft tailored marketing campaigns 
          that resonate with your audience. Here’s how to personalize your marketing using CRM data:
        </p>
      </div>

      {/* Question and Answer section with image on the right */}
      <div className="qa-container">
        <div className="qa-content">
          <h2>1. Segment Your Audience</h2>
          <p>
            CRM systems collect valuable data about your customers, including demographics, behaviors, and purchase history. 
            By segmenting your audience based on these insights, you can create targeted campaigns for different groups, 
            ensuring that each message is relevant to the recipient.
          </p>
          <h2>2. Leverage Behavioral Data</h2>
          <p>
            CRM data tracks customer behavior across various touch points such as website visits, email opens, and social media interactions. 
            Use this data to trigger personalized campaigns based on actions like cart abandonment, product interest, or past purchases. 
            Automated follow-ups can help keep your brand top of mind.
          </p>
          <h2>3. Tailor Content to Customer Preferences</h2>
          <p>
            Using CRM insights, you can customize content to match customer preferences. Whether it's personalized email content, 
            product recommendations, or targeted ads, tailoring your messaging ensures that customers feel seen and valued, 
            which boosts engagement and loyalty.
          </p>
          <h2>4. Automate Personalization at Scale</h2>
          <p>
            CRM systems automate the delivery of personalized messages, ensuring that each customer receives relevant content 
            at the right time. With automation, you can scale personalization efforts across large audiences without sacrificing the personal touch.
          </p>
          <h2>5. Track Results and Optimize</h2>
          <p>
            A major advantage of using CRM data is the ability to track the success of your campaigns. Use performance metrics 
            to understand what’s working and what’s not. Continuously refine your messaging, timing, and offers to improve your campaigns over time.
          </p>
        </div>
        <div className="qa-image">
          <img src={blogImage3} alt="Personalized marketing illustration" className="blog-image" />
        </div>
      </div>

      {/* Conclusion section (full width) */}
      <div className="conclusion-section">
        <h2>Conclusion</h2>
        <p>
          Personalization is no longer a luxury but a necessity in today’s competitive market. By leveraging CRM data, you can 
          build deeper connections with your audience, deliver tailored experiences, and drive better results. Start personalizing 
          your campaigns today and watch your customer relationships thrive.
        </p>
      </div>
    </div>
  );
}

export default Blog3;
