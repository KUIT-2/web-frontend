import React, { useState } from "react";
import * as S from './ProductForm.styles'

const ProductForm = ({ addProduct }) => {
  const [newProduct, setNewProduct] = useState({
    category: "",
    price: "",
    stocked: true,
    name: "",
  });

  const handleChange = (value, label) => {
    console.log(value)
    setNewProduct({ ...newProduct, [label]: value });
  };

  const handleAddNewProduct = () => {
    // product 정보가 입력되지 않았을 때 막는 로직
    console.log(newProduct.category)
    console.log(newProduct.price)
    console.log(newProduct.name)
    addProduct(newProduct);
  };

  return (
    <S.Form>
      <input
        type={"text"}
        value={newProduct.category}
        onChange={(e) => handleChange(e.target.value, "category")}
        placeholder="category..."
      />
      <input
        type={"text"}
        value={newProduct.price}
        onChange={(e) => handleChange(e.target.value, "price")}
        placeholder="price..."
      />
      <input
        type={"text"}
        value={newProduct.name}
        onChange={(e) => handleChange(e.target.value, "name")}
        placeholder="name..."
      />
      <div>
        <label>Is Stocked</label>
        <input
          type={"checkbox"}
          checked={newProduct.stocked}
          onChange={(e) => handleChange(e.target.checked, "stocked")}
        />
      </div>
      <button onClick={handleAddNewProduct} type={"button"}>
        add new prduct
      </button>
    </S.Form>
  );
};

export default ProductForm;