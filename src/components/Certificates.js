import React from 'react';

const Certificates = () => {
  return (
    <section id="certificates" className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center display-4 fw-bold mb-5 text-dark">Professional Certificates</h2>
        
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-sm border-warning border-3">
              <div className="card-header bg-warning text-dark">
                <h3 className="card-title h4 mb-0">Cisco Certified Network Associate (CCNA 1)</h3>
              </div>
              <div className="card-body p-4">
                <div className="row align-items-center mb-3">
                  <div className="col-md-8">
                    <h5 className="fw-bold mb-2">CCNA: Introduction to Networks</h5>
                    <p className="text-muted mb-1">
                      <strong>Issuing Organization:</strong> Cisco Systems, Inc.
                    </p>
                    <p className="text-muted mb-1">
                      <strong>Issue Date:</strong> [Date]
                    </p>
                    <p className="text-muted mb-1">
                      <strong>Credential ID:</strong> [Credential ID if available]
                    </p>
                    <p className="text-muted mb-0">
                      <strong>Verification:</strong> 
                      <a href="https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html" 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         className="ms-2">
                        Verify Certification
                      </a>
                    </p>
                  </div>
                  <div className="col-md-4 text-center">
                    <div className="bg-light p-4 rounded">
                      <span className="text-warning" style={{fontSize: '4rem'}}>🏆</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-3 border-top">
                  <h6 className="fw-bold mb-2">Skills & Knowledge Acquired:</h6>
                  <div className="d-flex flex-wrap gap-2">
                    <span className="badge bg-secondary">Network Fundamentals</span>
                    <span className="badge bg-secondary">IP Addressing</span>
                    <span className="badge bg-secondary">Subnetting</span>
                    <span className="badge bg-secondary">Routing & Switching</span>
                    <span className="badge bg-secondary">Network Security</span>
                    <span className="badge bg-secondary">Cisco IOS</span>
                    <span className="badge bg-secondary">Troubleshooting</span>
                  </div>
                </div>

                <div className="mt-3">
                  <p className="mb-0">
                    <small className="text-muted">
                      This certification demonstrates foundational knowledge in networking concepts,
                      IP addressing, subnetting, and basic router and switch configuration.
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Placeholder for additional certificates */}
        <div className="row justify-content-center mt-4">
          <div className="col-md-8">
            <div className="alert alert-info" role="alert">
              <strong>ℹ️</strong> Additional professional certificates will be displayed here as they are obtained.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;

