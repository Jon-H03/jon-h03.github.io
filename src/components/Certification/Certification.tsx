import React from "react";
import "./Certification.css";

const Certification: React.FC = () => {
  return (
    <>
      <h2>Certifications</h2>
      <ul>
        <li>
          <div className="degree">
            <h3>Amazon Web Services Developer - Associate</h3>
            <span className="date">January 2025</span>
          </div>
        </li>
        <li>
          <div className="degree">
            <h3>Amazon Web Services Solutions Architect - Associate</h3>
            <span className="date">October 2024</span>
          </div>
        </li>
        <li>
          <div className="degree">
            <h3>Amazon Web Services Cloud Practitioner</h3>
            <span className="date">July 2024</span>
          </div>
        </li>
      </ul>
    </>
  );
};

export default Certification;