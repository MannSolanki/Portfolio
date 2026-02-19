import React from "react";
import { FiArrowRight } from "react-icons/fi";

function BlogCard({ blog }) {
  return (
    <div className="blog-card-modern">
      <div className="blog-card-content">
        <h3 className="blog-card-title">{blog.title}</h3>
        <p className="blog-card-description">{blog.description}</p>
        
        <div className="blog-card-footer">
          <span className="blog-reading-time">{blog.readingTime}</span>
          <a href={blog.link} className="blog-learn-more">
            Learn More <FiArrowRight className="arrow-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
