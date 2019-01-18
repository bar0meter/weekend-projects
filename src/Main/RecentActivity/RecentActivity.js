import React from "react";

import "./RecentActivity.css";

const RecentActivityFollowers = props => {
  return (
    <div className="activityFollower">
      <div className="profilePic">
        <img
          src="https://avatars1.githubusercontent.com/u/4060187?s=64&v=4"
          alt=""
          class="profileImage"
        />
      </div>
      <div className="activityDiv">
        <div className="activityDetails">
          <div className="activity">
            jaredpalmer starred necolas/react-native-web
          </div>
          <div className="timeElapsed">17 hours ago</div>
        </div>
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
          <div className="repoDetails">
            <div className="repoLanguage">
              <div className="color" />
              <div className="language">Javascript</div>
            </div>
            <div className="properSpacing">
              <div className="starIcon" />
              <div className="starNo">61</div>
            </div>
            <div className="properSpacing">1 issue needs help</div>
            <div className="properSpacing">Updated Jan 17</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivityFollowers;
