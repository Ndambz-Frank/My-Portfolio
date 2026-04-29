import React, { useState } from 'react';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'INFINITY INSURANCE SYSTEM',
      problem: 'The insurance industry needed a solution to cut short the brokers in the insurance field, streamlining the process and making insurance more accessible directly to customers.',
      role: 'Full Stack Developer - Led the development of the entire platform, including frontend and backend development.',
      tools: 'React, Express, MongoDB, JavaScript, JWT Authentication, Vercel',
      status: 'Deployed (Under Repair)',
      outcomes: 'The system is deployed and currently under repair while improvements and maintenance are in progress.',
      github: 'https://github.com/Ndambz-Frank/INFINITY-INSURANCE'
    },
    {
      id: 2,
      title: 'Gikosh',
      problem: 'Small businesses needed an affordable, scalable e-commerce solution to compete with larger retailers and reach customers online.',
      role: 'Full Stack Developer - Led the development of the entire platform, including frontend, backend, and database design.',
      tools: 'React, Node.js, Express, MongoDB, Stripe API, AWS S3, JWT Authentication',
      status: 'Not Completed',
      outcomes: 'Project is still in active development and has not yet been completed.',
      github: 'https://github.com/francisndambuki/ecommerce-platform'
    },
    {
      id: 3,
      title: 'Grasuu Task Management API',
      problem: 'Teams were struggling with project coordination and task tracking, leading to missed deadlines and communication gaps.',
      role: 'Frontend Developer - Designed and implemented the user interface, state management, and real-time collaboration features.',
      tools: 'React, Redux, Socket.io, Material-UI, Chart.js, RESTful APIs',
      status: 'Complete',
      outcomes: 'Project is complete and fully implemented.',
      github: 'https://github.com/francisndambuki/task-manager'
    },
    {
      id: 4,
      title: 'FORECASTED',
      problem: 'Users needed a comprehensive, user-friendly weather application that provides detailed forecasts and weather alerts.',
      role: 'Full Stack Developer - Built the entire application including API integration, data visualization, and responsive design.',
      tools: 'React, Node.js, OpenWeatherMap API, D3.js, CSS3, Express.js',
      status: 'Complete',
      outcomes: 'Project is complete and deployed for public access.',
      live: 'https://weather-forecasted-git-main-francis-ndambukis-projects.vercel.app',
      github: 'https://github.com/francisndambuki/weather-dashboard'
    }
  ];

  const toggleProject = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center display-4 fw-bold mb-5 text-dark">Projects</h2>
        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.id} className="col-md-6">
              <div className={`card shadow-sm h-100 ${expandedProject === project.id ? 'border-primary border-3' : ''}`}>
                <div 
                  className="card-header bg-primary text-white d-flex justify-content-between align-items-center cursor-pointer"
                  onClick={() => toggleProject(project.id)}
                  style={{cursor: 'pointer'}}
                >
                  <h3 className="card-title h5 mb-0">{project.title}</h3>
                  <span className="badge bg-light text-primary fs-5 px-3 py-2">
                    {expandedProject === project.id ? '−' : '+'}
                  </span>
                </div>
                
                {expandedProject === project.id && (
                  <div className="card-body">
                    <div className="mb-4 pb-3 border-bottom">
                      <h4 className="h6 fw-bold text-primary mb-2">Problem Statement</h4>
                      <p className="mb-0">{project.problem}</p>
                    </div>
                    
                    <div className="mb-4 pb-3 border-bottom">
                      <h4 className="h6 fw-bold text-primary mb-2">My Role</h4>
                      <p className="mb-0">{project.role}</p>
                    </div>
                    
                    <div className="mb-4 pb-3 border-bottom">
                      <h4 className="h6 fw-bold text-primary mb-2">Status</h4>
                      <p className="mb-0">{project.status}</p>
                    </div>

                    <div className="mb-4 pb-3 border-bottom">
                      <h4 className="h6 fw-bold text-primary mb-2">Tools & Techniques Used</h4>
                      <p className="mb-0">{project.tools}</p>
                    </div>
                    
                    {project.outcomes && (
                      <div className="mb-4 pb-3 border-bottom">
                        <h4 className="h6 fw-bold text-primary mb-2">Outcomes</h4>
                        <p className="mb-0">{project.outcomes}</p>
                      </div>
                    )}
                    
                    <div className="d-flex flex-wrap gap-2">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-success"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Live Project →
                        </a>
                      )}

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        onClick={(e) => e.stopPropagation()}
                      >
                        View on GitHub →
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
