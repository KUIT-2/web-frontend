import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import InputBar from './InputBar';

const FilterableProductTable = ({ products, setProducts }) => {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  const addProduct = (newProduct) => {
    setProducts((previousData) => [...previousData, newProduct]);
    // products = [{}, {}, {}, {}, ..., {}]
    // newProducts = [...products, { newProduct }]
  };
  const deleteProduct = (deletedName) => {
    setProducts((previousData) =>
      previousData.filter((val) => val.name !== deletedName)
    );
  };

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
        deleteProduct={deleteProduct}
      />
      <InputBar addProduct={addProduct} />
    </div>
  );
};

export default FilterableProductTable;
