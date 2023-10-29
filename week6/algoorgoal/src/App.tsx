import React from 'react';
import FilterableProductTable from './FilterableProductTable';

export type ProductType = {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
};

export type ProductsType = ProductType[];

const PRODUCTS: ProductsType = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
];

function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}

export default App;
