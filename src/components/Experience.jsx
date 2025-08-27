import React from 'react';
import './Experience.css';

const experiences = [
  {
    title: 'Software Development Intern',
    company: 'HKRP Innovations Ltd.',
    date: ' 📍 On-Site | July 2025 – Present',
    description:
      'Designing and implementing a real-time electrical monitoring dashboard using Angular and .NET WebSockets Integrated RabbitMQ for real-time data streaming and backend communication Developed a modern, card-based SCADA-style UI for visualizing transformer health, power supply, load analysis, and feeder status Focused on responsive UI/UX using Chart.js, modular components, and elegant layout',
  },
  {
    title: 'Technology Intern – Advanced Track',
    company: 'Infosys Springboard – Internship 2',
    date: ' 📍 Remote | june 2024 – july 2024',
    description:
      'Specialized in Java 11, OOP, and Stream API Strengthened debugging and testing skills using Java development tools Applied programming logic to build mini-applications and implement backend functionality Participated in virtual collaborative tasks to simulate Agile workflows.',
  },
  {
    title: 'Technology Intern – Foundational Track',
    company: 'Infosys Springboard – Internship 1',
    date: ' 📍 Remote | June 2023 – july 2023',
    description:
      'Gained hands-on experience in MongoDB, Python, Cybersecurity, and Computer Networking Built a foundational understanding of Agile Project Management and team coordination Completed certifications in HTML/CSS, JavaScript, and Python Programming Contributed to small-scale projects using Excel dashboards and scripting tools',
  },
];

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <h2>💼 Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <span className="timeline-date">{exp.date}</span>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
