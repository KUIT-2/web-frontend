import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import ProductFrom from "./ProductForm";

const FilterableProductTable = ({ products, setProducts }) => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const addProduct = (newProduct) => {
    setProducts((previousData) => [...previousData, newProduct]);
    // products = [{}, {}, {}, {}, ..., {}]
    // newProducts = [...products, { newProduct }]
  };

  const deleteProduct = (targetProductName) => {
    setProducts((prev) =>
      prev.filter((product) => product.name !== targetProductName)
    );
  };

  const editProduct = (originalName, updatedProduct) => {
    setProducts((prev) =>
      prev.map((product) => {
        if (product.name === originalName) {
          return updatedProduct;
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
      <ProductFrom addProduct={addProduct} />
    </div>
  );
};

export default FilterableProductTable;
