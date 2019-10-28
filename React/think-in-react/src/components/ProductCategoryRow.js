import React from "react";

const ProductCategoryRow = props => {
  return (
    <tr>
      <th colSpan="2">{props.category}</th>
    </tr>
  );
};

export default ProductCategoryRow;
