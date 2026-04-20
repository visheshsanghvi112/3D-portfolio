import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm Vishesh Sunil Sanghvi, a software engineer with 2+ years of
          experience building scalable backend systems and full-stack products.
          I specialize in Python, FastAPI, and microservices, with hands-on
          experience designing cloud-native applications on Azure and GCP,
          shipping CI/CD-driven releases with Docker, and integrating AI
          workflows using LLMs. I enjoy translating business goals into secure,
          reliable, and high-performance systems that are easy to maintain.
        </p>
      </div>
    </div>
  );
};

export default About;
