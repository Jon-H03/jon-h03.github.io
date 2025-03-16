import React from "react";
import "./Skills.css";

const Skills: React.FC = () => {
  return (
    <>
      <h2>Skills</h2>

      <h3>Languages</h3>
      <ul className="skills-list">
        <li>Python</li>
        <li>Ruby</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>HTML/CSS</li>
        <li>x86 Assembly</li>
        <li>C</li>
      </ul>

      <h3>Frameworks</h3>
      <ul className="skills-list">
        <li>React</li>
        <li>Ruby on Rails</li>
        <li>Django</li>
        <li>Flask</li>
        <li>Node.js</li>
        <li>Express.js</li>
      </ul>

      <h3>Databases</h3>
      <ul className="skills-list">
        <li>PostgreSQL</li>
        <li>mySQL</li>
        <li>MongoDB</li>
        <li>SQLite</li>
      </ul>

      <h3>Cloud Providers</h3>
      <ul className="skills-list">
        <li>AWS</li>
        <li>GCP</li>
        <li>Azure</li>
      </ul>

      <h3>Developer Tools & Technologies</h3>
      <ul className="skills-list">
        <li>Git</li>
        <li>Postman</li>
        <li>Linux</li>
        <li>Docker</li>
        <li>Kubernetes</li>
        <li>VS Code</li>
        <li>Visual Studio</li>
        <li>PyCharm</li>
        <li>Terraform</li>
        <li>Jenkins</li>
      </ul>

      <h3>Data Analysis Libraries</h3>
      <ul className="skills-list">
        <li>pandas</li>
        <li>NumPy</li>
        <li>Matplotlib</li>
        <li>scikit-learn</li>
      </ul>
    </>
  );
};

export default Skills