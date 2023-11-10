import React, { useState } from 'react';
import { ProductType } from '../hooks/useProducts';
import useIsEditing from '../hooks/useIsEditing';
import useInputFields from '../hooks/useInputFields';

interface ProductRowPropsType {
  product: ProductType;
  deleteProduct: (targetProduct: ProductType) => void;
  editProduct: (targetProduct: ProductType) => void;
}

export default function ProductRow({
  product,
  deleteProduct,
  editProduct,
}: ProductRowPropsType) {
  const { name, price, stocked } = product;
  const { isEditing, toggleIsEditing } = useIsEditing();
  const { inputFields, editInputFields } = useInputFields();

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    editInputFields(name, value);
  };

  const renderedEditableName = !isEditing ? (
    name
  ) : (
    <input
      type='text'
      name='name'
      value={inputFields.name}
      onChange={handleTextChange}
    />
  );

  const renderedEditablePrice = !isEditing ? (
    price
  ) : (
    <input
      type='text'
      name='price'
      value={inputFields.price}
      onChange={handleTextChange}
    />
  );

  const handleFinishEditing = () => {
    toggleIsEditing();

    const { name, price } = inputFields;
    editProduct({ ...product, name, price });
  };

  const renderedEditButton = !isEditing ? (
    <button type='button' onClick={toggleIsEditing}>
      ✏️
    </button>
  ) : (
    <button type='button' onClick={handleFinishEditing}>
      ✅
    </button>
  );

  return (
    <tr>
      <td style={{ color: stocked ? 'black' : 'red' }}>
        {renderedEditableName}
      </td>
      <td>{renderedEditablePrice}</td>
      <td>{renderedEditButton}</td>
      <td>
        <button type='button' onClick={() => deleteProduct(product)}>
          ❌
        </button>
      </td>
    </tr>
  );
}
