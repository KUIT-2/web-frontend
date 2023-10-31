import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import { ProductType, ProductsType } from './App';
import InputBar from './InputBar';

interface FilterableProductTablePropsType {
  products: ProductsType;
  onProductsChange: React.Dispatch<React.SetStateAction<ProductsType>>;
}

export default function FilterableProductTable({
  products,
  onProductsChange,
}: FilterableProductTablePropsType) {
  const [filterText, setFilterText] = useState<string>('');
  const [isStockOnly, setIsStockOnly] = useState<boolean>(false);

  const addProduct = (product: ProductType) => {
    onProductsChange((products: ProductsType) => [...products, product]);
  };

  const deleteProduct = (targetProduct: ProductType) => {
    onProductsChange((products: ProductsType) =>
      products.filter(
        (currentProduct) => currentProduct.id !== targetProduct.id
      )
    );
  };

  const editProduct = (targetProduct: ProductType) => {
    onProductsChange((products: ProductsType) =>
      products.map((currentProduct) =>
        currentProduct.id === targetProduct.id ? targetProduct : currentProduct
      )
    );
  };

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
        deleteProduct={deleteProduct}
        editProduct={editProduct}
      />
      <InputBar addProduct={addProduct} />
    </>
  );
}
