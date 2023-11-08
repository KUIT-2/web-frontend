import React from 'react';
import { ProductType, ProductsType } from '../routes/Products';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
import { render } from '@testing-library/react';

interface ProductTablePropsTypes {
  products: ProductsType;
  filterText: string;
  isStockOnly: boolean;
  deleteProduct: (targetProduct: ProductType) => void;
  editProduct: (targetProduct: ProductType) => void;
}

type productsByCategoryType = {
  [category: string]: ProductsType;
};

export default function ProductTable({
  products,
  filterText,
  isStockOnly,
  deleteProduct,
  editProduct,
}: ProductTablePropsTypes) {
  const rows: React.ReactNode[] = [];
  let lastCategory: string | null = null;

  const productsByCategory = products.reduce(
    (accumulator: productsByCategoryType, product) => {
      const productsInTargetCategory = accumulator[product.category] || [];

      return {
        ...accumulator,
        [product.category]: [...productsInTargetCategory, product],
      };
    },
    {}
  );

  const renderedProductsByCategory = Object.keys(productsByCategory).map(
    (category) => (
      <div key={category}>
        <ProductCategoryRow category={category} />
        {productsByCategory[category].map((product) => (
          <ProductRow
            product={product}
            deleteProduct={deleteProduct}
            editProduct={editProduct}
          />
        ))}
      </div>
    )
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{renderedProductsByCategory}</tbody>
    </table>
  );
}
