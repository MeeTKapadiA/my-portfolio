import React from 'react';
import './Experience.css';

const experiences = [
  {
    title: 'Software Developer Intern (Fintech)',
    company: 'Multiplus, Mumbai (Hybrid)',
    date: '📍 Hybrid | Jan 2026 – Present',
    description: [
      'Developed core modules for Mitra (partner) system including referral workflows and client onboarding tracking.',
      'Built Referral RM (Relationship Manager) features to manage client allocation, tracking, and internal workflows.',
      'Designed and implemented a Goals Calculator module to assist users in financial planning and target-based projections.',
      'Worked on backend services and API design for scalable fintech platform features.',
      'Ensured modular architecture with clear separation between customer-facing and internal management systems.',
      'Collaborated on system design and feature implementation following production-grade development practices.'
    ]
  },
  {
    title: 'Software Developer Intern',
    company: 'HKRP Innovation Limited, Ahmedabad',
    date: '📍 On-Site | June 2025 – July 2025',
    description: [
      'Developed scalable backend modules using C# and .NET for enterprise applications.',
      'Integrated MySQL and MongoDB databases for efficient data storage and retrieval.',
      'Improved performance through optimized queries and backend logic enhancements.'
    ]
  },
  {
    title: 'Intern',
    company: 'Infosys Springboard (Virtual)',
    date: '📍 Remote | June 2024 – July 2024',
    description: [
      'Built projects using Java, Python, and MongoDB.',
      'Gained exposure to Agile methodology, cybersecurity fundamentals, and data analytics.'
    ]
  }
];

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <h2 data-aos="fade-up">💼 Professional Timeline</h2>
      <div className="timeline">
        <div className="timeline-line"></div>
        {experiences.map((exp, index) => (
          <div 
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} 
            key={index}
            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
          >
            <div className="timeline-dot" />
            <div className="timeline-content glass-panel">
              <span className="timeline-date">{exp.date}</span>
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <ul className="exp-bullet-list">
                {exp.description.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

