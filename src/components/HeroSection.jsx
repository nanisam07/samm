// src/components/HeroSection.jsx
import React from 'react';
import '../styles/HeroSection.css';
import BackgroundBeams from "../components/BackgroundBeams";
function HeroSection() {
  return (
    <section className="section hero">
      <div className="container w-container">
        <div className="hero-wrapper">
          
          <div className="hero-title">
            <div className="subtitle">Go-to-market agency</div>
            <h1 className="h1">Branding, websites & strategies for startups</h1>
          </div>
        </div>
      </div>
      
            <div className="hero-video">
        <div className="video-mobile-hero-wrap">
        
        </div>
        
        <section className="relative h-screen w-full overflow-hidden">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover"
  >
    <source src="images/back.mp4" type="video/mp4" />
  </video>

  <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
    
  </div>
</section>
      </div>
    </section>
  );
}

export default HeroSection;
