import React from "react";

const Hamburger = props => {
  return (
    <React.Fragment>
      <button className="hamburgerButton">
        <div className="buttonLine" />
        <div className="buttonLine" />
        <div className="buttonLine" />
      </button>
    </React.Fragment>
  );
};

export default Hamburger;
