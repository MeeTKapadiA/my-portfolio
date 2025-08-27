import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2>💡 About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I’m Meet Kapadia, a passionate and forward-thinking B.Tech student in Computer & Information Technology (2022–2026) from Symbiosis University of Applied Sciences, with a strong academic 
            record (CGPA: 8.9). I specialize in building real-time systems, developer dashboards, and intuitive UI/UX interfaces that merge performance with aesthetic clarity.
          </p>
          <p>
            From architecting live power monitoring dashboards with .NET WebSockets and Angular, 
            to designing mobile and desktop apps with a keen sense of user flow — I thrive where technology meets 
            user experience. My journey includes internships at HKRP Innovations Limited and Infosys Springboard, 
            where I worked with RabbitMQ, Chart.js, LiveCharts, and full-stack APIs.
          </p>
          <p>
            I bring a rare mix of technical agility, problem-solving mindset, and a constant drive to learn and 
            innovate. Whether it’s building futuristic dashboards, visualizing data, or debugging complex backend logic — 
            I build with clarity, precision, and impact.
          </p>
        </div>
        <div className="about-photo">
          {/* Optional: Add profile image here */}
        </div>
      </div>
    </section>
  );
};

export default About;
