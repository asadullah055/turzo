import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProjectDetails = () => {
  const { id } = useParams();
  // console.log(aboutId);
  const [projectDetails, setProjectDetails] = useState([]);

  const [project, setProject] = useState({});

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setProjectDetails(data));
  }, []);

  useEffect(() => {
    const foundProject = projectDetails.find((project) => project.id === id);
    setProject(foundProject);
  }, [projectDetails, id]);
  return (
    <div className="container">
      <div className="heading">
        <h2 className="text-center">Project Details</h2>
      </div>

      <div className="row justify-content-center mt-3">
        <div className="col-md-7">
          <div className="card border-success mb-3">
            <div className="card-header bg-transparent border-success">
              <h3 className="card-title text-center">{project?.title}</h3>
            </div>
            <div className="card-body text-dark">
              <ul>
                {project?.feature &&
                  project?.feature.map((item) => <li>{item}</li>)}
              </ul>
              <p>
                <span className="fw-bold">Technology</span> :{" "}
                {project?.technology}
              </p>
            </div>
            <div className="card-footer bg-transparent border-success">
              <div className="col-md-7 col-12 text-center">
                <div className="d-flex justify-content-between align-items-center">
                  <a
                    className="link2 btn border fw-bold"
                    target="_blank"
                    rel="noreferrer"
                    href={project?.live}
                  >
                    Live
                  </a>
                  <a
                    className="link2 btn border fw-bold"
                    target="_blank"
                    rel="noreferrer"
                    href={project?.frontend}
                  >
                    Frontend Code
                  </a>
                  {project?.backend ? (
                    <a
                      className="link2 btn border fw-bold"
                      target="_blank"
                      rel="noreferrer"
                      href={project?.backend}
                    >
                      Backend Code
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
