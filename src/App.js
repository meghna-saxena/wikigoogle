import React, { Component } from "react";
import logo from "./images/google.png";
import "./App.css";

class App extends Component {
  goWikiSearch = () => {
    console.log('here')
  }

  randomSearch = () => {
    console.log('here')
  }

  render() {
    return (
      <div className="App">
        <img className="logo" src={logo} />
        <div className="imgDiv">
          <input className="search" placeholder="Search" required />
        </div>
        <div>
          <button onClick={this.goWikiSearch}>Gowiki Search</button>
          <button onClick={this.randomSearch}>I'm Feeling Bored</button>
        </div>
      </div>
    );
  }
}

export default App;
