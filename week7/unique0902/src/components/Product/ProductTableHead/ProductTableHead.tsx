import React from 'react';
import styles from './ProductTableHead.module.css';
export default function ProductTableHead() {
  return (
    <ul className={styles.ul}>
      <li className={styles.category}>Category</li>
      <div className={styles.wrapper}>
        <li className={styles.name}>Name</li>
        <li className={styles.price}>Price</li>
        <li className={styles.delete}>Delete</li>
        <li className={styles.edit}>Edit</li>
      </div>
    </ul>
  );
}
