import React from "react";

class TopBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="brandLogo">
          <a href="">
            <i class="fab fa-github fa-3x" />
          </a>
        </div>
        <div className="searchBox">
          <input
            type="text"
            placeholder="Search or jump to..."
            id="searchBox-header"
          />
        </div>
        <div className="topBarLinks">
          <a href="">Pull Requests</a>
          <a href="">Issues</a>
          <a href="">Marketplace</a>
          <a href="">Explore</a>
        </div>
        <div className="spacer" />
        <div className="dropDowns">
          <div className="dropDown_1">
            <a href="">
              <i class="fas fa-plus" />
              <i class="fas fa-caret-down" />
            </a>
          </div>
          <div className="dropDown_2">
            <a href="">
              <i class="fas fa-user" />
              <i class="fas fa-caret-down" />
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TopBar;
