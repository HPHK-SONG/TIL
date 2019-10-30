import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import unsplash from "../api/unsplash";

export default class App extends Component {
  state = {
    keyword: "",
    images: [],
    page: 1,
    number: 0
  };

  handlePage = e => {
    if (e) this.setState({ page: this.state.page + 1 });
    else this.setState({ page: this.state.page - 1 });
  };

  handleKeyword = word => {
    this.setState({ keyword: word });
  };

  onSubmit = async () => {
    const response = await unsplash.get("search/photos", {
      params: { query: this.state.keyword, page: this.state.page, per_page: 5 }
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container">
        <button
          className="ui button"
          onClick={async () => {
            console.log(this.state.number);
            await this.setState({ number: this.state.number + 1 });
            console.log(this.state.number);
          }}
        >
          스테이트변경!
        </button>
        <SearchBar
          handleKeyword={this.handleKeyword}
          onSubmit={this.onSubmit}
        />
        <div style={{ display: "flex", justifyContent: "center" }}>
          {/* 삼항연산자 condition ? 참일때 : 거짓일때
          if(condition) 참일때;
          else 거짓일때 */}
          {this.state.page === 1 ? null : (
            <button
              className="ui button"
              onClick={async () => {
                await this.handlePage(false);
                this.onSubmit();
              }}
            >
              이전페이지
            </button>
          )}
          <ImageList images={this.state.images} />
          {this.state.images.length === 0 ? null : (
            <button
              className="ui button"
              onClick={async () => {
                await this.handlePage(true);
                this.onSubmit();
              }}
            >
              다음페이지
            </button>
          )}
        </div>
      </div>
    );
  }
}
