import React from "react";

const ProductRow = ({ product }) => {
    // { category: "Fruits", price: "$1", stocked: true, name: "Apple" }
    const handleDeleteProduct = () => {

    }

    return <tr>
        <td style={{ color: product.stocked ? 'black' : 'red' }}>{product.name}</td>
        <td>{product.price}</td>
        <button onClick={handleDeleteProduct} type="button">Delete</button>
    </tr>
};

export default ProductRow;