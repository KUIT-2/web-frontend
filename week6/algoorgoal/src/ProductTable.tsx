import React from 'react';
import { ProductsType } from './App';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

interface ProductTablePropsTypes {
  products: ProductsType;
  filterText: string;
  isStockOnly: boolean;
}

export default function ProductTable({
  products,
  filterText,
  isStockOnly,
}: ProductTablePropsTypes) {
  const rows: React.ReactNode[] = [];
  let lastCategory: string | null = null;

  products.map((product) => {
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
    rows.push(<ProductRow product={product} key={product.name} />);

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
