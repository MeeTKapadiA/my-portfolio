import React from 'react';
import { FiFolder, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const projects = [
  {
    title: 'Mitra Referral & RM Management',
    description: 'Referral-based partner (Mitra) and Relationship Manager (RM) tracking system to onboard users and manage client acquisition workflows.',
    tech: ['Angular', '.NET Core', 'REST APIs', 'SQL'],
    link: '#',
    svg: (
      <svg viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="25" r="4" fill="#00ffe7" className="glow-node" />
        <circle cx="50" cy="12" r="4" fill="#bd00ff" />
        <circle cx="50" cy="38" r="4" fill="#bd00ff" />
        <circle cx="80" cy="25" r="4" fill="#00ffe7" />
        <line x1="24" y1="23" x2="46" y2="14" stroke="rgba(0, 255, 231, 0.4)" strokeWidth="1.5" />
        <line x1="24" y1="27" x2="46" y2="36" stroke="rgba(0, 255, 231, 0.4)" strokeWidth="1.5" />
        <line x1="54" y1="14" x2="76" y2="23" stroke="rgba(189, 0, 255, 0.4)" strokeWidth="1.5" />
        <line x1="54" y1="36" x2="76" y2="27" stroke="rgba(189, 0, 255, 0.4)" strokeWidth="1.5" />
        <path d="M50,16 L50,34" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    )
  },
  {
    title: 'Financial Goals Calculator',
    description: 'Goal-based financial planning module to calculate investment targets and future projections based on complex user returns projections.',
    tech: ['Angular', 'C#', 'Web API'],
    link: '#',
    svg: (
      <svg viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10,40 Q25,35 40,25 T70,12 T90,8" stroke="#bd00ff" strokeWidth="2" strokeLinecap="round" />
        <circle cx="90" cy="8" r="3" fill="#00ffe7" />
        <line x1="10" y1="42" x2="90" y2="42" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.5" />
        <line x1="10" y1="10" x2="10" y2="42" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.5" />
        <circle cx="40" cy="25" r="2.5" fill="rgba(0, 255, 231, 0.6)" />
        <circle cx="70" cy="12" r="2.5" fill="rgba(0, 255, 231, 0.6)" />
        <line x1="70" y1="12" x2="70" y2="42" stroke="rgba(0, 255, 231, 0.2)" strokeWidth="1" strokeDasharray="3 3" />
      </svg>
    )
  },
  {
    title: 'Indian Stock Market API',
    description: 'A FastAPI backend providing NSE/BSE stock data with historical trends and technical indicators, including portfolio watchlists.',
    tech: ['Python', 'FastAPI', 'Data Analytics'],
    link: '#',
    svg: (
      <svg viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="15" width="8" height="20" rx="1" fill="#00ffe7" fillOpacity="0.4" stroke="#00ffe7" strokeWidth="1.5" />
        <line x1="24" y1="8" x2="24" y2="42" stroke="#00ffe7" strokeWidth="1.5" />
        <rect x="45" y="22" width="8" height="15" rx="1" fill="#bd00ff" fillOpacity="0.4" stroke="#bd00ff" strokeWidth="1.5" />
        <line x1="49" y1="15" x2="49" y2="45" stroke="#bd00ff" strokeWidth="1.5" />
        <rect x="70" y="10" width="8" height="25" rx="1" fill="#00ffe7" fillOpacity="0.4" stroke="#00ffe7" strokeWidth="1.5" />
        <line x1="74" y1="5" x2="74" y2="40" stroke="#00ffe7" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    title: 'Facial Recognition & ID Verification',
    description: 'Face recognition and secure verification system using OpenCV and Dlib, with real-time face detection and embedding matchings.',
    tech: ['Python', 'OpenCV', 'Dlib', 'ML'],
    link: '#',
    svg: (
      <svg viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M35,15 Q50,8 65,15 Q75,25 65,35 Q50,42 35,35 Q25,25 35,15 Z" stroke="#00ffe7" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="43" cy="20" r="2" fill="#bd00ff" />
        <circle cx="57" cy="20" r="2" fill="#bd00ff" />
        <path d="M46,30 Q50,33 54,30" stroke="#00ffe7" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="15" y1="25" x2="85" y2="25" stroke="rgba(0, 255, 231, 0.5)" strokeWidth="1" />
        <rect x="12" y="10" width="76" height="30" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />
      </svg>
    )
  },
  {
    title: 'DevPulse Dashboard',
    description: 'A real-time developer productivity dashboard built with Angular and Chart.js, visualizing developer workflows and tasks.',
    tech: ['Angular', 'Chart.js', 'TypeScript'],
    link: '#',
    svg: (
      <svg viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="32" width="10" height="10" rx="1" fill="#bd00ff" />
        <rect x="30" y="22" width="10" height="20" rx="1" fill="#00ffe7" />
        <rect x="45" y="15" width="10" height="27" rx="1" fill="#bd00ff" />
        <rect x="60" y="28" width="10" height="14" rx="1" fill="#00ffe7" />
        <rect x="75" y="8" width="10" height="34" rx="1" fill="#00ffe7" />
        <line x1="10" y1="44" x2="90" y2="44" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    title: 'Real-Time Power SCADA',
    description: 'SCADA-inspired live telemetry dashboard for electrical transformers and systems using WebSockets, RabbitMQ, and LiveCharts.',
    tech: ['Angular', '.NET Core', 'RabbitMQ', 'LiveCharts'],
    link: '#',
    svg: (
      <svg viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10,25 L25,25 L30,10 L38,40 L45,20 L50,30 L55,25 L90,25" stroke="#00ffe7" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
        <circle cx="30" cy="10" r="2.5" fill="#bd00ff" />
        <circle cx="38" cy="40" r="2.5" fill="#bd00ff" />
        <path d="M10,15 L90,15" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
        <path d="M10,35 L90,35" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
      </svg>
    )
  }
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 data-aos="fade-up">🧩 Engineering Works</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            className="project-card glass-panel" 
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="project-image-wrapper">
              {project.svg}
            </div>
            <div className="card-header">
              <FiFolder className="folder-icon" />
              <a href={project.link} className="external-link" target="_blank" rel="noreferrer">
                <FiExternalLink />
              </a>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

