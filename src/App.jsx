import { Analytics } from "@vercel/analytics/react"
import React, { useState } from 'react';
import './App.css';



const SKILLS_DATA = [
  {
    category: "Frontend Development",
    accentColor: "#38bdf8",
    items: ["React", "HTML", "CSS", "JavaScript"]
  },
  {
    category: "Programming",
    accentColor: "#a78bfa",
    items: ["C++ Beginner"]
  },
  {
    category: "Tools & Deployment",
    accentColor: "#34d399",
    items: ["Git", "GitHub", "Vercel"]
  }
];

const PROJECTS_DATA = [
  {
    title: "Lumière Candles",
    description: "An e-commerce front-end application focused on clean UI design, responsive product grids, and seamless shopping cart workflows.",
    tags: ["React", "JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/Abdu11eh/lumiere-candles.git",
    liveUrl: "https://lumiere-candles24.vercel.app", 
    imageUrl: "/lumiere-preview.png"
  },
  {
    title: "Movliks Movie Finder",
    description: "A dynamic movie search platform powered by the OMDb API, allowing users to discover and inspect details about movies in real time.",
    tags: ["React", "OMDb API", "JavaScript", "CSS"],
    githubUrl: "https://github.com/Abdu11eh/Movliks.git",
    liveUrl: "https://movliks24.vercel.app", 
    imageUrl: "/Moviliks-preview.png"
  }
];
const JOURNEY_DATA = [
  {
    title: "BS. Computer Science",
    institution: "DHA Suffa University",
    date: "2026 - Present",
    details: "Focusing on software engineering principles, web development, data structures, and computer science fundamentals.",
    color: "#38bdf8"
  },
  {
    title: "Higher Secondary Certificate (HSSC - Part I & II)",
    institution: "PACE College of Advanced Studies",
    date: "2024 - 2026",
    details: "Completed coursework in Computer Science with a strong academic foundation.",
    color: "#34d399"
  },
  {
    title: "Secondary School Certificate (SSC)",
    institution: "Habib Public School",
    date: "2014 - 2024",
    details: "Graduated with an A Grade, actively participating in student leadership and technical activities.",
    color: "#a78bfa"
  }
];

const LEADERSHIP_DATA = [
  {
    role: "Founder & President",
    organization: "Pace Model United Nations (2025)",
    description: "Led executive operations, organized multi-committee debates, and managed overall event logistics.",
    tag: "Leadership"
  },
  {
    role: "House Captain",
    organization: "Habib Public School",
    description: "Managed student council activities, coordinated inter-house events, and fostered school community engagement.",
    tag: "Student Leadership"
  },
  {
    role: "Conference Volunteer",
    organization: "SPELT International Conference",
    description: "Assisted event logistics and provided support for international academic delegates across two annual conferences.",
    tag: "Volunteering SPELT and Along with that 30+ schools Events."
  }
];

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="portfolio-container">
      {/* Visual top accent border */}
      <div className="accent-bar" />

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#hero" className="nav-logo">
            <span className="logo-symbol">&lt;/&gt;</span> Portfolio
          </a>

          {/* Desktop Navigation Links */}
          <ul className="nav-links">
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#journey">Journey</a></li>
            <li><a href="#leadership">Leadership</a></li>
            <li><a href="#contact" className="nav-btn">Contact</a></li>
          </ul>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="mobile-toggle" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <ul className="mobile-dropdown">
            <li><a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a></li>
            <li><a href="#journey" onClick={() => setIsMobileMenuOpen(false)}>Journey</a></li>
            <li><a href="#leadership" onClick={() => setIsMobileMenuOpen(false)}>Leadership</a></li>
            <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
          </ul>
        )}
      </nav>

      <main className="main-wrapper">
        {/* HERO SECTION */}
        <section id="hero" className="hero">
          <div className="hero-text">
            <h1>
              Hi, I'm <span className="highlight">Muhammad Abdullah</span> — Frontend Developer & CS Student
            </h1>
            <p className="hero-bio">
              I build clean, accessible, and high-performance user interfaces. Specializing in React, modern JavaScript, and turning complex engineering problems into straightforward web experiences.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">View My Work &rarr;</a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
          </div>

          <div className="hero-avatar-box">
  <div className="avatar-glow">
    <img 
      src="/abdpic.jpg" 
      alt="Muhammad Abdullah Shakeel" 
    />
  </div>
