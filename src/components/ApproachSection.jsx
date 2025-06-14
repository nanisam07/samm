import React from 'react';
import '../styles/ApproachSection.css';

function ApproachSection() {
  return (
    <section className="section approach bg-linear-to-r from-cyan-500 to-blue-500">
      <div className="container w-container">
        <h2 className="h2">Our Approach</h2>
        <div className="approach-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3 className="step-title">Research & Discovery</h3>
            <p className="step-desc">Understand the client’s vision, target market, and competitors.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3 className="step-title">Strategy & Positioning</h3>
            <p className="step-desc">Define clear goals, brand tone, and user journey map.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3 className="step-title">Design & Prototyping</h3>
            <p className="step-desc">Create engaging designs and interactive prototypes for validation.</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3 className="step-title">Development & Launch</h3>
            <p className="step-desc">Build, test, and deploy using modern frameworks and best practices.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ApproachSection;
