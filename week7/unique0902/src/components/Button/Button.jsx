import React from 'react';
import styles from './Button.module.css';
export default function Button({ children, handleClick }) {
  return (
    <button className={styles.btn} onClick={handleClick}>
      {children}
    </button>
  );
}
