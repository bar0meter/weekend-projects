import React from "react";

class SideBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="sideBar-header">
          <div>Repositories</div>
          <div className="spacer" />
          <div className="newRepo-btn">
            <button id="newRepo">New</button>
          </div>
        </div>
        <div className="searchBox-sidebar">
          <input
            type="text"
            placeholder="Find a repository..."
            id="searchBox"
          />
        </div>
        <div className="recentRepos" />
      </React.Fragment>
    );
  }
}

export default SideBar;
