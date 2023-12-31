import React, { useState } from 'react';

const InputBar = ({ product, addProduct, handleEditProduct, isEditing }) => {
  const [newProduct, setNewProduct] = useState({
    ...product,
  });

  const handleChange = (value, label) => {
    setNewProduct({ ...newProduct, [label]: value });
  };

  const handleClickProductBtn = () => {
    if (isEditing) {
      handleEditProduct(newProduct);
    } else {
      addProduct(newProduct);
      setNewProduct({ category: '', price: '', stocked: true, name: '' });
    }
  };

  return (
    <form>
      <input
        type={'text'}
        value={newProduct.category}
        onChange={(e) => handleChange(e.target.value, 'category')}
        placeholder='category...'
      />
      <input
        type={'text'}
        value={newProduct.price}
        onChange={(e) => handleChange(e.target.value, 'price')}
        placeholder='price...'
      />
      <label>Is Stocked</label>
      <input
        type={'checkbox'}
        checked={newProduct.stocked}
        onChange={(e) => handleChange(e.target.checked, 'stocked')}
      />
      <input
        type={'text'}
        value={newProduct.name}
        onChange={(e) => handleChange(e.target.value, 'name')}
        placeholder='name...'
      />
      <button onClick={handleClickProductBtn} type={'button'}>
        {/* type=button이 없을 경우 버튼 누르면 새로고침됨 */}
        {isEditing ? 'edit prduct' : 'add new prduct'}
      </button>
    </form>
  );
};

export default InputBar;
