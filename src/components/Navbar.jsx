// src/components/Navbar.jsx
import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className="mobile-menu-btn bg-linear-to-r from-cyan-500 to-blue-500">
      <div className="menu-links-wrap bg-linear-to-r from-cyan-500 to-blue-500">
        <a href="/" className="w-inline-block w--current">
          <img src="images/65f49f34ec4c5f45d925eac2_logo%20adelt.svg" alt="Adelt Logo" className="logo-adelt" />
        </a>
        <div className="div-block bg-linear-to-r from-cyan-500 to-blue-500">
          <a href="/cases" className="text-16-regular-caps">Our cases</a>
          <a href="/#reviews" className="text-16-regular-caps">Reviews</a>
          <a href="/#approach" className="text-16-regular-caps">Our approach</a>
          <a href="/#servicesContainer" className="text-16-regular-caps">Plans</a>
          <div className="blog-link-wrap bg-linear-to-r from-cyan-500 to-blue-500">
            <a href="/blog" className="text-16-regular-caps">Blog</a>
            <div className="hide"><div className="text-12-regular">soon</div></div>
          </div>
        </div>
        <div className="social-media web">
          <a href="https://www.behance.net/adelt_io" className="social-link w-inline-block">
            <img src="images/663a18d5c2764538d46f5c7c_behance.svg" alt="Behance" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/company/adeltagency" className="social-link w-inline-block">
            <img src="images/663a196accc7f1f6bb8ab651_ln.svg" alt="LinkedIn" className="social-icon _3" />
          </a>
          <a href="https://www.instagram.com/adelt_io/" className="social-link w-inline-block">
            <img src="images/663a19867e50ce7076f9d332_inst.svg" alt="Instagram" className="social-icon _2" />
          </a>
          <a href="mailto:business@adelt.io" className="social-link w-inline-block">
            <img src="images/663a1991ecda26698f3804d6_mail.svg" alt="Email" className="social-icon" />
          </a>
          <a href="https://wa.link/2ud2w2" className="social-link w-inline-block">
            <img src="images/66e1c50faaed74152e1ce378_whatsapp%201.svg" alt="WhatsApp" className="social-icon" />
          </a>
        </div>
        <div className="div-block-19">
          <a href="#" className="button-block-03 orange w-inline-block">
            <div className="button-text-03">Discuss a project</div>
            <div className="button-text-03 is-text-absolute">Discuss a project</div>
            <div className="arrow-container">
              <img src="images/663a15a7c3fdd5c29507e7f0_round-arrow.svg" alt="arrow" className="arrow-svg" />
            </div>
          </a>
          <a href="https://calendly.com/ana-z5x3/15-min-introduction-call" className="button-block-03 w-inline-block ">
            <div className="button-text-03 black">Schedule a call</div>
            <div className="button-text-03 is-text-absolute">Schedule a call</div>
            <div className="arrow-container">
              <img src="images/663a15a7c3fdd5c29507e7f0_round-arrow.svg" alt="arrow" className="arrow-svg" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
