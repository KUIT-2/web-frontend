import React from 'react';
import ProductForm from './ProductForm';

export default function EditProductForm({ product, editProduct }) {
  return <ProductForm product={product} handleSubmit={editProduct} />;
}
