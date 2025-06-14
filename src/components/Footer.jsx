// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container w-container">
        <p>&copy; {new Date().getFullYear()} Adelt Agency. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;