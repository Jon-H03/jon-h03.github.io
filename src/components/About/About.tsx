// About.tsx
import React from "react";
import "./About.css";
import profileImage from "../../assets/StandardPFP_FloralBG.png"; 


const About: React.FC = () => {
    return (
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="profile-section">
            <img src={profileImage} alt="Jonathan Hirsch" className="profile-image" />
          </div>
          <div className="content-section">
            <h1>Jonathan Hirsch</h1>
            <h3>Computer Science Student</h3>
            <p>
              I'm an aspiring software engineer who loves to explore new ideas and
              solve interesting problems.
            </p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/jonathan-hirsch3/" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/Jon-H03" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="mailto:jonathan.hirsch2011@gmail.com" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default About;