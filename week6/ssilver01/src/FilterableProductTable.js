import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import InputBar from "./InputBar";

const FilterableProductTable = ({ products, setProducts }) => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const addProduct = (newProduct) => {
    setProducts((previousData) => [...previousData, newProduct]);
  };

  //splice : 요소를 삭제하거나 교체하여 배열의 내용을 변경
  const deleteProduct = (deletedProduct) => {
    const index = products.findIndex((val) => val.name === deletedProduct);
    if (index !== -1) {
      const newProductsArray = [...products];
      newProductsArray.splice(index, 1);
      setProducts(newProductsArray);
    }
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
