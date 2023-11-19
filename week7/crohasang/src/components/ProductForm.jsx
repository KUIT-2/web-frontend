import React, { useState } from "react";

import * as S from "./ProductForm.styles";

import Input from "./Input";

// prop으로 addProduct 함수를 받음
const ProductForm = ({ addProduct }) => {
    // newProduct 상태와 setNewProduct 함수를 생성
    // newProduct 상태는 새로운 상품의 정보를 관리하기 위한 객체로 초기값으로 카테고리, 가격, 재고여부, 이름을 포함함
  const [newProduct, setNewProduct] = useState({
    category: "",
    price: "",
    stocked: true,
    name: "",
  });

  // 입력 요소의 변경을 처리하는 함수
  // value: 입력 요소의 값
  // label: 상품 속성(카테고리,가격,재고 여부, 이름)을 업데이트할지 나타냄
  // setNewProduct 함수를 사용하여 newProduct 상태를 업데이트
  const handleChange = (value, label) => {
    setNewProduct({ ...newProduct, [label]: value });
  };

  // add new product 버튼을 클릭할 때 호출되는 함수
  // addProduct 함수를 호출하여 newPrduct 상태를 사용하여 새로운 상품을 추가
  const handleAddNewProduct = () => {
    // product 정보가 입력되지 않았을 때 로직 추가해야함
    addProduct(newProduct);
  };

  // 입력 요소 업데이트
  return (
    <S.Form>
      <Input
        type={"text"}
        value={newProduct.category}
        onChange={(e) => handleChange(e.target.value, "category")}
        // onChange = (e) => setNetProduct({ ...newProduct, category: "asdfasfd"})
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
        add new prduct
      </button>
    </S.Form>
  );
};

export default ProductForm;
