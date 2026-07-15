import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Young Professional (Software Engineer)</h4>
                <h5>SEBI</h5>
              </div>
              <h3>JUL 2026-PRESENT</h3>
            </div>
            <p>
              Working on professional assignments and projects while supporting
              structured, outcome-focused initiatives as a Young Professional
              and Software Engineer.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Development Engineer</h4>
                <h5>Ambica Pharma</h5>
              </div>
              <h3>2024-JUL 2026</h3>
            </div>
            <p>
              Building scalable Python and FastAPI microservices, production ETL
              pipelines, and cloud-native systems on Azure and GCP with Docker,
              CI/CD automation, and high-availability monitoring.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend & Cloud Engineering</h4>
                <h5>Production Systems Focus</h5>
              </div>
              <h3>CORE EXPERTISE</h3>
            </div>
            <p>
              Focused on backend architecture, REST APIs, cloud deployment,
              observability, and automation using Python, FastAPI, Docker,
              Azure, GCP, SQL, MongoDB, and modern CI/CD workflows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
