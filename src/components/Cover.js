import React from 'react';
import '../styles/colorTheme.css';

const Cover = () => {
  return (
    <section id="cover" className="bg-primary text-white d-flex align-items-center justify-content-center min-vh-100 position-relative overflow-hidden">
      <div className="position-absolute top-0 start-0 w-100 h-100 opacity-25" style={{background: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'grid\' width=\'100\' height=\'100\' patternUnits=\'userSpaceOnUse\'%3E%3Cpath d=\'M 100 0 L 0 0 0 100\' fill=\'none\' stroke=\'rgba(255,255,255,0.1)\' stroke-width=\'1\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100\' height=\'100\' fill=\'url(%23grid)\'/%3E%3C/svg%3E")'}}></div>
      <div className="container position-relative z-1">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-5 mb-4 mb-md-0 text-center">
            <div className="position-relative d-inline-block">
              <div className="profile-photo-frame rounded-circle position-relative" style={{
                width: '280px',
                height: '280px',
                margin: '0 auto',
                display: 'block'
              }}>
                <img 
                  src="/profile-photo.jpeg" 
                  alt="Francis Muuo Ndambuki" 
                  className="rounded-circle w-100 h-100"
                  style={{objectFit: 'cover'}}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-7 text-center text-md-start">
            <h1 className="display-3 fw-bold mb-3 name-font-cover">Francis Muuo Ndambuki</h1>
            <h2 className="h3 fw-normal mb-4 opacity-75">Software Developer | Full Stack Data Analyst</h2>
            <p className="lead mb-5">
              Passionate software developer and full stack data analyst with expertise in building scalable web applications
              and transforming data into actionable insights. Dedicated to writing clean, efficient code, creating innovative solutions,
              and delivering data-driven decisions that drive business growth. Always eager to learn new technologies and tackle
              challenging problems in both software development and data analytics.
            </p>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
          <a href="mailto:frankndambz99@gmail.com" className="btn btn-light btn-lg rounded-pill px-4 py-2">
            <i className="me-2">📧</i>
            frankndambz99@gmail.com
          </a>
          <a href="tel:+254743483313" className="btn btn-light btn-lg rounded-pill px-4 py-2">
            <i className="me-2">📱</i>
            +254 743 483 313
          </a>
          <a href="https://www.linkedin.com/in/francis-ndambuki-4b6b61247/" target="_blank" rel="noopener noreferrer" className="btn btn-light btn-lg rounded-pill px-4 py-2">
            <i className="me-2">💼</i>
            LinkedIn Profile
          </a>
          <a href="https://github.com/Ndambz-Frank" target="_blank" rel="noopener noreferrer" className="btn btn-light btn-lg rounded-pill px-4 py-2">
            <i className="me-2">🔗</i>
            GitHub
          </a>
          <a href="https://my-portfolio-git-main-francis-ndambukis-projects.vercel.app" target="_blank" rel="noopener noreferrer" className="btn btn-light btn-lg rounded-pill px-4 py-2">
            <i className="me-2">🌐</i>
            Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cover;
