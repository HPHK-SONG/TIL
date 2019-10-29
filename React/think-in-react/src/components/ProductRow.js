import React from "react";

const ProductRow = props => {
  const loweredName = props.name.toLowerCase();
  const loweredKeyword = props.keyword.toLowerCase();
  if (props.checked && !props.stocked) return null;
  if (!loweredName.includes(loweredKeyword)) return null;
  return (
    <tr>
      <td style={{ color: !props.stocked && "red" }}>{props.name}</td>
      <td>{props.price}</td>
    </tr>
  );
};

export default ProductRow;
