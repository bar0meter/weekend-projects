import React from 'react';

import './SideBar.css';

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
        <div className="recentRepos">
          <a href="">Repo</a>
          <a href="">Repo</a>
        </div>
      </React.Fragment>
    );
  }
}

export default SideBar;
