import React from 'react';
import './Certifications.css';

const certifications = [
  {
    platform: 'Deloitte (Forage)',
    title: 'Cyber Job Simulation',
    date: '2025',
    logo: 'deloitte.png',
  },
  {
    platform: 'Mastercard (Forage)',
    title: 'Cybersecurity Job Simulation',
    date: '2025',
    logo: 'mastercard.png',
  },
  {
    platform: 'Walmart (Forage)',
    title: 'Advanced Software Engineering Simulation',
    date: '2025',
    logo: 'walmart.png',
  },
  {
    platform: 'Forage',
    title: 'Tata Group - Cybersecurity Analyst Job Simulation',
    date: '2025',
    logo: 'forage.png',
  },
  {
    platform: 'Office Master',
    title: 'Power BI Workshop',
    date: '2025',
    logo: 'officemaster.png',
  },
  {
    platform: 'Forage',
    title: 'GenAI Job Simulation',
    date: '2024',
    logo: 'forage.png',
  },
  {
    platform: 'Symbiosis Skills Professional University',
    title: 'Business Analytics',
    date: '2024',
    logo: 'symbiosis.png',
  },
  {
    platform: 'Infosys Springboard',
    title: 'Agile Methodologies',
    date: '2024',
    logo: 'infosys.png',
  },
  {
    platform: 'LetsUpgrade',
    title: 'Python Programming Essentials',
    date: '2023',
    logo: 'letsupgrade.png',
  },
  {
    platform: 'Infosys Springboard',
    title: 'Practical HTML & CSS',
    date: '2023',
    logo: 'infosys.png',
  },
  {
    platform: 'Infosys Springboard',
    title: 'JavaScript',
    date: '2023',
    logo: 'infosys.png',
  }
  
]
;

const Certifications = () => {
  return (
    <section className="certs-section" id="certifications">
      <h2>📜 Certifications</h2>
      <div className="certs-grid">
        {certifications.map((cert, index) => (
          <div className="cert-card" key={index}>
            <img src={cert.logo} alt={cert.platform} className="cert-logo" />
            <div className="cert-info">
              <h3>{cert.title}</h3>
              <p className="platform">{cert.platform}</p>
              <span className="date">{cert.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
