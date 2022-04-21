import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="about-area">
      <div className="row g-3">
        <div className="col-md-6">
          <h3>
            About <span className="title2">Me</span>{" "}
          </h3>
          <div className="text-justify">
            <p className="pe-3">
              My name is Ahanaf Istiak and I'm an Instagram growth and
              management professional with over 3 month of experience working in
              Instagram marketing and managing a lot of client accounts at the
              moment. Being connected in the digital space for this long, I
              managed to become one of the best Instagram marketers out there
              with a proven track record from my clients. I'm not only extremely
              dedicated to my work but I also take the extra mile with all my
              projects, guaranteeing client satisfaction and professionalism.
            </p>
          </div>
          <div className="pt-2">
            {/* <a
              className="btn btn-2"
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1NHCDBCggphOAw94MaVZs59iySE45MhyL/view?usp=sharing"
            >
              Download Resume
            </a> */}
          </div>
        </div>
        <div className="col-md-6">
          <ul className="info-list ps-3">
            <li className="item">
              <span className="title">Age</span>
              <span className="value">25</span>
            </li>
            <li className="item">
              <span className="title">Residence</span>
              <span className="value">Bangladesh</span>
            </li>
            <li className="item">
              <span className="title">Address</span>
              <span className="value">
                Chapai Nawabganj, Rajshahi, Bangladesh
              </span>
            </li>
            <li className="item">
              <span className="title">Email</span>
              <span className="value email">ahanafistiak@gmail.com</span>
            </li>
            <li className="item">
              <span className="title">Hobby</span>
              <span className="value">Marketing</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
