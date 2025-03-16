import React from "react";
import "./Education.css";

const Education: React.FC = () => {
  return (
    <>
      <h2>Education</h2>
      <ul>
        <li>
          <div className="degree">
            <h3>Bachelor of Science in Computer Science</h3>
            <span className="date">January 2023 - December 2024</span>
          </div>
          <h4>Oregon State University</h4>
          <p>GPA: 3.8</p>
          <p>
            Relevant Coursework: Analysis of Algorithms, Data Structures, Operating Systems,
            Computer Architecture and Assembly Language, Databases, Intro to Computer
            Networking, Software Engineering I & II, Programming Language
            Fundamentals, Web Development, Vertically Integrated Projects, Intro to
            Computer Science I & II
          </p>
        </li>
        <li>
          <div className="degree">
            <h3>Bachelor of Arts in Business Management Economics</h3>
            <span className="date">September 2018 - August 2020</span>
          </div>
          <h4>University of California, Santa Cruz</h4>
        </li>
      </ul>
    </>
  );
};

export default Education;
