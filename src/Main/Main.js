import React from "react";
import RecentActivityFollowers from "./RecentActivity/RecentActivity";

import "./Main.css";

const Main = props => {
  return (
    <React.Fragment>
      <div className="followerActivity">
        <RecentActivityFollowers />
      </div>
      <div className="followerActivity">
        <RecentActivityFollowers />
      </div>
    </React.Fragment>
  );
};

export default Main;
