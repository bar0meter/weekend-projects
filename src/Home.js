import React from "react";

import TopBar from "./Topbar/TopBar";
import "./Home.css";
import SideBar from "./SideBar/SideBar";
import Main from "./Main/Main";
import SideBarRight from "./SideBarRight/SideBarRight";

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
        <div className="main">
          <Main />
        </div>
      </div>
    );
  }
}

export default Home;
