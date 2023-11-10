import React, { useState } from 'react'

import * as S from './ProductForm.styles';

import Input from './Input';

const ProductForm = ({ addProduct }) => {
    const [newProduct, setNewProduct] = useState({
        category: "",
        price: "",
        stocked: true,
        name: ""
    });

    const handleChange = (value, label) => {
        setNewProduct((prev) => ({...prev, [label]: value}));
    }

    const handleAddNewProduct = () => {
        // product 정보가 입력되지 않았을 때 막는 로직
        addProduct(newProduct);
    }


  return (
    <S.Form>
        <Input
          type={"text"}
          value={newProduct.category}
          placeholder="category..."
          onChange={(e) => handleChange(e.target.value, "category")} 
        //   onChange={(e) => setNewProduct({...newProduct, category: "changed"})}
        />
        <Input
            type={"text"}
            value={newProduct.price}
            placeholder="price..."
            onChange={(e) => handleChange(e.target.value, "price")}
        />
        <Input
            type={"text"}
            value={newProduct.name}
            placeholder="name..."
            onChange={(e) => handleChange(e.target.value, "name")}
        />
        <div>
            <label>IsStocked</label>
            <input
                type={"checkbox"}
                checked={newProduct.stocked}
                onChange={(e) => handleChange(e.target.value, "stocked")}
            />
        </div>
        <button onClick={handleAddNewProduct} type={"button"}>
            add new product
        </button>
    </S.Form>
  )
}

export default ProductForm;