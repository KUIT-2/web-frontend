import React, { useState } from "react";

import * as S from "./ProductForm.styles";

import Input from "./Input";

import Button from "./Button";


const ProductForm = ({ addProduct }) => {
    const [newProduct, setNewProduct] = useState({
        category: "",
        price: "",
        stocked: true,
        name: ""
    });

    const handleChange = (value, label) => {
        setNewProduct({ ...newProduct, [label]: value })
    };
    const handleAddNewProduct = () => {
        //product 정보가 입력되지 않았을 때 막는 로직
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
            <Button onClick={handleAddNewProduct} type={"button"}>
                {/* type = button이 없으면 버튼 누르면 새로고침됨 */}
                add new product
            </Button>
        </S.Form>
    )

}

export default ProductForm;
