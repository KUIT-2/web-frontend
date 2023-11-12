import React from 'react';
import styles from './SearchBar.module.css';
import { AiOutlineSearch } from 'react-icons/ai';

export default function SearchBar({ handleChange, value }) {
  return (
    <div className={styles.inputWrapper}>
      <AiOutlineSearch className={styles.icon} />
      <input
        type={'search'}
        className={styles.input}
        value={value}
        placeholder='Search...'
        onChange={handleChange}
      />
    </div>
  );
}
