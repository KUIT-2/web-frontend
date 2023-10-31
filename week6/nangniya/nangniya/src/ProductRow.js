import React from "react";
import { useState } from "react";

const ProductRow = ({ product, deleteProduct, editProduct }) => {
  // { category: "Fruits", price: "$1", stocked: true, name: "Apple" }
  const [isEditing, setIsEditing] = useState(false);
  const handleDeleteClick = () => {
    const result = window.confirm(`${product.name}을 삭제하시겠습니까?`);
    if (result === true) {
      deleteProduct(product.name);
    }
  };
  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleCompleteClick = () => {
    setIsEditing(false);
  };
  const handleCancelClick = () => {
    setIsEditing(false);
  };
  if (isEditing) {
    return (
      <tr>
        <td style={{ color: product.stocked ? "black" : "red" }}>
          {product.name}
        </td>
        <td>{product.price}</td>
        <button onClick={handleCompleteClick}>✅</button>
        <button onClick={handleCancelClick}>❌</button>
      </tr>
    );
  }
  return (
    <tr>
      <td style={{ color: product.stocked ? "black" : "red" }}>
        {product.name}
      </td>
      <td>{product.price}</td>
      <button onClick={handleEditClick}>✏️</button>
      <button onClick={handleDeleteClick}>🗑️</button>
    </tr>
  );
};

export default ProductRow;
