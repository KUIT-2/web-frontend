import React from "react";
import { useState } from "react";
import ProductForm from "./ProductForm";
import * as S from "./ProductRow.styles";
import Button from "./Button";

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
      <S.EditLi>
        <ProductForm isEditing={true} handleEditProduct={handleEditProduct} />
        <Button onClick={handleCancelClick}>❌</Button>
      </S.EditLi>
    );
  }
  return (
    <S.ProductLi>
      <S.InfoDiv style={{ color: product.stocked ? "black" : "red" }}>
        {product.name}
      </S.InfoDiv>
      <S.InfoDiv>{product.price}</S.InfoDiv>
      <Button onClick={handleEditClick}>✏️</Button>
      <Button onClick={handleDeleteClick}>🗑️</Button>
    </S.ProductLi>
  );
};

export default ProductRow;
