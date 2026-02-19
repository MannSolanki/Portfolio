import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import "./Blog.css";

const blogData = [
    {
      id: 1,
      title: "How AI Tools Boosted My Productivity",
      description:
        "Explored practical uses of AI tools for creating presentations, analyzing data and debugging code efficiently.",
      readingTime: "5 min read",
      link: "#",
    },
    {
      id: 2,
      title: "Building Fast Servers with Bun",
      description:
        "Learned how to set up high-performance backend servers using Bun and modern JavaScript tools.",
      readingTime: "7 min read",
      link: "#",
    },
    {
      id: 3,
      title: "Learning Data Visualization with Power BI",
      description:
        "Created interactive dashboards and transformed raw data into meaningful business insights.",
      readingTime: "6 min read",
      link: "#",
    },
    {
      id: 4,
      title: "Mastering Responsive Design",
      description:
        "Deep dive into modern CSS techniques and best practices for creating responsive web applications.",
      readingTime: "8 min read",
      link: "#",
    },
    {
      id: 5,
      title: "React Performance Optimization",
      description:
        "Techniques to optimize React applications including memoization, lazy loading, and efficient rendering.",
      readingTime: "10 min read",
      link: "#",
    },
    {
      id: 6,
      title: "WebAssembly for Web Development",
      description:
        "Exploring how WebAssembly can bring native performance to web applications.",
      readingTime: "9 min read",
      link: "#",
    },
  ];

function Blog() {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    blogData.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, index]);
      }, index * 100);
    });
  }, []);

  return (
    <div className="blog-section">
      <div className="blog-container">
        <div className="blog-header">
          <h1 className="blog-main-title">
            Explore Learn Build <span className="title-emoji">🚀</span>
          </h1>
          <h2 className="blog-subtitle">Articles & Insights</h2>
        </div>

        <div className="blog-grid">
          {blogData.map((blog, index) => (
            <div
              key={blog.id}
              className={`blog-card-wrapper ${
                visibleCards.includes(index) ? "visible" : ""
              }`}
            >
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
