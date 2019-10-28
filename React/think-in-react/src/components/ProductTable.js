import React from "react";
import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";

const ProductTable = props => {
  let category = "";
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map(product => {
          if (product.category !== category) {
            category = product.category;
            return (
              <>
                <ProductCategoryRow category={product.category} />
                <ProductRow name={product.name} price={product.price} />
              </>
            );
          }
          return <ProductRow name={product.name} price={product.price} />;
        })}
      </tbody>
    </table>
  );
};

export default ProductTable;
