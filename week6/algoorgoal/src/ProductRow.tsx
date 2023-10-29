import React from 'react';
import { ProductType } from './App';

interface ProductRowPropsType {
  product: ProductType;
}

export default function ProductRow({ product }: ProductRowPropsType) {
  const { name, price, stocked } = product;
  return (
    <tr>
      <td style={{ color: stocked ? ' black' : 'red' }}>{name}</td>
      <td>{price}</td>
    </tr>
  );
}
