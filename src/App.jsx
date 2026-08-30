import { Analytics } from "@vercel/analytics/react";
import React, { useState } from 'react';
import './App.css';

const SKILLS_DATA = [
  {
    category: "Frontend Development",
    accentColor: "#FF6B00",
    items: ["React", "HTML", "CSS", "JavaScript"]
  },
  {
    category: "Programming",
    accentColor: "#FF6B00",
    items: ["C++ Beginner"]
  },
  {
    category: "Tools & Deployment",
    accentColor: "#FF6B00",
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
    details: "Focusing on software engineering principles, web development, data structures, and computer science fundamentals."
  },
  {
    title: "Higher Secondary Certificate (HSSC - Part I & II)",
    institution: "PACE College of Advanced Studies",
    date: "2024 - 2026",
    details: "Completed coursework in Computer Science with a strong academic foundation."
  },
  {
    title: "Secondary School Certificate (SSC)",
    institution: "Habib Public School",
    date: "2014 - 2024",
    details: "Graduated with an A Grade, actively participating in student leadership and technical activities."
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
    role: "Conference Volunteer And 30+ other Events",
    organization: "SPELT International Conference",
    description: "Assisted event logistics and provided support for international academic delegates across two annual conferences.",
    tag: "Volunteering"
  }
];

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="portfolio-container">
      <Analytics />
      
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#hero" className="nav-logo">
            <span className="logo-accent">Abdu11eh</span>
          </a>

          {/* Desktop Links */}
          <ul className="nav-links">
            <li><a href="#hero" className="active">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#journey">Journey</a></li>
            <li><a href="#leadership">Leadership</a></li>
            <li><a href="#contact">Contact me</a></li>
          </ul>

          <a href="#contact" className="btn-orange nav-cta">Hire Me</a>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-toggle" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <ul className="mobile-dropdown">
            <li><a href="#hero" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a></li>
            <li><a href="#journey" onClick={() => setIsMobileMenuOpen(false)}>Journey</a></li>
            <li><a href="#leadership" onClick={() => setIsMobileMenuOpen(false)}>Leadership</a></li>
            <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact me</a></li>
          </ul>
        )}
      </nav>

      <main className="main-wrapper">
        {/* HERO SECTION */}
        <section id="hero" className="hero-section">
          <div className="hero-left">
            <p className="greeting-text">Hi I am</p>
            <p className="user-name">Abdullah Shakeel</p>
            <h1 className="role-title">Frontend Developer And Computer Science Student At DSU</h1>

            {/* Social Icons */}
            <div className="social-icons">
              <a href="https://github.com/Abdu11eh" target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/abdullahshakeel175/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="hero-btn-group">
              <a href="#contact" className="btn-orange">Hire Me</a>
              <a href="#contact" className="btn-outline">Contact Me</a>
            </div>

            {/* Metric / Experience Cards */}
            <div className="stats-box">
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Skills</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-number">BS</span>
                <span className="stat-label">CS Student</span>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="circle-frame">
              <img src="/abdpic.jpg" alt="Muhammad Abdullah Shakeel" />
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="section">
          <span className="section-tag">— EXPERTISE</span>
          <h2 className="section-title">Skills & Technologies</h2>

          <div className="skills-grid">
            {SKILLS_DATA.map((group, index) => (
              <div key={index} className="skill-card">
                <h3>{group.category}</h3>
                <div className="skill-list">
                  {group.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-pill">
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
          <span className="section-tag">— MY CREATIONS</span>
          <h2 className="section-title">Featured Projects</h2>

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
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-outline-sm">
                      GitHub
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-orange-sm">
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
          <span className="section-tag">— JOURNEY</span>
          <h2 className="section-title">Education & Experience</h2>

          <div className="timeline-list">
            {JOURNEY_DATA.map((item, index) => (
              <div key={index} className="timeline-card">
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
          <span className="section-tag">— RECOGNITIONS</span>
          <h2 className="section-title">Achievements & Leadership</h2>

          <div className="leadership-grid">
            {LEADERSHIP_DATA.map((item, index) => (
              <div key={index} className="leadership-card">
                <span className="tag-label">{item.tag}</span>
                <h3>{item.role}</h3>
                <span className="org-label">{item.organization}</span>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="section contact-section">
          <h2 className="section-title">Let's Connect</h2>
          <p className="contact-subtitle">
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