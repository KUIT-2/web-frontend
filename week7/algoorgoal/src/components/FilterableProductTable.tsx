import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import { ProductType, ProductsType } from '../routes/Products';
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

  const filteredProducts = products.filter((product) => {
    const nameMatches = product.name
      .toLowerCase()
      .includes(filterText.toLowerCase());
    const stockMatches = !isStockOnly || product.stocked;
    return nameMatches && stockMatches;
  });

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
        products={filteredProducts}
        filterText={filterText}
        isStockOnly={isStockOnly}
        deleteProduct={deleteProduct}
        editProduct={editProduct}
      />
      <InputBar addProduct={addProduct} />
    </>
  );
}
