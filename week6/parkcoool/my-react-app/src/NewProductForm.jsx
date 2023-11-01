import React, { useState } from "react";

const addProduct = (category, name, price, getID, setProducts) => {
    setProducts((prevProducts) => {
        const newProducts = [...prevProducts];
        for (const product of newProducts) {
            if (name === product.name) {
                alert("Product name must be unique.");
                return newProducts;
            }
        }
        newProducts.push({
            id: getID(),
            category: category,
            price: price,
            stocked: true,
            name: name,
        });
        return newProducts;
    });
};

const NewProductForm = ({ setProducts, getID }) => {
    const [newCategory, setNewCategory] = useState("");
    const [newName, setNewName] = useState("");
    const [newPrice, setNewPrice] = useState("");

    return (
        <form
            className="newProduct"
            onSubmit={(e) => {
                e.preventDefault();
                addProduct(newCategory, newName, newPrice, getID, setProducts);
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
