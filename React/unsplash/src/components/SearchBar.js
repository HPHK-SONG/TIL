import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    return (
      <div className="ui segment container">
        <form className="ui form">
          <label htmlFor="keyword">Search in Eng!</label>
          <input type="text" id="keyword" />
        </form>
      </div>
    );
  }
}
