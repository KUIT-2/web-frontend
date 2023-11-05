import React from 'react';
import { ProductType, ProductsType } from './App';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

interface ProductTablePropsTypes {
  products: ProductsType;
  filterText: string;
  isStockOnly: boolean;
  deleteProduct: (targetProduct: ProductType) => void;
  editProduct: (targetProduct: ProductType) => void;
}

export default function ProductTable({
  products,
  filterText,
  isStockOnly,
  deleteProduct,
  editProduct,
}: ProductTablePropsTypes) {
  const rows: React.ReactNode[] = [];
  let lastCategory: string | null = null;

  products
    .sort((a, b) => (a.category < b.category ? -1 : 1))
    .map((product) => {
      if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        return;
      }

      if (isStockOnly && !product.stocked) {
        return;
      }

      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name}
          deleteProduct={deleteProduct}
          editProduct={editProduct}
        />
      );

      lastCategory = product.category;
    });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
