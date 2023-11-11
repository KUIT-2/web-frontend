import React from 'react';
import ProductForm from './ProductForm';

export default function AddProductForm({ product, addProduct }) {
  return <ProductForm product={product} handleSubmit={addProduct} />;
}
