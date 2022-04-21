import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="container sticky-top bg-light">
      <Navbar collapseOnSelect className="p-3 rounded" expand="lg">
        <Link className="navbar-brand me-auto name color-gray" to="/home">
          Ahanaf <span className="title-color">Istiak</span>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Link
            className="nav-link link nav-item2"
            aria-current="page"
            to="/home"
          >
            Home
          </Link>
          <Link
            className="nav-link link nav-item2"
            aria-current="page"
            to="/resume"
          >
            Resume
          </Link>
          <Link
            className="nav-link link nav-item2"
            aria-current="page"
            to="/project"
          >
            Project
          </Link>
          <Link
            className="nav-link link nav-item2"
            aria-current="page"
            to="/contact"
          >
            Contact
          </Link>
          <Link
            className="nav-link link nav-item2"
            aria-current="page"
            to="/blog"
          >
            Blog
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
