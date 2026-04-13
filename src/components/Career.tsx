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
                <h4>Full Stack Developer</h4>
                <h5>Independent</h5>
              </div>
              <h3>2020–PRESENT</h3>
            </div>
            <p>
              Successfully delivered 50+ projects to 30+ clients globally.
              Specializing in high-performance web applications, AI-powered
              solutions, and seamless digital experiences.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI & Machine Learning</h4>
                <h5>Innovation Phase</h5>
              </div>
              <h3>2024-25</h3>
            </div>
            <p>
              Developed advanced AI tools including visheshdesignai (interior design),
              chatbotspecial (LLM-powered), and integrated intelligent systems
              using OpenAI, LangChain, and Hugging Face.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Enterprise Web Solutions</h4>
                <h5>Growth Phase</h5>
              </div>
              <h3>2023-24</h3>
            </div>
            <p>
              Built comprehensive web applications and corporate platforms for
              various industries, including pharmaceuticals (Ambica, Baker Davis)
              and research organizations (JHC Research).
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend & Performance</h4>
                <h5>Foundation Phase</h5>
              </div>
              <h3>2021-23</h3>
            </div>
            <p>
              Focused on mastering modern frontend architectures (React, Next.js)
              and performance optimization, contributing to open-source and
              building 3D interactive experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
