import React from "react";

const ProductRow = props => {
  if (props.checked && !props.stocked) return null;
  if (!props.name.includes(props.keyword)) return null;
  return (
    <tr>
      <td style={{ color: !props.stocked && "red" }}>{props.name}</td>
      <td>{props.price}</td>
    </tr>
  );
};

export default ProductRow;
