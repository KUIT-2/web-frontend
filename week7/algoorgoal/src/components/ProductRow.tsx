import React, { useState } from 'react';
import { ProductType } from '../routes/Products';

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
  const [isEditModeOn, setIsEditModeOn] = useState(false);

  const [newName, setNewName] = useState('');
  const [newPrice, setNewPrice] = useState('');

  const handleEditModeChange = () =>
    setIsEditModeOn((isEditModeOn) => !isEditModeOn);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    label: string
  ) => {
    switch (label) {
      case 'name':
        setNewName(event.target.value);
        break;
      case 'price':
        setNewPrice(event.target.value);
        break;
      default:
        break;
    }
  };

  const renderedEditableName = !isEditModeOn ? (
    name
  ) : (
    <input type='text' onChange={(event) => handleChange(event, 'name')} />
  );

  const renderedEditablePrice = !isEditModeOn ? (
    price
  ) : (
    <input type='text' onChange={(event) => handleChange(event, 'price')} />
  );

  const renderedEditButton = !isEditModeOn ? (
    <button type='button' onClick={handleEditModeChange}>
      ✏️
    </button>
  ) : (
    <button
      type='button'
      onClick={() =>
        editProduct({
          ...product,
          name: newName,
          price: newPrice,
        })
      }
    >
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
