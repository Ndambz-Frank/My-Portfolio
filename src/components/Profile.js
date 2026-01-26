import React from 'react';

const Profile = () => {
  return (
    <section id="profile" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center display-4 fw-bold mb-5 text-dark">Profile</h2>
        <div className="row g-4">
          <div className="col-12">
            <div className="card shadow-sm h-100">
              <div className="card-body p-4">
                <h3 className="card-title h3 mb-4 pb-2 border-bottom border-primary border-3">Professional Biography</h3>
                <p className="card-text lead mb-3">
                  I am a dedicated software developer and full stack data analyst with a passion for creating innovative solutions
                  that solve real-world problems. With a strong foundation in both frontend and backend
                  technologies, I specialize in building full-stack applications that are scalable,
                  maintainable, and user-friendly. Additionally, I excel in data analysis, transforming raw data into meaningful insights
                  through statistical analysis, data visualization, and predictive modeling. My experience spans across various domains including
                  web development, mobile applications, cloud computing, and comprehensive data analytics.
                </p>
                <p className="card-text lead">
                  Throughout my career, I have worked on diverse projects ranging from small startups
                  to enterprise-level applications. I believe in writing clean, well-documented code,
                  following best practices to ensure long-term project success, and leveraging data-driven approaches
                  to make informed decisions. Collaboration and continuous learning are at the core of my professional philosophy,
                  whether I'm developing software solutions or analyzing complex datasets to uncover valuable business insights.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body p-4">
                <h3 className="card-title h4 mb-4 pb-2 border-bottom border-success border-3">Interests</h3>
                <ul className="list-unstyled">
                  <li className="mb-2">▸ Web Development & Modern Frameworks</li>
                  <li className="mb-2">▸ Cloud Computing & DevOps</li>
                  <li className="mb-2">▸ Mobile Application Development</li>
                  <li className="mb-2">▸ Open Source Contributions</li>
                  <li className="mb-2">▸ Machine Learning & AI</li>
                  <li className="mb-2">▸ Cybersecurity</li>
                  <li className="mb-2">▸ Data Analysis & Visualization</li>
                  <li className="mb-2">▸ Statistical Modeling & Predictive Analytics</li>
                  <li className="mb-2">▸ Business Intelligence & Data Mining</li>
                  <li className="mb-2">▸ Power BI & Tableau</li>
                  <li className="mb-2">▸ Database Design & Data Warehousing</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body p-4">
                <h3 className="card-title h4 mb-4 pb-2 border-bottom border-primary border-3">Values & Career Goals</h3>
                <ul className="list-unstyled">
                  <li className="mb-2"><strong>Excellence:</strong> Striving for the highest quality in every project</li>
                  <li className="mb-2"><strong>Innovation:</strong> Embracing new technologies and creative solutions</li>
                  <li className="mb-2"><strong>Collaboration:</strong> Working effectively in team environments</li>
                  <li className="mb-2"><strong>Growth:</strong> Continuously learning and improving skills</li>
                  <li className="mb-2"><strong>Impact:</strong> Building solutions that make a difference</li>
                </ul>
                <div className="alert alert-success mt-3 mb-0" role="alert">
                  <small className="fst-italic">
                    My career goal is to become a senior software architect, leading teams to build
                    cutting-edge applications while mentoring the next generation of developers.
                  </small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body p-4">
                <h3 className="card-title h4 mb-4 pb-2 border-bottom border-warning border-3">What Motivates Me</h3>
                <p className="card-text mb-3">
                  I am motivated by the endless possibilities that technology and data offer to transform
                  lives and businesses. The ability to turn an idea into a working application that
                  solves real problems, combined with the power to extract meaningful insights from data
                  that drive strategic decisions, is incredibly rewarding. I thrive on challenges and enjoy
                  pushing the boundaries of what's possible with both code and data analysis.
                </p>
                <p className="card-text mb-0">
                  The collaborative nature of software development and data analysis, where diverse minds come together
                  to create something greater than the sum of its parts, is what drives me. I'm also
                  motivated by the opportunity to continuously learn and adapt in ever-evolving fields,
                  whether it's mastering new programming frameworks or discovering patterns in complex datasets
                  that can lead to breakthrough insights. The intersection of software development and data analytics
                  allows me to build solutions that are not only functional but also informed by data-driven intelligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
