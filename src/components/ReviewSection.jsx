import React from 'react';
import '../styles/ReviewsSection.css';

function ReviewsSection() {
  return (
    <section className="section reviews  ">
      <div className="container w-container">
        <h2 className="h2">What Our Clients Say</h2>
        <div className="reviews-wrapper">
          <div className="review-card">
            <p className="review-text">
              “Adelt helped us launch faster than we imagined. The team was collaborative, fast, and creative.”
            </p>
            <div className="review-author">— Priya S., SaaS Founder</div>
          </div>
          <div className="review-card">
            <p className="review-text">
              “They crafted a brand that tells our story. Incredible attention to detail and smooth delivery.”
            </p>
            <div className="review-author">— Mark D., CEO, Fintech</div>
          </div>
          <div className="review-card">
            <p className="review-text">
              “Excellent design work with sharp strategy. We’ll be working with Adelt again for future launches.”
            </p>
            <div className="review-author">— Anita R., Startup Lead</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;