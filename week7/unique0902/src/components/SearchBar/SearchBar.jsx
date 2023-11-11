import React from 'react';
import styles from './SearchBar.module.css';
import { AiOutlineSearch } from 'react-icons/ai';
const SearchBar = ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) => {
  const handleTextChange = (e) => {
    onFilterTextChange(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    onInStockOnlyChange(e.target.checked);
  };

  return (
    <form className={styles.form}>
      <label>
        <input
          type={'checkbox'}
          checked={inStockOnly}
          onChange={handleCheckboxChange}
        />
        Only show products in stock
      </label>
      <div className={styles.inputWrapper}>
        <AiOutlineSearch className={styles.icon} />
        <input
          type={'search'}
          className={styles.input}
          value={filterText}
          placeholder='Search...'
          onChange={handleTextChange}
        />
      </div>
    </form>
  );
};

export default SearchBar;
