import React from 'react';
import { Product } from '../../../store/type/product';
import ProductForm from './ProductForm';
type Props = {
  product: Product | null;
  editProduct: (newProduct: Product) => void;
};
export default function EditProductForm({ product, editProduct }: Props) {
  return <ProductForm product={product} handleSubmit={editProduct} />;
}
