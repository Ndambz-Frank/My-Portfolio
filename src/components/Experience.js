import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center display-4 fw-bold mb-5 text-dark">Experience</h2>
        
        <div className="row g-4">
          {/* Internships */}
          <div className="col-12">
            <div className="card shadow-sm">
              <div className="card-header bg-info text-white">
                <h3 className="card-title h4 mb-0">Internships</h3>
              </div>
              <div className="card-body p-4">
                <div className="timeline">
                  <div className="card mb-3 border-start border-info border-4">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h5 className="card-title fw-bold mb-0">Software Development Intern</h5>
                        <span className="badge bg-info">Internship</span>
                      </div>
                      <h6 className="text-muted mb-2">[Company Name]</h6>
                      <p className="text-muted mb-2">
                        <small><strong>Duration:</strong> [Start Date] - [End Date]</small>
                      </p>
                      <p className="card-text mb-2">
                        Worked on developing and maintaining web applications using modern frameworks.
                        Collaborated with senior developers on various projects and gained hands-on
                        experience in full-stack development.
                      </p>
                      <ul className="list-unstyled mb-0">
                        <li className="mb-1">• Developed responsive web applications using React and Node.js</li>
                        <li className="mb-1">• Participated in code reviews and agile development processes</li>
                        <li className="mb-1">• Assisted in database design and optimization</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card mb-3 border-start border-info border-4">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h5 className="card-title fw-bold mb-0">IT Support Intern</h5>
                        <span className="badge bg-info">Internship</span>
                      </div>
                      <h6 className="text-muted mb-2">[Company Name]</h6>
                      <p className="text-muted mb-2">
                        <small><strong>Duration:</strong> [Start Date] - [End Date]</small>
                      </p>
                      <p className="card-text mb-2">
                        Provided technical support to end-users and assisted in maintaining IT infrastructure.
                      </p>
                      <ul className="list-unstyled mb-0">
                        <li className="mb-1">• Troubleshot hardware and software issues</li>
                        <li className="mb-1">• Maintained network systems and security protocols</li>
                        <li className="mb-1">• Documented technical procedures and solutions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Attachments */}
          <div className="col-12">
            <div className="card shadow-sm">
              <div className="card-header bg-primary text-white">
                <h3 className="card-title h4 mb-0">Attachments</h3>
              </div>
              <div className="card-body p-4">
                <div className="card mb-3 border-start border-primary border-4">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h5 className="card-title fw-bold mb-0">Software Engineering Attachment</h5>
                      <span className="badge bg-primary">Attachment</span>
                    </div>
                    <h6 className="text-muted mb-2">[Organization Name]</h6>
                    <p className="text-muted mb-2">
                      <small><strong>Duration:</strong> [Start Date] - [End Date]</small>
                    </p>
                    <p className="card-text mb-2">
                      Gained practical experience in software development lifecycle and project management.
                    </p>
                    <ul className="list-unstyled mb-0">
                      <li className="mb-1">• Worked on real-world software projects</li>
                      <li className="mb-1">• Learned industry best practices and coding standards</li>
                      <li className="mb-1">• Collaborated with cross-functional teams</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Volunteer Work */}
          <div className="col-12">
            <div className="card shadow-sm">
              <div className="card-header bg-success text-white">
                <h3 className="card-title h4 mb-0">Volunteer Work</h3>
              </div>
              <div className="card-body p-4">
                <div className="card mb-3 border-start border-success border-4">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h5 className="card-title fw-bold mb-0">Tech Mentor / Volunteer</h5>
                      <span className="badge bg-success">Volunteer</span>
                    </div>
                    <h6 className="text-muted mb-2">[Organization Name]</h6>
                    <p className="text-muted mb-2">
                      <small><strong>Duration:</strong> [Start Date] - [Present/Ongoing]</small>
                    </p>
                    <p className="card-text mb-2">
                      Volunteered to teach programming and web development to underprivileged youth
                      and students interested in technology.
                    </p>
                    <ul className="list-unstyled mb-0">
                      <li className="mb-1">• Conducted coding workshops and training sessions</li>
                      <li className="mb-1">• Mentored students in software development projects</li>
                      <li className="mb-1">• Organized tech community events and hackathons</li>
                    </ul>
                  </div>
                </div>

                <div className="card mb-3 border-start border-success border-4">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h5 className="card-title fw-bold mb-0">Open Source Contributor</h5>
                      <span className="badge bg-success">Volunteer</span>
                    </div>
                    <h6 className="text-muted mb-2">Various Open Source Projects</h6>
                    <p className="text-muted mb-2">
                      <small><strong>Duration:</strong> [Start Date] - [Present/Ongoing]</small>
                    </p>
                    <p className="card-text mb-2">
                      Contributed to open source projects, helping improve software tools and libraries
                      used by developers worldwide.
                    </p>
                    <ul className="list-unstyled mb-0">
                      <li className="mb-1">• Fixed bugs and implemented new features</li>
                      <li className="mb-1">• Improved documentation and code quality</li>
                      <li className="mb-1">• Reviewed pull requests and provided feedback</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

