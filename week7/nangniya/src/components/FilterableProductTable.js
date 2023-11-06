import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import InputBar from "./InputBar";

const FilterableProductTable = ({ products, setProducts }) => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const addProduct = (newProduct) => {
    setProducts((previousData) => [...previousData, newProduct]);
    // products = [{}, {}, {}, {}, ..., {}]
    // newProducts = [...products, { newProduct }]
  };

  const deleteProduct = (targetProduct) => {
    setProducts((prev) =>
      prev.filter((product) => product.name !== targetProduct)
    );
  };

  const editProduct = (name, newProduct) => {
    setProducts((prev) =>
      prev.map((product) => {
        if (product.name === name) {
          return newProduct;
        } else {
          return product;
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
    <div>
      <SearchBar
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
      <InputBar addProduct={addProduct} />
    </div>
  );
};

export default FilterableProductTable;
