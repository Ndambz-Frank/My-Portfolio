import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('cover');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['cover', 'profile', 'skills', 'projects', 'education', 'certificates', 'resume'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close menu after clicking a link
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
      <div className="container">
        <a 
          className={`navbar-brand fw-bold name-font ${isScrolled ? 'text-dark' : 'text-white'}`}
          href="#cover"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('cover');
          }}
          style={{textTransform: 'uppercase', letterSpacing: '1px'}}
        >
          Francis Ndambuki
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleMenu}
          aria-controls="navbarNav" 
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className={`nav-link ${activeSection === 'cover' ? 'active fw-bold' : ''} ${isScrolled ? 'text-dark' : 'text-white'}`}
                href="#cover"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('cover');
                }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeSection === 'profile' ? 'active fw-bold' : ''} ${isScrolled ? 'text-dark' : 'text-white'}`}
                href="#profile"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('profile');
                }}
              >
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeSection === 'skills' ? 'active fw-bold' : ''} ${isScrolled ? 'text-dark' : 'text-white'}`}
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('skills');
                }}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeSection === 'projects' ? 'active fw-bold' : ''} ${isScrolled ? 'text-dark' : 'text-white'}`}
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('projects');
                }}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeSection === 'education' ? 'active fw-bold' : ''} ${isScrolled ? 'text-dark' : 'text-white'}`}
                href="#education"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('education');
                }}
              >
                Education
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeSection === 'certificates' ? 'active fw-bold' : ''} ${isScrolled ? 'text-dark' : 'text-white'}`}
                href="#certificates"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('certificates');
                }}
              >
                Certificates
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeSection === 'resume' ? 'active fw-bold' : ''} ${isScrolled ? 'text-dark' : 'text-white'}`}
                href="#resume"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('resume');
                }}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
