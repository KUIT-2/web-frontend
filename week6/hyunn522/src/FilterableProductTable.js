import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import InputBar from './InputBar';

const FilterableProductTable = ({ products, setProducts }) => {
  //filterText, inStockOnly를 기준으로 user에게 데이터가 필터링돼서 보여짐
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(true);

  const addProduct = (newProduct) => {
    setProducts((prev) => [...prev, newProduct]); // 기존의 데이터를 비구조화 할당 후 새로운 데이터 추가
  };

  const deleteProduct = (product) => {
    setProducts((prev) => {
      // prev 배열에서 product 객체 필터링
      const newProducts = prev.filter((p) => p !== product);
      return newProducts;
    });
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
