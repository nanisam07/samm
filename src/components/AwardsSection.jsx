import React from 'react';
import '../styles/AwardsSection.css';

function AwardsSection() {
  return (
    <section className="section awards">
      <div className="container w-container">
        <div className="awards-wrapper">
          <h2 className="h2">Awards & Recognition</h2>
          <div className="awards-list">
            <div className="award-item">
              <img src="images/awards1.svg" alt="Award 1" className="award-icon" />
              <div className="award-title">Best Startup Agency 2024</div>
            </div>
            <div className="award-item">
              <img src="images/awards2.svg" alt="Award 2" className="award-icon" />
              <div className="award-title">Top Design Firm</div>
            </div>
            <div className="award-item">
              <img src="images/awards3.jpg" alt="Award 3" className="award-icon" />
              <div className="award-title">Innovation Award</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AwardsSection;