import React, { Component } from "react";
import DisplayWeather from "./Weather";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <DisplayWeather />
      </div>
    );
  }
}

export default App;
