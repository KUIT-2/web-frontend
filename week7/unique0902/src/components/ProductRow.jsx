import React from 'react';
import { useState } from 'react';
import InputBar from './InputBar';

const ProductRow = ({ product, deleteProduct, editProduct }) => {
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
      <li>
        <div>
          <InputBar
            product={product}
            handleEditProduct={handleEditProduct}
            isEditing={true}
          />
        </div>
      </li>
    );
  }
  return (
    <li>
      <div style={{ color: product.stocked ? 'black' : 'red' }}>
        {product.name}
      </div>
      <div>{product.price}</div>
      <div>
        <button onClick={handleDeleteProduct}>❌</button>
      </div>
      <div>
        <button onClick={handleClickEditBtn}>🖍</button>
      </div>
    </li>
  );
};

export default ProductRow;
