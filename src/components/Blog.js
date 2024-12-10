// src/components/Blog.js
import React from 'react';
import '../styles/Blog.css';
import blogImage from '../assets/blogn1.png';
import blogImage2 from '../assets/blogn2.png';
import blogImage3 from '../assets/blogn3.png';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <section id="blog">
      <div className="blog-section">
        <h2 className="blog-heading">Our Latest Blog Posts</h2>
        <div className="blog-container">
          <div className="blog-card">
            <div
              className="blog-card-background"
              style={{ backgroundImage: `url(${blogImage})` }}
            ></div>
            <div className="blog-card-content">
              <p className="blog-description">
              The Ultimate Guide to Marketing CRM: What It Is and Why Your Business Needs It
              </p>
              <Link to="/blog1" className="read-more-btn">Read More</Link>
            </div>
          </div>

          <div className="blog-card">
            <div
              className="blog-card-background"
              style={{ backgroundImage: `url(${blogImage2})` }}
            ></div>
            <div className="blog-card-content">
              <p className="blog-description">
              5 Ways AI in CRM Is Revolutionizing Marketing Strategies
              </p>
              <Link to="/blog2" className="read-more-btn">Read More</Link>
            </div>
          </div>

          <div className="blog-card">
            <div
              className="blog-card-background"
              style={{ backgroundImage: `url(${blogImage3})` }}
            ></div>
            <div className="blog-card-content">
              <p className="blog-description">
              How to Personalize Marketing Campaigns Using CRM Data
              </p>
              <Link to="/blog3" className="read-more-btn">Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
