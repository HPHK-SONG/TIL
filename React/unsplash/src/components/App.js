import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import unsplash from "../api/unsplash";

export default class App extends Component {
  state = {
    keyword: "",
    images: []
  };

  handleKeyword = word => {
    this.setState({ keyword: word });
  };

  onSubmit = async () => {
    const response = await unsplash.get("search/photos", {
      params: { query: this.state.keyword }
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar
          handleKeyword={this.handleKeyword}
          onSubmit={this.onSubmit}
        />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
