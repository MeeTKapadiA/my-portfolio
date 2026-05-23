import React from 'react';
import './About.css';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['C#', 'Java', 'Python', 'JavaScript', 'TypeScript', 'C++', 'R', 'HTML/CSS']
  },
  {
    title: 'Frameworks & Systems',
    skills: ['React', 'Angular', 'WPF', 'ASP.NET Core', 'Web API', 'RabbitMQ', 'WebSockets']
  },
  {
    title: 'Database & Tools',
    skills: ['MongoDB', 'SQLite', 'Git & GitHub', 'OpenCV', 'Chart.js / LiveCharts', 'Postman']
  }
];

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2 data-aos="fade-up">💡 Personal Dossier</h2>
      
      <div className="about-grid">
        <div className="about-dossier glass-panel" data-aos="fade-right">
          <div className="dossier-header">
            <span className="dossier-title">PROFILE // MK-992</span>
            <span className="dossier-status">STATUS: ACTIVE</span>
          </div>
          <div className="dossier-body">
            <p>
              I am a passionate and forward-thinking B.Tech student in Computer & Information Technology (2022–2026) at <strong>Symbiosis University of Applied Sciences</strong>, maintaining an academic CGPA of <strong>8.9</strong>.
            </p>
            <p>
              I specialize in engineering real-time data monitoring interfaces, full-stack API architectures, and responsive UI/UX dashboards. My experience spans designing client-server systems via WebSockets, implementing messaging brokers like RabbitMQ, and integrating real-time charting solutions (Chart.js, LiveCharts).
            </p>
            <p>
              Driven by curiosity, I enjoy bridging the gap between rigorous back-end logistics and fluid, aesthetic front-end design to deliver high-performance user experiences.
            </p>
          </div>
        </div>

        <div className="skills-container" data-aos="fade-left">
          <h3 className="skills-section-title">🔧 Core Tech Stack</h3>
          
          <div className="skills-grid">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="skill-cat-card glass-panel">
                <h4>{cat.title}</h4>
                <div className="skills-chips">
                  {cat.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="skill-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

