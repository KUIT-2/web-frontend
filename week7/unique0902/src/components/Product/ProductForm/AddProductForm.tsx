import React from 'react';
import { Product } from '../../../store/type/product';
import ProductForm from './ProductForm';
type Props = {
  product: Product | null;
  addProduct: (newProduct: Product) => void;
};
export default function AddProductForm({ product, addProduct }: Props) {
  return <ProductForm product={product} handleSubmit={addProduct} />;
}
