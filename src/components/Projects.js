import React from "react";
import "./Projects.css";

const ProjectCard = ({ image, title, description, link}) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="view-project-btn">View Project</a>

    </div>
  );
};

const Projects = () => {
  const projectData = [
    {
      image: "/assets/Calculator.png",
      title: "Calculator",
      description: "A web-based calculator resembling Iphone's calculator. It is built using HTML,CSS, and JS.",
      link: "https://github.com/leandrosatyawira/Calculator-with-HTML-CSS-JS",
    },
    {
      image: "/assets/JCC.png",
      title: "JCC Website",
      description: "A simple responsive website built with HTML & CSS",
      link: "https://github.com/leandrosatyawira/JCC-Simple-Responsive-Website",
    },
    {
      image: "/assets/QR.png",
      title: "QR Code Generator",
      description: "A Phyton based Application to generate QR code from links inputted",
      link: "https://github.com/leandrosatyawira/Python-QR-Code-Generator",
    },
    {
      image: "/assets/TicTacToe.png",
      title: "Tic Tac Toe",
      description: "A Web Based Classic Game of Tic Tac Toe, built with React",
      link: "https://github.com/leandrosatyawira/TicTacToe",
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-heading">PROJECTS</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
