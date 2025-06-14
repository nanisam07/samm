import React from 'react';
import '../styles/BlogSection.css';

function BlogSection() {
  return (
    <section className="section blog">
      <div className="container w-container">
        <h2 className="h2">From Our Blog</h2>
        <div className="blog-posts">
          <div className="blog-card">
            <img src="images/blog1.jpg" alt="Blog 1" className="blog-image" />
            <h3 className="blog-title">Launching Your Brand in 20 Days</h3>
            <p className="blog-snippet">Discover how we help founders go to market with speed and confidence.</p>
          </div>
          <div className="blog-card">
            <img src="images/blog2.jpg" alt="Blog 2" className="blog-image" />
            <h3 className="blog-title">Designing for Emotion & Conversion</h3>
            <p className="blog-snippet">Learn our approach to design that connects with real users.</p>
          </div>
          <div className="blog-card">
            <img src="images/blog3.jpg" alt="Blog 3" className="blog-image" />
            <h3 className="blog-title">Building Webflow Sites That Convert</h3>
            <p className="blog-snippet">Why we use Webflow and how we make it scale for our clients.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;