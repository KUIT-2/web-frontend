import React, { useState } from "react";

import * as S from "./ProductForm.styles";

import Input from "./Input";

const ProductForm = ({ addProduct }) => { // 텍스트를 다루는 객체
  const [newProduct, setNewProduct] = useState({
    category: "",
    price: "",
    stocked: true,
    name: "",
  });

  const handleChange = (value, label) => {
    setNewProduct({ ...newProduct, [label]: value }); // label만 바꾸겠다
  };

  const handleAddNewProduct = () => {
    addProduct(newProduct);
  };

  return (
    <S.Form>
      <Input
        type={"text"}
        value={newProduct.category}
        onChange={(e) => handleChange(e.target.value, "category")}
        placeholder="category..."
      />
      <Input
        type={"text"}
        value={newProduct.price}
        onChange={(e) => handleChange(e.target.value, "price")}
        placeholder="price..."
      />
      <Input
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
        {/* type=button이 없을 경우 버튼 누르면 새로고침됨 */}
        add new prduct
      </button>
    </S.Form>
  );
};

export default ProductForm;
