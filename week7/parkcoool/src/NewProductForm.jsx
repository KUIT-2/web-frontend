import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const addProduct = (category, name, price, setProducts) => {
    setProducts((prevProducts) => {
        const newProducts = [...prevProducts];
        for (const product of newProducts) {
            if (name === product.name) {
                alert("Product name must be unique.");
                return newProducts;
            }
        }
        newProducts.push({
            id: uuidv4(),
            category: category,
            price: price,
            stocked: true,
            name: name,
        });
        return newProducts;
    });
};

const NewProductForm = ({ setProducts }) => {
    const [newCategory, setNewCategory] = useState("");
    const [newName, setNewName] = useState("");
    const [newPrice, setNewPrice] = useState("");

    return (
        <form
            className="newProduct"
            onSubmit={(e) => {
                e.preventDefault();
                addProduct(newCategory, newName, newPrice, setProducts);
            }}
        >
            <input
                type="text"
                name="newCategory"
                placeholder="Enter the product category."
                onChange={(e) => {
                    setNewCategory(e.target.value);
                }}
            ></input>
            <input
                type="text"
                name="newName"
                placeholder="Enter the product name."
                onChange={(e) => {
                    setNewName(e.target.value);
                }}
            ></input>
            <input
                type="text"
                name="newPrice"
                placeholder="Enter the product price."
                onChange={(e) => {
                    setNewPrice(e.target.value);
                }}
            ></input>
            <input type="submit" value="✅ Add Product"></input>
        </form>
    );
};

export default NewProductForm;
