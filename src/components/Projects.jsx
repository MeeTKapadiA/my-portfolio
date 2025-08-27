import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'DevPulse Dashboard',
    description: 'A real-time developer productivity dashboard built with Angular and Chart.js.',
    tech: ['Angular', 'Chart.js', 'TypeScript'],
    link: '#',
  },
  {
    title: 'Real-Time Electrical Monitoring Dashboard',
    description: 'SCADA-inspired live dashboard for electrical systems using WebSockets and LiveCharts.',
    tech: ['Angular', '.NET Core', 'RabbitMQ', 'LiveCharts'],
    link: '#',
  },
  {
    title: 'WPF Personal Finance Manager',
    description: 'A C# desktop app for tracking income and expenses with dynamic chart switching.',
    tech: ['WPF', 'C#', 'LiveCharts', 'SQLite'],
    link: '#',
  },
  {
    title: 'Real-Time COVID-19 Data Dashboard',
    description: 'Live WPF dashboard displaying COVID-19 data with auto-refresh and chart export.',
    tech: ['WPF', 'C#', 'LiveCharts', 'API Integration'],
    link: '#',
  },
  {
    title: 'Smart Boom Barrier System',
    description: 'Python-based boom barrier using object detection and image classification.',
    tech: ['Python', 'OpenCV', 'Machine Learning'],
    link: '#',
  },
  {
    title: 'Air Quality Data Analyzer',
    description: 'Data analytics project in R for visualizing air quality using ggplot2 and Shiny.',
    tech: ['R', 'ggplot2', 'Shiny'],
    link: '#',
  },
  {
    title: '2-Player Tic-Tac-Toe Game',
    description: 'Console-based game implemented in C++ and Python to practice problem solving.',
    tech: ['C++', 'Python'],
    link: '#',
  },
  {
    title: 'Smart Med Prescription Assistant',
    description: 'An Android app that uses OCR to extract and manage prescription data.',
    tech: ['Android', 'Java', 'Python', 'OCR'],
    link: '#',
  },
  {
    title: 'Notes App with API Integration',
    description: 'Console + ASP.NET Core Web API project for managing personal notes.',
    tech: ['C#', 'ASP.NET Core', 'Web API'],
    link: '#',
  },
  {
    title: 'Electrical Dashboard – DashboardNew',
    description: 'Modern card-based Angular UI version of power monitoring dashboard.',
    tech: ['Angular', 'Chart.js', 'Bootstrap'],
    link: '#',
  },
  {
    title: 'Futuristic Portfolio Website',
    description: 'A personal portfolio built with a modern design, animations, and standalone components.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Angular'],
    link: '#',
  }
]
;

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2>🧩 Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
            <a href={project.link} className="project-link">View Project →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
