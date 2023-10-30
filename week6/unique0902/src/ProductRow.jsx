import React from 'react';
import { useState } from 'react';
import InputBar from './InputBar';

const ProductRow = ({ product, deleteProduct, editProduct }) => {
  // { category: "Fruits", price: "$1", stocked: true, name: "Apple" }
  const [isEditing, setIsEditing] = useState(false);
  const handleDeleteProduct = () => {
    deleteProduct(product.name);
  };
  const handleEditProduct = (newProduct) => {
    editProduct(product.name, newProduct);
  };
  const handleClickEditBtn = () => {
    setIsEditing(true);
  };
  if (isEditing) {
    return (
      <tr>
        <td colSpan={4}>
          <InputBar
            product={product}
            handleEditProduct={handleEditProduct}
            isEditing={true}
          />
        </td>
      </tr>
    );
  }
  return (
    <tr>
      <td style={{ color: product.stocked ? 'black' : 'red' }}>
        {product.name}
      </td>
      <td>{product.price}</td>
      <td>
        <button onClick={handleDeleteProduct}>❌</button>
      </td>
      <td>
        <button onClick={handleClickEditBtn}>🖍</button>
      </td>
    </tr>
  );
};

export default ProductRow;
