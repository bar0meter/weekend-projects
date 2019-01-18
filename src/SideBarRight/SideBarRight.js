import React from "react";

import "./SideBarRight.css";

const SideBarRight = props => {
  return (
    <React.Fragment>
      <div className="recommendedRepos">
        <div className="repo">
          <div className="repoName">palantir/blueprint</div>
          <div className="repoDescription">
            A React-based UI toolkit for the web
          </div>
          <div className="repoStats">
            <div className="repoLanguage">
              <div className="colorLanguage" />
              <div className="language">TypeScript</div>
            </div>
            <div className="repoStars">13k</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SideBarRight;
