import React from 'react';

const Skills = () => {
  const softwareDevSkills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Java',
    'HTML5', 'CSS3', 'SQL', 'MongoDB', 'PostgreSQL', 'RESTful APIs',
    'GraphQL', 'Git', 'Docker', 'AWS', 'Linux', 'Express.js'
  ];

  const dataAnalysisSkills = [
    'Python (Pandas, NumPy)', 'R Programming', 'SQL', 'Statistical Analysis',
    'Data Visualization', 'Predictive Modeling', 'Machine Learning',
    'Data Mining', 'Business Intelligence', 'ETL Processes',
    'Data Warehousing', 'Regression Analysis', 'Time Series Analysis'
  ];

  const softSkills = [
    'Problem Solving', 'Team Collaboration', 'Communication', 'Time Management',
    'Adaptability', 'Critical Thinking', 'Leadership', 'Project Management',
    'Agile Methodologies', 'Code Review', 'Mentoring', 'Client Relations'
  ];

  const devToolsTechnologies = [
    'VS Code', 'GitHub', 'Postman', 'Jira', 'Slack', 'Figma',
    'Webpack', 'NPM/Yarn', 'Jenkins', 'Kubernetes', 'Terraform',
    'MongoDB Atlas', 'Firebase', 'Heroku', 'Netlify', 'Vercel'
  ];

  const dataAnalysisTools = [
    'Power BI', 'Tableau', 'Excel (Advanced)', 'Jupyter Notebooks',
    'Apache Spark', 'Apache Kafka', 'MySQL', 'PostgreSQL',
    'MongoDB', 'Google Analytics', 'R Studio', 'Python (Data Science Libraries)'
  ];

  return (
    <section id="skills" className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center display-4 fw-bold mb-5 text-dark">Skills & Competencies</h2>
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="card shadow-sm h-100">
              <div className="card-body p-4">
                <h3 className="card-title h4 mb-4 text-center pb-2 border-bottom border-primary border-3">Software Development</h3>
                <div className="d-flex flex-wrap gap-2 justify-content-center">
                  {softwareDevSkills.map((skill, index) => (
                    <span key={index} className="badge bg-primary fs-6 px-3 py-2">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card shadow-sm h-100">
              <div className="card-body p-4">
                <h3 className="card-title h4 mb-4 text-center pb-2 border-bottom border-info border-3">Data Analysis</h3>
                <div className="d-flex flex-wrap gap-2 justify-content-center">
                  {dataAnalysisSkills.map((skill, index) => (
                    <span key={index} className="badge bg-info fs-6 px-3 py-2">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card shadow-sm h-100">
              <div className="card-body p-4">
                <h3 className="card-title h4 mb-4 text-center pb-2 border-bottom border-success border-3">Soft Skills</h3>
                <div className="d-flex flex-wrap gap-2 justify-content-center">
                  {softSkills.map((skill, index) => (
                    <span key={index} className="badge bg-success fs-6 px-3 py-2">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card shadow-sm h-100">
              <div className="card-body p-4">
                <h3 className="card-title h4 mb-4 text-center pb-2 border-bottom border-warning border-3">Dev Tools & Technologies</h3>
                <div className="d-flex flex-wrap gap-2 justify-content-center">
                  {devToolsTechnologies.map((tool, index) => (
                    <span key={index} className="badge bg-warning text-dark fs-6 px-3 py-2">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <h3 className="card-title h4 mb-4 text-center pb-2 border-bottom border-info border-3">Data Analysis Tools</h3>
                <div className="d-flex flex-wrap gap-2 justify-content-center">
                  {dataAnalysisTools.map((tool, index) => (
                    <span key={index} className="badge bg-info fs-6 px-3 py-2">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
