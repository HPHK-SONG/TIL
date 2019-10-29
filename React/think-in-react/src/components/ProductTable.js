import React from "react";
import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";

const ProductTable = props => {
  if (props.data === null) return <h2>로딩중입니다...</h2>;
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
              keyword={props.keyword}
              checked={props.checked}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default ProductTable;
