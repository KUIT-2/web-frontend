import React from "react";
import { useState } from "react";
import InputBar from "./InputBar";

const ProductRow = ({ product, deleteProduct, editProduct }) => {
  // { category: "Fruits", price: "$1", stocked: true, name: "Apple" }
  const [isEditing, setIsEditing] = useState(false);
  const handleDeleteClick = () => {
    const result = window.confirm(`${product.name}을 삭제하시겠습니까?`);
    if (result === true) {
      deleteProduct(product.name);
    }
  };
  const handleEditProduct = (newProduct) => {
    editProduct(product.name, newProduct);
  };
  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleCancelClick = () => {
    setIsEditing(false);
  };
  if (isEditing) {
    return (
      <tr>
        <td>
          <InputBar isEditing={true} handleEditProduct={handleEditProduct} />
        </td>
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
