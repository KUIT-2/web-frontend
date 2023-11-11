import React from 'react';
import styles from './ProductSearchForm.module.css';
import SearchBar from '../SearchBar/SearchBar';
const ProductSearchForm = ({
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
      <SearchBar value={filterText} handleChange={handleTextChange} />
    </form>
  );
};

export default ProductSearchForm;
