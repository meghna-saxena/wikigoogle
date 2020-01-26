import React, { Component } from "react";
import * as _ from "lodash";

import "../App.css";

const DEBOUNCE_DELAY = 500;
const ITEMS_API_URL = "https://jsonplaceholder.typicode.com/users";

export class Autocomplete extends Component {
  state = {
    suggestions: [],
    activeSuggestion: 0,
    filteredSuggestions: [],
    showSuggestions: false,
    userInput: ""
  };

  onChange = async e => {
    const userInput = e.currentTarget.value;

    let response = await fetch(`${ITEMS_API_URL}?q=${userInput}`);
    let data = await response.json();

    this.setState({ suggestions: data, userInput: userInput });

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: this.getFilteredSuggestions(userInput),
      showSuggestions: true,
      userInput: userInput
    });
  };

  getFilteredSuggestions(userInput) {
    const { suggestions } = this.state;

    const list = suggestions.filter(suggestion => {
      const { username } = suggestion;

      return username.toLowerCase().indexOf(userInput.toLowerCase()) > -1;
    });

    return list;
  }

  onClick = e => {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput
      }
    } = this;

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul
            class="suggestions"
            style={{
              listStyleType: "none",
              marginLeft: "30%"
            }}
          >
            {filteredSuggestions.map((suggestion, index) => {
              return (
                <li
                  key={suggestion}
                  onClick={onClick}
                  style={{
                    listStylePosition: "inside",
                    border: "1px solid #c3c3c3",
                    width: "580px",
                    padding: "10px"
                  }}
                >
                  {suggestion.username}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div class="no-suggestions" style={{ marginTop: "20px" }}>
            <em>No suggestions!</em>
          </div>
        );
      }
    }

    return (
      <React.Fragment>
        <input
          className="search"
          placeholder="Search"
          type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
        />
        {this.state.suggestions.length > 1 ? (
          suggestionsListComponent
        ) : (
          <div>
            <button onClick={this.goWikiSearch}>Google Search</button>
            <button onClick={this.randomSearch}>I'm Feeling Lucky</button>
          </div>
        )}
      </React.Fragment>
    );
  }
}
export default Autocomplete;
