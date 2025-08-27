import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <h1>
          Hey, I'm <span>Meet Kapadia</span>
        </h1>
        <p className="hero-subtitle">
          Tech Explorer · UI/UX Designer · Futurist Developer
        </p>
        <a href="#projects" className="hero-btn">
          Explore My Work
        </a>
      </div>
      <div className="hero-visual" />
    </section>
  );
};

export default Hero;
