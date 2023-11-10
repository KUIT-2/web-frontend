import React, { useState } from 'react';

import { ProductType } from '../hooks/useProducts';
import Input from './Input';

import * as S from './ProductForm.styles';

interface ProductFormPropsType {
  addProduct: (product: ProductType) => void;
}

const initialNewProduct = {
  category: '',
  price: '',
  stocked: true,
  name: '',
};

export default function ProductForm({ addProduct }: ProductFormPropsType) {
  const [newProduct, setNewProduct] = useState(initialNewProduct);

  const handleChange = (value: string | boolean, label: string) => {
    setNewProduct((newProduct) => ({
      ...newProduct,
      [label]: value,
    }));
  };

  const handleNewProduct = () => {
    // todo: prevent product from being added when input is complete
    const currentTime = new Date().getTime();
    addProduct({ id: currentTime, ...newProduct });
    setNewProduct(initialNewProduct);
  };

  return (
    <S.Form>
      <label htmlFor='category'>category...</label>
      <select
        name='category'
        value={newProduct.category}
        onChange={(event) => handleChange(event.target.value, 'category')}
      >
        <option value='Fruits'>Fruits</option>
        <option value='Vegetables'>Vegetables</option>
      </select>

      <Input
        value={newProduct.price}
        onValueChange={(event) => handleChange(event.target.value, 'price')}
        placeholder='price...'
      />
      <div>
        <label>is stocked</label>
        <input
          type='checkbox'
          checked={newProduct.stocked}
          onChange={(event) => handleChange(event.target.checked, 'stocked')}
        />
      </div>
      <Input
        value={newProduct.name}
        onValueChange={(event) => handleChange(event.target.value, 'name')}
        placeholder='name...'
      />
      <button onClick={handleNewProduct} type='button'>
        add new product
      </button>
    </S.Form>
  );
}
