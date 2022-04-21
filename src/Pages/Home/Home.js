import React from "react";
import About from "./About/About";
import Header from "./Header/Header";

const Home = () => {
  return (
    <div className="container">
      <div className="page-header">
        <Header></Header>
        <About></About>
      </div>
    </div>
  );
};

export default Home;
