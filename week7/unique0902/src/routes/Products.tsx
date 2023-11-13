import React, { useReducer } from 'react';

import FilterableProductTable from '../components/Product/FilterableProductTable/FilterableProductTable';
import productsReducer from '../hooks/product-reducer';
import { Product } from '../store/type/product.d';

const Products = () => {
  const [products, dispatch] = useReducer(productsReducer, [
    { category: 'Fruits', price: '1', stocked: true, name: 'Apple' },
    { category: 'Fruits', price: '2', stocked: false, name: 'Passionfruit' },
    { category: 'Vegetables', price: '2', stocked: true, name: 'Spinach' },
    { category: 'Vegetables', price: '4', stocked: false, name: 'Pumpkin' },
    { category: 'Fruits', price: '1', stocked: true, name: 'Dragonfruit' },
    { category: 'Vegetables', price: '1', stocked: true, name: 'Peas' },
  ]);

  const addProduct = (newProduct: Product) => {
    dispatch({ type: 'added', newProduct });
  };
  const deleteProduct = (deletedName: string) => {
    dispatch({ type: 'deleted', deletedName });
  };
  const editProduct = (name: string, newProduct: Product) => {
    dispatch({ type: 'edited', name, newProduct });
  };

  return (
    <>
      <FilterableProductTable
        products={products}
        addProduct={addProduct}
        deleteProduct={deleteProduct}
        editProduct={editProduct}
      />
    </>
  );
};

export default Products;
