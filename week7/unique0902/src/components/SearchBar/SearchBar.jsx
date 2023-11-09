import React from 'react';
import styles from './SearchBar.module.css';
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
      <input
        type={'text'}
        className={styles.input}
        value={filterText}
        placeholder='Search...'
        onChange={handleTextChange}
      />
      <label>
        <input
          type={'checkbox'}
          checked={inStockOnly}
          onChange={handleCheckboxChange}
        />
        Only show products in stock
      </label>
    </form>
  );
};

export default SearchBar;
