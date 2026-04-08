import React from 'react';
import './about.css';

/* ── Data ── */
const profiles = [
  { label: 'LinkedIn',  icon: 'fa-brands fa-linkedin',  href: 'https://www.linkedin.com/in/jayesh-kohakade-635110240/' },
  { label: 'GitHub',    icon: 'fa-brands fa-github',    href: 'https://github.com/jaykohakade' },
  { label: 'Twitter',   icon: 'fa-brands fa-twitter',   href: 'https://twitter.com/yourprofile' },
  { label: 'Instagram', icon: 'fa-brands fa-instagram', href: 'https://www.instagram.com/jay_kohakade' },
  { label: 'Medium',    icon: 'fa-brands fa-medium',    href: 'https://medium.com/@yourprofile' },
];

const techStack = [
  { label: 'React',      icon: 'fa-brands fa-react' },
  { label: 'Node.js',    icon: 'fa-brands fa-node-js' },
  { label: 'Java',       icon: 'fa-brands fa-java' },
  { label: 'HTML5',      icon: 'fa-brands fa-html5' },
  { label: 'CSS3',       icon: 'fa-brands fa-css3-alt' },
  { label: 'JavaScript', icon: 'fa-brands fa-js' },
  { label: 'Bootstrap',  icon: 'fa-brands fa-bootstrap' },
  { label: 'Git',        icon: 'fa-brands fa-git-alt' },
];

const About = () => {
  // Duplicate tech items for seamless infinite marquee
  const marqueeItems = [...techStack, ...techStack];

  return (
    <section className="container-about" id="about">

      {/* ── Heading ── */}
      <div className="about-heading-block">
        <span className="eyebrow">About Me</span>
        <h2>Get to Know Me</h2>
        <p className="sub">Learn more about me, what I like, what I know, and where I live.</p>
      </div>

      {/* ── Two-column grid ── */}
      <div className="about-grid">

        {/* Box 1 — Profiles */}
        <div className="about-card">
          <h3>My Profiles</h3>
          <p>Discover my work, skills, and projects across platforms.</p>
          <div className="card-divider" />

          <div className="profile-list">
            {profiles.map(({ label, icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="profile-btn"
              >
                <span className="icon-wrap">
                  <i className={icon} />
                </span>
                <span className="p-label">{label}</span>
                <span className="p-arrow">→</span>
              </a>
            ))}
          </div>
        </div>

        {/* Box 2 — Tech Stack */}
        <div className="about-card box-2">
          <h3>My Tech Stack</h3>
          <p>Building modern web applications using powerful technologies.</p>
          <div className="card-divider" />

          {/* Infinite marquee */}
          <div className="tech-container">
            <div className="tech-track">
              {marqueeItems.map(({ label, icon }, idx) => (
                <div className="tech-item" key={`${label}-${idx}`}>
                  <i className={icon} />
                  <span className="t-name">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Static skill pills grid */}
          <div className="skills-grid">
            {techStack.map(({ label, icon }) => (
              <div className="skill-pill" key={label}>
                <i className={icon} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;