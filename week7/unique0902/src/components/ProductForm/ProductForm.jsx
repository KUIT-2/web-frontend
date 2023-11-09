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
        className={styles.input}
        value={newProduct.category}
        onChange={(e) => handleChange(e.target.value, 'category')}
        placeholder='category...'
      />
      <input
        type={'text'}
        className={styles.input}
        value={newProduct.price}
        onChange={(e) => handleChange(e.target.value, 'price')}
        placeholder='price...'
      />
      <label>Is Stocked</label>
      <input
        type={'checkbox'}
        className={styles.input}
        checked={newProduct.stocked}
        onChange={(e) => handleChange(e.target.checked, 'stocked')}
      />
      <input
        type={'text'}
        className={styles.input}
        value={newProduct.name}
        onChange={(e) => handleChange(e.target.value, 'name')}
        placeholder='name...'
      />
      <button onClick={handleClickBtn} type={'button'}>
        {/* type=button이 없을 경우 버튼 누르면 새로고침됨 */}
        submit
      </button>
    </form>
  );
};

export default ProductForm;
