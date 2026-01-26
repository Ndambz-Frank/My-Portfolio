import React from 'react';

const Resume = () => {
  // Path to the resume PDF file - should be placed in the public folder
  const resumePath = '/resume/Francis_Muuo_Ndambuki_Resume.pdf';

  const handleDownload = () => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Francis_Muuo_Ndambuki_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center display-4 fw-bold mb-5 text-dark">Resume</h2>
        
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-lg border-primary border-3">
              <div className="card-body p-5 text-center">
                <div className="mb-4">
                  <span className="text-danger" style={{fontSize: '5rem'}}>📄</span>
                </div>
                <h3 className="card-title h3 fw-bold mb-3">Download My Resume</h3>
                <p className="card-text lead text-muted mb-4">
                  Get a comprehensive overview of my professional background, skills, and experience
                  in a clean, updated PDF format.
                </p>
                
                <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
                  <button 
                    className="btn btn-primary btn-lg px-5 py-3"
                    onClick={handleDownload}
                  >
                    ⬇️ Download Resume (PDF)
                  </button>
                  <a 
                    href={resumePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-lg px-5 py-3"
                  >
                    👁️ View in Browser
                  </a>
                </div>

                <div className="mt-4 pt-4 border-top">
                  <p className="text-muted mb-2">
                    <small>
                      📅 Last Updated: 2026-01-18
                    </small>
                  </p>
                  <p className="text-muted mb-0">
                    <small>
                      File Format: PDF | Size: 67 KB
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

