import React, { useState } from 'react';
import styles from './ProductForm.module.css';

const ProductForm = ({ product, handleSubmit }) => {
  const [newProduct, setNewProduct] = useState(
    product
      ? { ...product }
      : {
          category: '',
          price: '',
          stocked: true,
          name: '',
        }
  );

  const handleChange = (value, label) => {
    setNewProduct({ ...newProduct, [label]: value });
  };

  const handleClickBtn = () => {
    handleSubmit(newProduct);
    setNewProduct({ category: '', price: '', stocked: true, name: '' });
  };

  return (
    <form className={styles.form}>
      <input
        type={'text'}
        className={`${styles.input} ${styles.category}`}
        value={newProduct.category}
        onChange={(e) => handleChange(e.target.value, 'category')}
        placeholder='category...'
      />
      <input
        type={'number'}
        className={`${styles.input} ${styles.price}`}
        value={newProduct.price}
        onChange={(e) => handleChange(e.target.value, 'price')}
        placeholder='price...'
      />
      <div className={styles.checkbox}>
        <label>
          Is Stocked
          <input
            type={'checkbox'}
            className={`${styles.input} ${styles.stocked}`}
            checked={newProduct.stocked}
            onChange={(e) => handleChange(e.target.checked, 'stocked')}
          />
        </label>
      </div>
      <input
        type={'text'}
        className={`${styles.input} ${styles.name}`}
        value={newProduct.name}
        onChange={(e) => handleChange(e.target.value, 'name')}
        placeholder='name...'
      />
      <button className={styles.btn} onClick={handleClickBtn} type={'button'}>
        {/* type=button이 없을 경우 버튼 누르면 새로고침됨 */}
        submit
      </button>
    </form>
  );
};

export default ProductForm;