</div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="section">
          <span className="section-subtitle">&mdash; EXPERTISE</span>
          <h2>Skills & Technologies</h2>

          <div className="skills-grid">
            {SKILLS_DATA.map((group, index) => (
              <div key={index} className="skill-card">
                <div className="card-header">
                  <span className="color-indicator" style={{ backgroundColor: group.accentColor }} />
                  <h3>{group.category}</h3>
                </div>
                <div className="skill-list">
                  {group.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-pill">
                      <span className="code-symbol">&lt;&gt;</span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
<section id="projects" className="section">
  <span className="section-subtitle">&mdash; MY CREATIONS</span>
  <h2>Featured Projects</h2>

  <div className="projects-grid">
    {PROJECTS_DATA.map((project, index) => (
      <div key={index} className="project-card">
        <img src={project.imageUrl} alt={project.title} className="project-image" />
        <div className="project-content">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          
          <div className="project-tags">
            {project.tags.map((tag, tagIndex) => (
              <span key={tagIndex} className="tech-badge">{tag}</span>
            ))}
          </div>

        <div className="project-links">
  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="link-button">
    GitHub
  </a>
  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="link-button">
    Live Demo ↗
  </a>
</div>
        </div>
      </div>
    ))}
  </div>
</section>

        {/* EDUCATION SECTION */}
        <section id="journey" className="section">
          <span className="section-subtitle">&mdash; JOURNEY</span>
          <h2>Education & Experience</h2>

          <div className="timeline-list">
            {JOURNEY_DATA.map((item, index) => (
              <div key={index} className="timeline-card">
                <div className="timeline-badge" style={{ backgroundColor: item.color }}>
                  🎓
                </div>
                <div className="timeline-info">
                  <div className="timeline-top">
                    <div>
                      <h3>{item.title}</h3>
                      <p className="institution-name">{item.institution}</p>
                    </div>
                    <span className="timeline-date">{item.date}</span>
                  </div>
                  <p className="timeline-text">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LEADERSHIP SECTION */}
        <section id="leadership" className="section">
          <span className="section-subtitle">&mdash; RECOGNITIONS</span>
          <h2>Achievements & Leadership</h2>

          <div className="leadership-grid">
            {LEADERSHIP_DATA.map((item, index) => (
              <div key={index} className="leadership-card">
                <div className="card-top-bar">
                  <span className="tag-label">{item.tag}</span>
                </div>
                <h3>{item.role}</h3>
                <span className="org-label">{item.organization}</span>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

    {/* CONTACT SECTION */}
<section id="contact" className="section contact-section">
  <h2>Let's Connect</h2>
  <p>
    Whether you have a web project in mind, frontend roles to discuss, or just want to connect, feel free to reach out anytime!
  </p>
  
  <div className="contact-links-grid">
    <a href="mailto:abdu11eh175@gmail.com" className="contact-card">
      <span className="contact-icon">✉</span>
      <span>abdu11eh175@gmail.com</span>
    </a>

    <a href="tel:+923342309180" className="contact-card">
      <span className="contact-icon">📞</span>
      <span>0334-2309180</span>
    </a>

    <a 
      href="https://www.linkedin.com/in/abdullahshakeel175/" 
      target="_blank" 
      rel="noreferrer" 
      className="contact-card"
    >
      <span className="contact-icon">💼</span>
      <span>LinkedIn Profile ↗</span>
    </a>
  </div>

  <footer className="footer-copyright">
    © {new Date().getFullYear()} Muhammad Abdullah Shakeel. All rights reserved.
  </footer>
</section>
      </main>
    </div>
  );
}