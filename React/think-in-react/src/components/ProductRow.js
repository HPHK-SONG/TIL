import React from "react";

const ProductRow = ({ name, keyword, stocked, price, checked }) => {
  const loweredName = name.toLowerCase();
  const loweredKeyword = keyword.toLowerCase();
  if (checked && !stocked) return null;
  if (!loweredName.includes(loweredKeyword)) return null;
  return (
    <tr>
      <td style={{ color: !stocked && "red" }}>{name}</td>
      <td>{price}</td>
    </tr>
  );
};

export default ProductRow;
