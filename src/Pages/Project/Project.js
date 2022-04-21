import React, { useEffect, useState } from "react";
import Projects from "./Projects/Projects";

const Project = () => {
  const [project, setProject] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, []);
  return (
    <div className="container pb-5">
      <div className="row">
        <div className="heading">
          <h2 className="text-center">Project</h2>
        </div>
      </div>
      <div className="row">
        <h1 className="text-center mt-5">
          Project <span className="title2">Coming</span> soon
        </h1>
      </div>
      {/* <div className="row mt-3 row-cols-1 row-cols-md-2 g-4 bg-white">
        {project.map((project) => (
          <Projects key={project.id} project={project}></Projects>
        ))}
      </div> */}
    </div>
  );
};

export default Project;
