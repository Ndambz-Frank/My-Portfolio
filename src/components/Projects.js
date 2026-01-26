import React, { useState } from 'react';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'INFINITY-INSURANCE',
      problem: 'The insurance industry needed a solution to cut short the brokers in the insurance field, streamlining the process and making insurance more accessible directly to customers.',
      role: 'Full Stack Developer - Led the development of the entire platform, including frontend and backend development.',
      tools: 'React, Express, MongoDB, JavaScript, JWT Authentication, Vercel',
      outcomes: '',
      github: 'https://github.com/Ndambz-Frank/INFINITY-INSURANCE'
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      problem: 'Small businesses needed an affordable, scalable e-commerce solution to compete with larger retailers and reach customers online.',
      role: 'Full Stack Developer - Led the development of the entire platform, including frontend, backend, and database design.',
      tools: 'React, Node.js, Express, MongoDB, Stripe API, AWS S3, JWT Authentication',
      outcomes: 'Successfully launched platform serving 50+ businesses with 1000+ active users. Reduced checkout time by 40% and improved page load speed by 60%.',
      github: 'https://github.com/francisndambuki/ecommerce-platform'
    },
    {
      id: 3,
      title: 'Task Management Application',
      problem: 'Teams were struggling with project coordination and task tracking, leading to missed deadlines and communication gaps.',
      role: 'Frontend Developer - Designed and implemented the user interface, state management, and real-time collaboration features.',
      tools: 'React, Redux, Socket.io, Material-UI, Chart.js, RESTful APIs',
      outcomes: 'Improved team productivity by 35% and reduced project completion time by 25%. Received positive feedback from 200+ users.',
      github: 'https://github.com/francisndambuki/task-manager'
    },
    {
      id: 4,
      title: 'Weather Forecast Dashboard',
      problem: 'Users needed a comprehensive, user-friendly weather application that provides detailed forecasts and weather alerts.',
      role: 'Full Stack Developer - Built the entire application including API integration, data visualization, and responsive design.',
      tools: 'React, Node.js, OpenWeatherMap API, D3.js, CSS3, Express.js',
      outcomes: 'Created an intuitive dashboard with 5-day forecasts and real-time updates. Achieved 90% user satisfaction rate.',
      github: 'https://github.com/francisndambuki/weather-dashboard'
    },
    {
      id: 5,
      title: 'Social Media Analytics Tool',
      problem: 'Marketing teams required insights into their social media performance but existing tools were expensive and complex.',
      role: 'Backend Developer - Developed the API, data processing pipeline, and analytics engine.',
      tools: 'Python, Django, PostgreSQL, Redis, Celery, Twitter API, Instagram API, Chart.js',
      outcomes: 'Delivered analytics tool processing 10,000+ posts daily. Reduced reporting time from hours to minutes.',
      github: 'https://github.com/francisndambuki/social-analytics'
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
                      <h4 className="h6 fw-bold text-primary mb-2">Tools & Techniques Used</h4>
                      <p className="mb-0">{project.tools}</p>
                    </div>
                    
                    {project.outcomes && (
                      <div className="mb-4 pb-3 border-bottom">
                        <h4 className="h6 fw-bold text-primary mb-2">Outcomes</h4>
                        <p className="mb-0">{project.outcomes}</p>
                      </div>
                    )}
                    
                    <div>
                      <h4 className="h6 fw-bold text-primary mb-2">GitHub Repository</h4>
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
