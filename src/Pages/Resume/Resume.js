import React from "react";
import "./Resume.css";
const Resume = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="heading">
          <h2 className="text-center">Resume</h2>
        </div>
      </div>
      <div className="row bg-white">
        <div className="col-md-6 ">
          <div className="padding">
            <h4 className="fw-bold pb-4">Education</h4>
            <div className="timeline">
              <div className="timeline-item">
                <h4 className="item-title">Secondary School Certificate</h4>
                <span className="item-period">2013-2014</span>
                <p className="item-description">
                  <strong>Institute:</strong> <span>Bohipara High School </span>
                </p>
              </div>

              <div className="timeline-item">
                <h4 className="item-title">
                  Higher Secondary School Certificate
                </h4>
                <span className="item-period">2015-2016</span>
                <p className="item-description">
                  <strong>Institute:</strong>
                  <span> Rohanpur Yusuf Ali College </span>
                </p>
              </div>

              <div className="timeline-item">
                <h4 className="item-title">Honors (Accounting)</h4>
                <span className="item-period">2018- Running</span>
                <p className="item-description">
                  <strong>Institute:</strong>
                  <span> Rajshahi Court College</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 ">
          <div className="padding">
            <h4 className="fw-bold pb-4">Courses</h4>
            <div className="timeline">
              <div className="timeline-item">
                <h4 className="item-title">Digital Marketing</h4>
                <span className="item-period">2022</span>
                <p className="item-description">
                  <strong>Institute:</strong> <span>Sabbir Academy </span>
                </p>
              </div>

              <div className="timeline-item">
                <h4 className="item-title">Instagram Marketing</h4>
                <span className="item-period">2021</span>
                <p className="item-description">
                  <strong>Institute:</strong>
                  <span> Sabbir Academy </span>
                </p>
              </div>

              <div className="timeline-item">
                <h4 className="item-title">Facebook Marketing</h4>
                <span className="item-period">2021</span>
                <p className="item-description">
                  <strong>Institute:</strong>
                  <span> Youtube and Other Resources</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <h2 className="text-center">
            My <span className="title2">Skills</span>{" "}
          </h2>
          <div className="col-md-6 padding pt-0">
            <div className="skills-info">
              <h4 className="text-uppercase">Photoshop</h4>
              <div className="skill-container">
                <div className="skill-percentage skill-1"></div>
              </div>

              <h4 className="text-uppercase">Marketing</h4>
              <div className="skill-container">
                <div className="skill-percentage skill-2"></div>
              </div>

              <h4 className="text-uppercase">Ms Office</h4>
              <div className="skill-container">
                <div className="skill-percentage skill-3"></div>
              </div>
            </div>
          </div>
          {/* <div className="col-md-6 padding pt-0">
            <div className="skills-info">
              <h4 className="text-uppercase">React</h4>
              <div className="skill-container">
                <div className="skill-percentage skill-4"></div>
              </div>

              <h4 className="text-uppercase">Bootstrap</h4>
              <div className="skill-container">
                <div className="skill-percentage skill-5"></div>
              </div>

              <h4 className="text-uppercase">MongoDB</h4>
              <div className="skill-container">
                <div className="skill-percentage skill-6"></div>
              </div>
            </div>
          </div> */}
          <div className="text-center pb-5">
            {/* <div className="pt-2">
              <a
                className="btn btn-2"
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/file/d/1NHCDBCggphOAw94MaVZs59iySE45MhyL/view?usp=sharing"
              >
                Download Resume
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
