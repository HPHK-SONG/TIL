import React from "react";
import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";

const ProductTable = props => {
  let prevCategory = "";
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map(({ category, price, stocked, name }) => {
          if (category !== prevCategory) {
            prevCategory = category;
            return (
              <>
                <ProductCategoryRow category={category} />
                <ProductRow
                  name={name}
                  price={price}
                  stocked={stocked}
                  keyword={props.keyword}
                  checked={props.checked}
                />
              </>
            );
          }
          return (
            <ProductRow
              name={name}
              price={price}
              stocked={stocked}
              keyword={keyword}
              checked={checked}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default ProductTable;
