import React from 'react';
import { useState } from 'react';
import EditInputBar from '../InputBar/EditInputBar';
import styles from './ProductRow.module.css';

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
          <EditInputBar
            product={product}
            handleEditProduct={handleEditProduct}
          />
        </div>
      </li>
    );
  }
  return (
    <li className={styles.li}>
      <div
        className={styles.name}
        style={{ color: product.stocked ? 'black' : 'red' }}
      >
        {product.name}
      </div>
      <div className={styles.price}>{product.price}</div>
      <div className={styles.btnDiv}>
        <button className={styles.btn} onClick={handleDeleteProduct}>
          ❌
        </button>
      </div>
      <div className={styles.btnDiv}>
        <button className={styles.btn} onClick={handleClickEditBtn}>
          🖍
        </button>
      </div>
    </li>
  );
};

export default ProductRow;
