import React from 'react';
import './project.css';
import img1 from '../../asest/project-one.png';

const projects = [
  {
    id: 1,
    org: 'Thinking-Minds · 2025',
    title: 'Thinking Minds',
    platform: 'Online Learning Platform',
    description:
      'An e-learning platform built with React.js, Node.js, and MySQL that enables users to access courses, track progress, and participate in quizzes or live sessions. Designed for a fast, responsive experience with secure data handling and scalable performance.',
    tags: ['React.js', 'Node.js', 'MySQL', 'REST API'],
    image: img1,
    demoLink: 'https://your-demo-link.com',
  },
  {
    id: 2,
    title: 'Project Two',
    placeholder: true,
  },
  {
    id: 3,
    title: 'Project Three',
    placeholder: true,
  },
];

function Project() {
  return (
    <section className="projects-section">

      {/* Heading */}
      <div className="project-heading">
        <span className="eyebrow">Real-World Results</span>
        <h2>Featured Projects</h2>
        <p className="sub">A selection of work I've built — from concept to deployment.</p>
      </div>

      {/* Cards */}
      <div className="cards-container">
        {projects.map((project) =>
          project.placeholder ? (
            <div className="card placeholder" key={project.id}>
              <span className="placeholder-text">Coming Soon — {project.title}</span>
            </div>
          ) : (
            <div className="card" key={project.id}>

              {/* Content */}
              <div className="card-content">
                <span className="card-org">{project.org}</span>
                <h3 className="card-title">{project.title}</h3>
                <p className="card-platform">{project.platform}</p>
                <div className="card-divider" />
                <p className="card-description">{project.description}</p>

                {project.tags && (
                  <div className="card-tags">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                )}

                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="card-btn"
                >
                  <span>Live Demo →</span>
                </a>
              </div>

              {/* Image */}
              <div className="card-image-wrap">
                <img src={project.image} alt={project.title} />
              </div>

            </div>
          )
        )}
      </div>

    </section>
  );
}

export default Project;