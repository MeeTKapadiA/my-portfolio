import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content" data-aos="fade-up">
        <div className="cyber-tag">
          <span className="blink-dot"></span> SYSTEM ACTIVE
        </div>
        <h1>
          Hey, I'm <span className="gradient-text">Meet Kapadia</span>
        </h1>
        <p className="hero-subtitle">
          B.Tech Student in Computer & Info Tech · UI/UX Explorer · SCADA & Full-Stack Developer
        </p>
        <p className="hero-brief">
          Building performance-driven developer dashboards, real-time SCADA interfaces, and highly polished user experiences.
        </p>
        <div className="hero-cta-group">
          <a href="#projects" className="hero-btn primary-btn">
            <span>Explore My Work</span>
          </a>
          <a href="#contact" className="hero-btn secondary-btn">
            <span>Initiate Contact</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

