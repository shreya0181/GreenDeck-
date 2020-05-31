import React, { Component } from "react";
import "./home.css";
import SideBar from "../SideBar/SideBar";
import Content from "../Content/Content";
const Home = () => {
  return (
    <div className="homeContainer">
      <div className="sideBar">
        <SideBar />
      </div>
      <div className="contentBar">
        <Content />
      </div>
    </div>
  );
};
export default Home;
