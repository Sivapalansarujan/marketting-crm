// src/components/Blog.js
import React from 'react';
import '../styles/Blog.css'; // Corrected path
import blogImage from '../assets/blog.png'; // Import background image

const Blog = () => {
  return (
    <div className="blog-section">
      <h2 className="blog-heading">Our Latest Blog Posts</h2>
      <div className="blog-container">
        <div className="blog-card">
          <div
            className="blog-card-background"
            style={{ backgroundImage: `url(${blogImage})` }}
          ></div>
          <div className="blog-card-content">
            <div className="blog-card-footer">
              <p className="blog-writer">By John Doe</p>
              <p className="blog-comments">12 Comments</p>
            </div>
            <p className="blog-description">
              This is a brief description of the blog post. It gives an idea about the content of the post.
            </p>
            <button className="read-more-btn">Read More</button>
          </div>
        </div>

        <div className="blog-card">
          <div
            className="blog-card-background"
            style={{ backgroundImage: `url(${blogImage})` }}
          ></div>
          <div className="blog-card-content">
            <div className="blog-card-footer">
              <p className="blog-writer">By Jane Smith</p>
              <p className="blog-comments">8 Comments</p>
            </div>
            <p className="blog-description">
              This is a brief description of the blog post. It gives an idea about the content of the post.
            </p>
            <button className="read-more-btn">Read More</button>
          </div>
        </div>

        <div className="blog-card">
          <div
            className="blog-card-background"
            style={{ backgroundImage: `url(${blogImage})` }}
          ></div>
          <div className="blog-card-content">
            <div className="blog-card-footer">
              <p className="blog-writer">By Alex Brown</p>
              <p className="blog-comments">5 Comments</p>
            </div>
            <p className="blog-description">
              This is a brief description of the blog post. It gives an idea about the content of the post.
            </p>
            <button className="read-more-btn">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
