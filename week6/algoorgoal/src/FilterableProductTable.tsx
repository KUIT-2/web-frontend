import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import { ProductsType } from './App';

interface FilterableProductTablePropsType {
  products: ProductsType;
}

export default function FilterableProductTable({
  products,
}: FilterableProductTablePropsType) {
  const [filterText, setFilterText] = useState<string>('');
  const [isStockOnly, setIsStockOnly] = useState<boolean>(false);

  return (
    <>
      <SearchBar
        filterText={filterText}
        onFilterTextChange={setFilterText}
        isStockOnly={isStockOnly}
        onIsStockOnlyChange={setIsStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        isStockOnly={isStockOnly}
      />
    </>
  );
}
