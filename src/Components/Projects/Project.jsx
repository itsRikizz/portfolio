import React from "react";
import "./Card.css";
import ProjectCard from "./Card/ProjectCard";

const Project = () => {
  return (
    <div className="Projects">
      <h1>These are some of my projects</h1>
      <div className="cards">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Project;
