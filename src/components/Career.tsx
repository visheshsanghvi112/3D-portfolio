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
                <h4>Software Development Engineer</h4>
                <h5>Ambica Pharma</h5>
              </div>
              <h3>2024-PRESENT</h3>
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
                <h4>Freelance Software Developer</h4>
                <h5>Independent</h5>
              </div>
              <h3>2021-2024</h3>
            </div>
            <p>
              Delivered full-stack web products for clients from requirement
              gathering to deployment, integrating APIs and building secure,
              performant backend logic with Python, JavaScript, Firebase, and SQL.
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
