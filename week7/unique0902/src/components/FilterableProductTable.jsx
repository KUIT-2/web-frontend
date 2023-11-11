import React, { useState } from 'react';
import ProductTable from './ProductTable/ProductTable';
import AddProductForm from './ProductForm/AddProductForm';
import styles from './FilterableProductTable.module.css';
import ProductSearchForm from './ProductSearchForm/ProductSearchForm';
const FilterableProductTable = ({ products, setProducts }) => {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  const addProduct = (newProduct) => {
    setProducts((previousData) => [...previousData, newProduct]);
  };
  const deleteProduct = (deletedName) => {
    setProducts((previousData) =>
      previousData.filter((val) => val.name !== deletedName)
    );
  };
  const editProduct = (name, newProduct) => {
    setProducts((previousData) =>
      previousData.map((val) => {
        if (val.name === name) {
          return newProduct;
        } else {
          return val;
        }
      })
    );
  };

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
