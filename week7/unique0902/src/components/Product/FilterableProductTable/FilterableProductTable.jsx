import React, { useState } from 'react';
import ProductTable from '../ProductTable/ProductTable';
import AddProductForm from '../ProductForm/AddProductForm';
import styles from './FilterableProductTable.module.css';
import ProductSearchForm from '../ProductSearchForm/ProductSearchForm';
const FilterableProductTable = ({
  products,
  addProduct,
  deleteProduct,
  editProduct,
}) => {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  const filteredProducts = products.filter((product) => {
    const nameMatches = product.name
      .toLowerCase()
      .includes(filterText.toLowerCase());
    const stockMatches = !inStockOnly || product.stocked;
    return nameMatches && stockMatches;
  });

  return (
    <div className={styles.wrapper}>
      <ProductSearchForm
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={filteredProducts}
        deleteProduct={deleteProduct}
        editProduct={editProduct}
      />
      <AddProductForm addProduct={addProduct} />
    </div>
  );
};

export default FilterableProductTable;
