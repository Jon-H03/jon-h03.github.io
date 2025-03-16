import React from "react";
import "./Experience.css";

const Experience: React.FC = () => {
  return (
    <div id="experience">
      <h2>Experience</h2>

      <div className="experience-item">
        <div className="title-date-container">
          <h3>Business Technology Intern, Cloud Infrastructure</h3>
          <span className="date">June 2024 - August 2024</span>
        </div>
        <h4>Discover Financial Services</h4>
        <ul>
          <li>
            Developed an automated image pipeline using EC2 Image Builder to
            create and distribute golden AMIs across organizational AWS
            accounts, reducing deployment time and ensuring consistent security
            standards.
          </li>
          <li>
            Implemented a robust tagging strategy for AWS infrastructure,
            significantly enhancing resource management and improving
            observability across the cloud environment.
          </li>
          <li>
            Streamlined infrastructure deployment by utilizing Jenkins pipelines
            to automate the deployment of Terraform code, boosting efficiency
            and reducing manual intervention.
          </li>
        </ul>
      </div>

      <div className="experience-item">
        <div className="title-date-container">
          <h3>Software Developer</h3>
          <span className="date">September 2023 - June 2024</span>
        </div>
        <h4>Rugged Thread</h4>
        <ul>
          <li>
            Enhanced and maintained the functionality of a large-scale Ruby on
            Rails web application, Stitch.
          </li>
          <li>
            Performed bug fixes and implemented new features, improving overall
            performance and user experience.
          </li>
          <li>
            Utilized git/GitHub best practices and CI/CD pipelines for efficient
            version control and deployment.
          </li>
        </ul>
      </div>

      <div className="experience-item">
        <div className="title-date-container">
          <h3>Software Engineer Intern, Operations Engineering</h3>
          <span className="date">Jan 2024 - April 2024</span>
        </div>
        <h4>SiriusXM</h4>
        <ul>
          <li>
            Designed and implemented a robust full-stack TypeScript/Node.js web
            application prototype that optimized the processes of account
            creation, updates, and data retrieval, ultimately allowing teams
            greater ease of use in testing, creation, and management.
          </li>
          <li>
            Spearheaded the adaptation and enhancement of the prototype's
            backend into a production-ready API, incorporating extensive
            error-handling and type safety mechanisms leveraging TypeScript.
            This resulted in improved application scalability, reliability, and
            performance through seamless frontend-backend integration.
          </li>
          <li>
            Engineered a data consolidation tool that automates the extraction
            and aggregation of account details from emails via API, streamlining
            account management and enhancing data accuracy for strategic
            analysis and tracking.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
