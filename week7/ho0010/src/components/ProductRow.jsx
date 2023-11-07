import React from "react";

const ProductRow = ({ product, deleteProduct }) => {
    // { category: "Fruits", price: "$1", stocked: true, name: "Apple" }
    const handleDeleteProduct = (e) => {
        deleteProduct(product.name)
    }

    return <tr>
        <td style={{ color: product.stocked ? 'black' : 'red' }}>{product.name}</td>
        <td>{product.price}</td>
        <td><button onClick={handleDeleteProduct} type="button">Delete</button></td>

    </tr>

};

export default ProductRow;