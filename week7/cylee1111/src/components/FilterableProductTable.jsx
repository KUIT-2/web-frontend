import React, { useState } from "react";

import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import ProductForm from "./ProductForm";

const FilterableProductTable = ({ products, setProducts }) => {
  const [filterText, setFilterText] = useState(""); // [data, setData] 형식
  const [inStockOnly, setInStockOnly] = useState(false);

  const addProduct = (newProduct) => {
    setProducts((previousData) => [...previousData, newProduct]);
    // products = [{}, {}, {}, {}, ..., {}]
    // newProducts = [...products, { newProduct }] 
    // 기존 products를 건드리지 않고 새로운 배열 추가
  };

  const deleteProduct = (deleteProductName) => {
    setProducts((previousData) => 
      previousData.filter(product => product.name !== deleteProductName))
  }

  const filteredProducts = products.filter((product) => {
    const nameMatches = product.name
      .toLowerCase()
      .includes(filterText.toLowerCase());
    const stockMatches = !inStockOnly || product.stocked;
    return nameMatches && stockMatches;
  });

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText} // 텍스트의 변경을 감지하기 위함
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable 
        products={filteredProducts} 
        deleteProduct={deleteProduct} />
      <ProductForm 
        addProduct={addProduct} 
        deleteProduct={deleteProduct} />
    </div>
  );
};

export default FilterableProductTable;
