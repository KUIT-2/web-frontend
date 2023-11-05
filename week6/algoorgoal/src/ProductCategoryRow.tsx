import React from 'react';
import { ProductType } from './App';

interface ProductCategoryRowPropsType {
  category: ProductType['category'];
}

export default function ProductCategoryRow({
  category,
}: ProductCategoryRowPropsType) {
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  );
}
