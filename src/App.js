import React, { Component } from "react";
import AutoComplete from "./components/AutoComplete";

import logo from "./images/google.png";
import "./App.css";

class App extends Component {
  goWikiSearch = () => {
    console.log("here");
  };

  randomSearch = () => {
    console.log("here");
  };

  render() {
    return (
      <div className="App">
        <img className="logo" src={logo} />
        <div className="imgDiv">
          <AutoComplete />
          {/* <input className="search" placeholder="Search" required /> */}
        </div>
      </div>
    );
  }
}

export default App;
