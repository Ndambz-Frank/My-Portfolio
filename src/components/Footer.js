import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light pt-5 pb-4 mt-0">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <h5 className="name-font mb-3 text-gold">Francis Muuo Ndambuki</h5>
            <p className="text-light-emphasis mb-3">
              Software Developer | Full Stack Data Analyst
            </p>
            <p className="small text-light-emphasis mb-0">
              Building modern web applications and turning data into actionable insights.
            </p>
          </div>

          <div className="col-6 col-lg-2">
            <h6 className="text-uppercase fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled small">
              <li className="mb-2"><a className="link-light link-underline-opacity-0 link-underline-opacity-100-hover" href="#profile">Profile</a></li>
              <li className="mb-2"><a className="link-light link-underline-opacity-0 link-underline-opacity-100-hover" href="#skills">Skills</a></li>
              <li className="mb-2"><a className="link-light link-underline-opacity-0 link-underline-opacity-100-hover" href="#projects">Projects</a></li>
              <li className="mb-2"><a className="link-light link-underline-opacity-0 link-underline-opacity-100-hover" href="#education">Education</a></li>
              <li className="mb-2"><a className="link-light link-underline-opacity-0 link-underline-opacity-100-hover" href="#certificates">Certificates</a></li>
              <li className="mb-2"><a className="link-light link-underline-opacity-0 link-underline-opacity-100-hover" href="#resume">Resume</a></li>
            </ul>
          </div>

          <div className="col-6 col-lg-3">
            <h6 className="text-uppercase fw-bold mb-3">Contact</h6>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <a className="link-light link-underline-opacity-0 link-underline-opacity-100-hover" href="mailto:frankndambz99@gmail.com">
                  frankndambz99@gmail.com
                </a>
              </li>
              <li className="mb-2">
                <a className="link-light link-underline-opacity-0 link-underline-opacity-100-hover" href="tel:+254743483313">
                  +254 743 483 313
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="link-light link-underline-opacity-0 link-underline-opacity-100-hover"
                  href="https://www.linkedin.com/in/francis-ndambuki-4b6b61247/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="link-light link-underline-opacity-0 link-underline-opacity-100-hover"
                  href="https://github.com/Ndambz-Frank"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3">
            <h6 className="text-uppercase fw-bold mb-3">Get in touch</h6>
            <p className="small text-light-emphasis">
              Open to roles, collaborations, and data-driven product work. Let’s connect.
            </p>
            <div className="d-flex flex-wrap gap-2">
              <a className="btn btn-primary btn-sm" href="mailto:frankndambz99@gmail.com">Email me</a>
              <a
                className="btn btn-outline-light btn-sm"
                href="/resume/Francis_Muuo_Ndambuki_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
              <a className="btn btn-outline-light btn-sm" href="#cover">Back to top</a>
            </div>
          </div>
        </div>

        <hr className="border-light opacity-25 my-4" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <div className="small text-light-emphasis">
            © {year} Francis Muuo Ndambuki. All rights reserved.
          </div>
          <div className="small">
            Built with <span className="text-gold">React</span> &amp; <span className="text-gold">Bootstrap</span>.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

