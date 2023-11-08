import React, { useState } from 'react';
import { ProductType } from '../routes/Products';

interface InputBarType {
  addProduct: (product: ProductType) => void;
}

const initialNewProduct = {
  category: '',
  price: '',
  stocked: true,
  name: '',
};

export default function InputBar({ addProduct }: InputBarType) {
  const [newProduct, setNewProduct] = useState(initialNewProduct);

  const handleChange = (value: string | boolean, label: string) => {
    setNewProduct((newProduct) => ({
      ...newProduct,
      [label]: value,
    }));
  };

  const handleNewProduct = () => {
    const currentTime = new Date().getTime();
    addProduct({ id: currentTime, ...newProduct });
    setNewProduct(initialNewProduct);
  };

  return (
    <>
      <label htmlFor='category'>category...</label>
      <select
        name='category'
        value={newProduct.category}
        onChange={(event) => handleChange(event.target.value, 'category')}
      >
        <option value='Fruits'>Fruits</option>
        <option value='Vegetables'>Vegetables</option>
      </select>

      <input
        type=''
        value={newProduct.price}
        onChange={(event) => handleChange(event.target.value, 'price')}
        placeholder='price...'
      />

      <label>is stocked</label>
      <input
        type='checkbox'
        checked={newProduct.stocked}
        onChange={(event) => handleChange(event.target.checked, 'stocked')}
      />
      <input
        type='text'
        value={newProduct.name}
        onChange={(event) => handleChange(event.target.value, 'name')}
        placeholder='name...'
      />
      <button onClick={handleNewProduct} type='button'>
        add new product
      </button>
    </>
  );
}
