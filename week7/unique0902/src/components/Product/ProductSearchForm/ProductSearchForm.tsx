import React, { ChangeEvent } from 'react';
import styles from './ProductSearchForm.module.css';
import SearchBar from '../../SearchBar/SearchBar';

type Props = {
  filterText: string;
  inStockOnly: boolean;
  onFilterTextChange: (text: string) => void;
  onInStockOnlyChange: (checked: boolean) => void;
};

const ProductSearchForm = ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}: Props) => {
  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    onFilterTextChange(e.target.value);
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
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
