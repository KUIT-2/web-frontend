import React, { useState } from 'react';
import { Product } from '../../../store/type/product';
import TextButton from '../../Button/TextButton/TextButton';
import styles from './ProductForm.module.css';

// TODO: product 받아오기
type Props = {
  product: Product | null;
  handleSubmit: (newProduct: Product) => void;
};
const ProductForm = ({ product, handleSubmit }: Props) => {
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

  const handleChange = (value: string | boolean, label: string) => {
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
      <div className={styles.btnWrapper}>
        <TextButton handleClick={handleClickBtn}>submit</TextButton>
      </div>
    </form>
  );
};

export default ProductForm;
