import React from "react";
import { useState } from 'react';

const ProductRow = ({ product, deleteProduct }) => {

  const handleDeleteProduct = () => {
    deleteProduct(product.name);
  };

  return (
    <tr>
      <td style={{ color: product.stocked ? "black" : "red" }}>
        {product.name}
      </td>
      <td>{product.price}</td>
      <td onClick={handleDeleteProduct}>❌</td>
    </tr>
  );
};

export default ProductRow;
