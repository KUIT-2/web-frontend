import React from 'react';
import styles from './IconButton.module.css';
export default function IconButton({ children, handleClick }) {
  return (
    <button className={styles.btn} onClick={handleClick} type={'button'}>
      {/* type=button이 없을 경우 버튼 누르면 새로고침됨 */}
      {children}
    </button>
  );
}
