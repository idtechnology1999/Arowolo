import React, { useState, useEffect } from 'react';
import './Portfolio.css';

// Import profile image
import ArowoloImage from './assets/arowolo.jpeg';

interface Project {
  title: string;
  description: string;
  url: string;
  tags: string[];
  gradient: string;
}

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface SocialLink {
  name: string;
  icon: string;
  url: string;
  color: string;
}

const Portfolio: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const projects: Project[] = [
    {
      title: "Mama Bee's Kitchen",
      description: "Professional restaurant website with online menu, ordering system, and elegant design showcasing authentic Nigerian cuisine and catering services.",
      url: "https://mamabeeskitchen.com/",
      tags: ["Restaurant", "E-Commerce", "WordPress"],
      gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)"
    },
    {
      title: "Munat Tech",
      description: "Modern technology company website featuring IT solutions, software development services, and digital transformation consulting.",
      url: "https://munattech.online/",
      tags: ["Tech Company", "Web Development", "Business"],
      gradient: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)"
    },
    {
      title: "5NJ Limited",
      description: "Corporate business website for a leading Nigerian company, featuring company profile, services portfolio, and professional brand identity.",
      url: "https://www.5njlimited.com/",
      tags: ["Corporate", "Business", "Professional"],
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #9333ea 100%)"
    },
    {
      title: "Akwire Farms",
      description: "Agricultural business platform showcasing modern farming operations, produce distribution, and sustainable agriculture practices.",
      url: "https://akwirefarms.com/",
      tags: ["Agriculture", "E-Commerce", "Business"],
      gradient: "linear-gradient(135deg, #10b981 0%, #14b8a6 100%)"
    },
    {
      title: "Abeke Adun",
      description: "Cultural and creative website celebrating Nigerian heritage through art, storytelling, and community engagement initiatives.",
      url: "https://abekeadun.com/",
      tags: ["Cultural", "Creative", "Community"],
      gradient: "linear-gradient(135deg, #d946ef 0%, #ec4899 100%)"
    },
    {
      title: "Onisowo",
      description: "Dynamic business website providing innovative solutions and services with modern design and user-friendly interface.",
      url: "https://onisowo.com/",
      tags: ["Business", "Services", "Innovation"],
      gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)"
    },
    {
      title: "Vision Spark Marketing",
      description: "Comprehensive marketing platform delivering innovative solutions for business growth and digital presence enhancement.",
      url: "http://visionsparkmarketingsolution.com/",
      tags: ["Marketing", "Digital", "Business Solutions"],
      gradient: "linear-gradient(135deg, #f43f5e 0%, #fb923c 100%)"
    },
    {
      title: "E-Commerce Solutions",
      description: "Custom online shopping platforms with secure payment integration, inventory management, and customer analytics.",
      url: "https://example-ecommerce.com",
      tags: ["E-Commerce", "React", "Node.js"],
      gradient: "linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%)"
    },
    {
      title: "Healthcare Management",
      description: "Digital health platform with appointment scheduling, patient records management, and telemedicine capabilities.",
      url: "https://example-healthcare.com",
      tags: ["Healthcare", "TypeScript", "Database"],
      gradient: "linear-gradient(135deg, #84cc16 0%, #22c55e 100%)"
    },
    {
      title: "Educational Portal",
      description: "Interactive learning management system with video courses, assessments, and student progress tracking.",
      url: "https://example-education.com",
      tags: ["Education", "Vue.js", "Firebase"],
      gradient: "linear-gradient(135deg, #f59e0b 0%, #fb923c 100%)"
    }
  ];

  const skills: Skill[] = [
    { name: "Web Development (HTML/CSS/JS)", level: 95, icon: "bi-code-slash" },
    { name: "React & Frontend Frameworks", level: 90, icon: "bi-filetype-jsx" },
    { name: "PHP & Backend Development", level: 88, icon: "bi-filetype-php" },
    { name: "Database Management (MySQL)", level: 87, icon: "bi-database" },
    { name: "Computer Systems & Networks", level: 92, icon: "bi-hdd-network" },
    { name: "UI/UX Design & Prototyping", level: 85, icon: "bi-palette2" },
    { name: "System Design & Architecture", level: 88, icon: "bi-diagram-3" },
    { name: "Code Debugging & Testing", level: 93, icon: "bi-bug" }
  ];

  const socialLinks: SocialLink[] = [
    { name: "LinkedIn", icon: "bi-linkedin", url: "https://linkedin.com/in/arowolo-aliu", color: "hover-blue" },
    { name: "GitHub", icon: "bi-github", url: "https://github.com/arowoloaliu", color: "hover-gray" },
    { name: "Instagram", icon: "bi-instagram", url: "https://instagram.com/arowoloaliu", color: "hover-pink" },
    { name: "Facebook", icon: "bi-facebook", url: "https://facebook.com/arowoloaliu", color: "hover-blue-dark" },
    { name: "WhatsApp", icon: "bi-whatsapp", url: "https://wa.me/2348145856060", color: "hover-green" }
  ];

  return (
    <div className="portfolio">
      {/* Animated Background */}
      <div className="hero-bg">
        <div className="hero-shape shape-1"></div>
        <div className="hero-shape shape-2"></div>
      </div>

      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-brand" onClick={() => scrollToSection('home')}>
            <div className="brand-icon">
              <i className="bi bi-code-slash"></i>
            </div>
            <span className="brand-text">Arowolo</span>
          </div>

          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.toLowerCase());
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`bi ${isMenuOpen ? 'bi-x' : 'bi-list'}`}></i>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge">
                <i className="bi bi-briefcase"></i>
                <span>Available for Opportunities</span>
              </div>

              <h1 className="hero-title">
                <span className="title-primary">Arowolo Aliu</span>
                <span className="title-gradient">Adekunle</span>
              </h1>

              <p className="hero-subtitle">
                Computer Engineering Technology Graduate | Software Developer | Web Designer
              </p>

              <p className="hero-description">
                Crafting innovative digital solutions with expertise in full-stack development and system design.
              </p>

              <div className="hero-buttons">
                <button
                  className="btn btn-primary"
                  onClick={() => scrollToSection('projects')}
                >
                  View My Work
                  <i className="bi bi-arrow-right"></i>
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => scrollToSection('contact')}
                >
                  Get In Touch
                  <i className="bi bi-envelope"></i>
                </button>
              </div>

              <div className="hero-social">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-link ${social.color}`}
                    title={social.name}
                  >
                    <i className={`bi ${social.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>

            <div className="hero-image">
              <div className="image-wrapper">
                <div className="image-ring"></div>
                <div className="image-container">
                  <img
                    src={ArowoloImage}
                    alt="Arowolo Aliu Adekunle"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      if (target.parentElement) {
                        target.parentElement.innerHTML = '<div class="image-fallback"><span>A</span></div>';
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <div className="section-line"></div>
          </div>

          <div className="about-content">
            <div className="about-cards">
              <div className="about-card card-violet">
                <div className="card-icon">
                  <i className="bi bi-award"></i>
                </div>
                <h3 className="card-title">Professional Journey</h3>
                <p className="card-text">
                  Computer Engineering Technology graduate with HND from The Polytechnic Ibadan and currently pursuing B.Tech at FUOYE.
                  Experienced Software Developer, Manager at 234Web Resources Nigeria Limited, and former Computer Laboratory Technician.
                  Passionate about creating innovative web solutions and building robust digital infrastructures.
                </p>
              </div>

              <div className="about-card card-cyan">
                <div className="card-icon">
                  <i className="bi bi-rocket-takeoff"></i>
                </div>
                <h3 className="card-title">My Approach</h3>
                <p className="card-text">
                  Dedicated to working with effectiveness, determination, and diligence. I combine technical expertise with creative
                  problem-solving to deliver scalable solutions. From online conference management systems to robotic quality control,
                  I bring ideas to life through code and innovation.
                </p>
              </div>
            </div>

            <div className="about-info">
              <div className="info-card">
                <div className="info-header">
                  <i className="bi bi-code-square"></i>
                  <h4>Technical Expertise</h4>
                </div>
                <p>
                  Software Developer with hands-on experience in web development, system design, and computer engineering.
                  Skilled in building conference management systems, robotic quality control systems, and full-stack web applications.
                </p>
              </div>

              <div className="info-card">
                <div className="info-header">
                  <i className="bi bi-palette"></i>
                  <h4>Professional Experience</h4>
                </div>
                <p>
                  Manager at 234Web Resources & Device Xtra Gadget Stores | Former Instructor at Peak Integrated System |
                  Computer Lab Technician at Federal School of Statistics | NYSC Corps Member 2023
                </p>
              </div>

              <div className="stats">
                <div className="stat-item stat-violet">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Projects</div>
                </div>
                <div className="stat-item stat-cyan">
                  <div className="stat-number">6+</div>
                  <div className="stat-label">Years Exp.</div>
                </div>
                <div className="stat-item stat-fuchsia">
                  <div className="stat-number">100+</div>
                  <div className="stat-label">Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Technical Skills</h2>
            <div className="section-line"></div>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={skill.name} className="skill-item" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="skill-header">
                  <div className="skill-info">
                    <div className="skill-icon">
                      <i className={`bi ${skill.icon}`}></i>
                    </div>
                    <h3>{skill.name}</h3>
                  </div>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="additional-skills">
            <p className="skills-subtitle">Also experienced with</p>
            <div className="tech-tags">
              {['Git & GitHub', 'WordPress', 'Python', 'C/C++', 'Arduino', 'Robotics', 'Linux', 'Photoshop'].map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <div className="section-line"></div>
            <p className="section-description">
              A showcase of my recent work spanning various industries and technologies
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="project-header" style={{ background: project.gradient }}></div>

                <div className="project-body">
                  <h3 className="project-title">{project.title}</h3>

                  <p className="project-description">{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Visit Website
                    <i className="bi bi-box-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Let's Work Together</h2>
            <div className="section-line"></div>
            <p className="section-description">
              Have a project in mind? Let's create something amazing together.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-card card-violet">
              <i className="bi bi-envelope"></i>
              <h3>Email</h3>
              <a href="mailto:arowolo886@gmail.com">arowolo886@gmail.com</a>
            </div>

            <div className="contact-card card-cyan">
              <i className="bi bi-telephone"></i>
              <h3>Phone</h3>
              <a href="tel:+2348145856060">+234 814 585 6060</a>
            </div>

            <div className="contact-card card-fuchsia">
              <i className="bi bi-geo-alt"></i>
              <h3>Location</h3>
              <p>Agbowo, Ibadan, Oyo State</p>
            </div>
          </div>

          <div className="contact-social">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-btn ${social.color}`}
              >
                <i className={`bi ${social.icon}`}></i>
                <span>{social.name}</span>
              </a>
            ))}
          </div>

          <div className="contact-cta">
            <button
              className="btn btn-primary"
              onClick={() => window.location.href = 'mailto:arowolo886@gmail.com'}
            >
              Send Me a Message
              <i className="bi bi-send"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Arowolo Aliu Adekunle. All rights reserved.</p>
          <p className="footer-subtitle">Computer Engineering Technology | Software Developer | Web Designer</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;