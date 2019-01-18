import React from "react";
import RecentActivityFollowers from "./RecentActivity/RecentActivity";
import SideBarRight from "../SideBarRight/SideBarRight";
import "./Main.css";

const Main = props => {
  return (
    <React.Fragment>
      <div className="mainContent">
        <div className="followerActivity">
          <RecentActivityFollowers />
        </div>
        <div className="followerActivity">
          <RecentActivityFollowers />
        </div>
      </div>
      <div className="sideBarRight">
        <div className="heading">Discover Repositores</div>
        <SideBarRight />
        <SideBarRight />
      </div>
    </React.Fragment>
  );
};

export default Main;
