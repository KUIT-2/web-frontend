import { useState } from 'react';

export type ProductType = {
  id: number;
  category: string;
  price: string;
  stocked: boolean;
  name: string;
};

export type ProductsType = ProductType[];

const INITIAL_PRODUCTS: ProductsType = [
  { id: 1, category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  {
    id: 2,
    category: 'Fruits',
    price: '$1',
    stocked: true,
    name: 'Dragonfruit',
  },
  {
    id: 3,
    category: 'Fruits',
    price: '$2',
    stocked: false,
    name: 'Passionfruit',
  },
  {
    id: 4,
    category: 'Vegetables',
    price: '$2',
    stocked: true,
    name: 'Spinach',
  },
  {
    id: 5,
    category: 'Vegetables',
    price: '$4',
    stocked: false,
    name: 'Pumpkin',
  },
  {
    id: 6,
    category: 'Vegetables',
    price: '$1',
    stocked: true,
    name: 'Peas',
  },
];

export default function useProducts() {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);

  const addProduct = (product: ProductType) => {
    setProducts((currentProducts: ProductsType) => [
      ...currentProducts,
      product,
    ]);
  };

  const deleteProduct = (targetProduct: ProductType) => {
    setProducts((products: ProductsType) =>
      products.filter(
        (currentProduct) => currentProduct.id !== targetProduct.id
      )
    );
  };

  const editProduct = (targetProduct: ProductType) => {
    setProducts((currentProducts: ProductsType) =>
      currentProducts.map((currentProduct) =>
        currentProduct.id === targetProduct.id ? targetProduct : currentProduct
      )
    );
  };

  return { products, addProduct, deleteProduct, editProduct };
}
