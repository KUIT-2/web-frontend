import React from "react";
import styled from "styled-components";
import Button from "./Button";

const ProductRow = ({ product, deleteProduct }) => {
    // { category: "Fruits", price: "$1", stocked: true, name: "Apple" }
    const handleDeleteProduct = (e) => {
        deleteProduct(product.name)
    }

    return <tr>
        <td style={{ color: product.stocked ? 'black' : 'red' }}>{product.name}</td>
        <td>{product.price}</td>
        <td><Button onClick={handleDeleteProduct} type="button">Delete</Button></td>

    </tr>

};

export default ProductRow;