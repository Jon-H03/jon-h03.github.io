import React from "react";
import "./Project.css";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "SiteSighter",
      category: "Full-Stack Web Application",
      about:
        "SiteSighter is a web application designed to provide AI-driven camping recommendations based on weather, location, and other factors. It integrates with APIs like OpenAI for generating personalized recommendations and external camping data sources to deliver a seamless experience for outdoor enthusiasts. The application features an interactive and responsive UI built with React and Tailwind CSS, allowing users to search for campsites by city and radius while providing AI-powered insights about weather conditions and campsite suitability.",
      github_link: "https://github.com/Jon-H03/SiteSighter",
      technologies:
        "React, JavaScript/TypeScript, Tailwind CSS, Flask, OpenAI GPT, AWS EC2, External APIs",
    },
    {
      title: "Strava Stats For Runners",
      category: "Full-Stack Web Application",
      about:
        "An interactive web application that enriches the running experience by providing in-depth analysis of users' Strava activities. At its core, it features a REST API backend built with Flask, which securely interacts with Strava's OAuth, fetches activity data, aggregates statistics, and generates visual plots. The frontend is crafted using React.js for a responsive user interface, all hosted on AWS with S3 for content delivery and Elastic Beanstalk for server-side operations.",
      github_link: "https://github.com/Jon-H03/StravaStats",
      technologies:
        "Python, React, Flask, AWS S3, AWS Elastic Beanstalk, HTML, CSS",
    },
    {
      title: "Teacher's Pet",
      category: "Discord Bot",
      about:
        "Teacher's Pet is a Discord bot designed to streamline classroom interactions in a server environment. As a second-place winner in the OSU Fall 2023 Beaverhacks education-themed hackathon, this bot brings order and functionality to digital learning spaces. It offers a range of classroom management tools such as role assignments, attendance tracking, and interactive Q&A sessions, all operated through intuitive Discord commands. Developed in Python and interfacing seamlessly with the Discord API, it leverages the reliability of Google Cloud Platform for hosting, ensuring availability and responsiveness for educational communities.",
      github_link: "https://github.com/Jon-H03/TeachersPet",
      technologies: "Python, Discord API, Google Cloud Platform",
    },
    {
        title: "Haiku Bot",
        category: "Command Line Application",
        about: "HaikuBot is a simple yet elegant command-line application that generates haikus based on user input or randomly. Users can either enter a topic to receive a custom-generated haiku related to their interest, or choose to get a random haiku from a pre-written collection. The application leverages OpenAI's capabilities to create unique, topic-based Japanese-style poems while maintaining the traditional 5-7-5 syllable structure, offering a creative and interactive experience for poetry enthusiasts.",
        github_link: "https://github.com/Jon-H03/HaikuBot",
        technologies: "Python, OpenAI API"
    },
    {
      title: "Music Genre Classification Model",
      category: "Machine Learning Model",
      about:
        "A specialized machine learning project aimed at the multi-class classification of music tracks and the genres associated with. It starts with a subset of the extensive Million Song Dataset and utilizes last.FM's API to compensate for missing information. The project emphasizes rigorous data preprocessing to cleanse and structure the dataset, ensuring a robust foundation for the development of a nuanced PyTorch-based model. This model is architected to distinguish among various music genres, reflecting an intricate understanding of both the complexities of machine learning and the data that goes into it.",
      github_link: "https://github.com/Jon-H03/Genre-Classification-w-ML",
      technologies: "Python, PyTorch, Pandas, scikit-learn",
    },
    {
      title: "Groovy - Music Database",
      category: "Full-Stack Web Application",
      about:
        "A dynamic full-stack web application dedicated to music lovers. It serves as a comprehensive platform for cataloging and exploring favorite musical entities, including songs, albums, artists, and genres. With functionalities to log intricate details of songs and albums, maintain artist profiles, and compile discographies, Groovy provides an immersive and interactive experience for users to manage and celebrate their music collection.",
      github_link: "https://github.com/Jon-H03/GroovyDB",
      technologies: "JavaScript, Node.js, Express.js, MySQL, HTML, CSS",
    },
  ];

  return (
    <div id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-header">
              <h3>{project.title}</h3>
              <span className="project-category">{project.category}</span>
            </div>
            <p className="project-description">{project.about}</p>
            <div className="project-footer">
              <div className="project-technologies">
                <h4>Technologies:</h4>
                <p>{project.technologies}</p>
              </div>
              <a
                href={project.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
