import React from "react";

const ProductRow = ({ product }) => {
  return (
    <div>
      <div style={{ color: product.stocked ? "black" : "red" }}>
        {product.name}
      </div>
      <div>{product.price}</div>
    </div>
  );
};

export default ProductRow;
