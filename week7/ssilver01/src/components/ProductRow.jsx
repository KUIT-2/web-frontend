import React from "react";

const ProductRow = ({ product }) => {
  return (
    <div>
      <span style={{ color: product.stocked ? "black" : "red", marginRight: "20px" }}>
        {product.name}
      </span>
      <span>{product.price}</span>
    </div>
  );
};

export default ProductRow;
