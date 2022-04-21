import React from "react";
// import { Link } from "react-router-dom";
import pic from "../../../image/ahanaf.jpg";
import "./Header.css";
const Header = () => {
  return (
    <div className="page-header">
      <div className="header-info padding">
        <div className="row g-3 justify-content-center align-items-center">
          <div className="col-md-3 col-12 text-center">
            <img className="img-fluid image" src={pic} alt="" />
          </div>
          <div className="col-md-9 mt-5 col-12 text-center">
            <h1 className="home-title mt-5 text-center">Ahanaf Istiak</h1>
            <h2 className="sub-title mb-2">Digital Marketer</h2>
            <div className="icon pt-3">
              <a
                className="icon-link"
                href="https://www.linkedin.com/in/asadullah-ahmed-462923216/"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                className="icon-link"
                href="https://www.facebook.com/ahanaf.turzo/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                className="icon-link"
                href="https://www.facebook.com/ahanaf.turzo/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
