import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center display-4 fw-bold mb-5 text-dark">Education & Training</h2>
        
        <div className="row g-4">
          {/* Degree Qualification */}
          <div className="col-12">
            <div className="card shadow-sm border-primary border-3">
              <div className="card-header bg-primary text-white">
                <h3 className="card-title h4 mb-0">Degree Qualification</h3>
              </div>
              <div className="card-body p-4">
                <div className="row align-items-center">
                  <div className="col-md-8">
                    <h4 className="fw-bold mb-2">Bachelor's Degree in Data Science</h4>
                    <p className="text-muted mb-1">
                      <strong>Institution:</strong> The Catholic University of Eastern Africa
                    </p>
                    <p className="text-muted mb-0">
                      <strong>Year of Graduation:</strong> October 2025
                    </p>
                  </div>
                  <div className="col-md-4 text-md-end">
                    <span className="badge bg-success fs-6 px-3 py-2">Completed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Completed Diploma Courses */}
          <div className="col-12">
            <div className="card shadow-sm">
              <div className="card-header bg-success text-white">
                <h3 className="card-title h4 mb-0">Completed Diploma Courses</h3>
              </div>
              <div className="card-body p-4">
                <div className="row g-3">
                  <div className="col-md-12">
                    <div className="card h-100 border-success">
                      <div className="card-body">
                        <h5 className="card-title fw-bold">Diploma in Software Development</h5>
                        <p className="card-text text-muted mb-2">
                          <small><strong>Institution:</strong> Institute of Software Technologies</small>
                        </p>
                        <span className="badge bg-success">Completed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enrolled Diploma Courses */}
          <div className="col-12">
            <div className="card shadow-sm">
              <div className="card-header bg-warning text-dark">
                <h3 className="card-title h4 mb-0">Currently Enrolled Diploma Courses</h3>
              </div>
              <div className="card-body p-4">
                <div className="row g-3">
                  <div className="col-md-12">
                    <div className="card h-100 border-warning">
                      <div className="card-body">
                        <h5 className="card-title fw-bold">Diploma in Monitoring and Evaluation</h5>
                        <p className="card-text text-muted mb-2">
                          <small><strong>Institution:</strong> Daystar University</small>
                        </p>
                        <p className="card-text text-muted mb-2">
                          <small><strong>Enrollment Year:</strong> September 2025</small>
                        </p>
                        <p className="card-text text-muted mb-2">
                          <small><strong>Expected Completion:</strong> December 2026</small>
                        </p>
                        <span className="badge bg-warning text-dark">In Progress</span>
                      </div>
                    </div>
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

export default Education;

