import React from "react";
import ReactDOM from "react-dom";

import SearchBar from "./components/SearchBar";
import ProductTable from "./components/ProductTable";

const data = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football"
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball"
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball"
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch"
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5"
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

class App extends React.Component {
  state = {
    keyword: "",
    checked: false
  };
  handleKeywordChange = keyword => {
    this.setState({ keyword });
  };
  handleChecked = () => {
    this.setState({ checked: !this.state.checked });
  };
  render() {
    return (
      <>
        <SearchBar
          handleKeywordChange={this.handleKeywordChange}
          handleChecked={this.handleChecked}
        />
        <ProductTable
          data={data}
          keyword={this.state.keyword}
          checked={this.state.checked}
        />
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
