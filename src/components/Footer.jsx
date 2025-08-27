import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Meet Kapadia. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/MeeTKapadiA" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/meet--kapadia" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="meetkapadia722@gmail.com.com">Email</a>
          <a href="https://instagram.com/meet_121603" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
