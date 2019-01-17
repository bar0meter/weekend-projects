import React from "react";

const RecentActivityFollowers = props => {
  return (
    <div className="activityFollower">
      <div className="activityDetails">Details</div>
      <div className="activityRepo">
        <div className="repoHeader">
          <div className="repoName">
            <strong>frost060/weekend-projects</strong>
          </div>
          <div className="spacer" />
          <div className="repoStar">
            <button id="repoStar-btn">Star</button>
          </div>
        </div>
        <div className="repoDescription">
          Small simple projects done over the weekens
        </div>
        <div className="repoDetails" />
      </div>
    </div>
  );
};

export default RecentActivityFollowers;
