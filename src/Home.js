import React from "react";

import TopBar from "./TopBar";
import "./Home.css";
import SideBar from "./SideBar";

class Home extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="topNavBar">
          <TopBar />
        </div>
        <div className="sideBar">
          <SideBar />
        </div>
        <div className="main" />
      </div>
    );
  }
}

export default Home;
