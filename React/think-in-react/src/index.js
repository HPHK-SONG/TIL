import React from "react";
import ReactDOM from "react-dom";

import SearchBar from "./components/SearchBar";
import ProductTable from "./components/ProductTable";
import ProductRow from "./components/ProductRow";
import ProductCategoryRow from "./components/ProductCategoryRow";

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
  render() {
    return (
      <>
        <SearchBar />
        <ProductTable data={data} />
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
