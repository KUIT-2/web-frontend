import React from 'react';
import { useState } from 'react';
import IconButton from '../../Button/IconButton/IconButton';
import TextButton from '../../Button/TextButton/TextButton';
import EditProductForm from '../ProductForm/EditProductForm';
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
  const handleClickCancelEditBtn = () => {
    setIsEditing(false);
  };
  if (isEditing) {
    return (
      <li>
        <div className={styles.editForm}>
          <EditProductForm product={product} editProduct={handleEditProduct} />
          <TextButton handleClick={handleClickCancelEditBtn}>cancel</TextButton>
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
      <div className={styles.price}>{'$' + product.price}</div>
      <div className={styles.btnDiv}>
        <IconButton handleClick={handleDeleteProduct}>❌</IconButton>
      </div>
      <div className={styles.btnDiv}>
        <IconButton handleClick={handleClickEditBtn}>🖍</IconButton>
      </div>
    </li>
  );
};

export default ProductRow;
