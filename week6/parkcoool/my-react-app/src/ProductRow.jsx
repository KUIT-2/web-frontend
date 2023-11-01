import React from "react";

const editProduct = (productID, name, price, setProducts) => {
    setProducts((prevProducts) => {
        const newProducts = [...prevProducts];
        for (const product of newProducts) {
            if (productID === product.id) {
                product.name = name;
                product.price = price;
            }
        }
        return newProducts;
    });
};

const deleteProduct = (productID, setProducts) => {
    setProducts((prevProducts) => {
        const newProducts = [...prevProducts];
        for (let i = 0; i < newProducts.length; i++) {
            if (productID === newProducts[i].id) {
                newProducts.splice(i, 1);
                break;
            }
        }
        return newProducts;
    });
};

const ProductRow = ({ product, setProducts }) => {
    const [isEditing, setIsEditing] = React.useState(false);
    const [name, setName] = React.useState(product.name);
    const [price, setPrice] = React.useState(product.price);

    if (isEditing) {
        return (
            <tr>
                <td className="name">
                    <input
                        type="text"
                        name={product.name + "_name"}
                        defaultValue={product.name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    ></input>
                </td>
                <td className="price">
                    <input
                        type="text"
                        name={product.name + "_price"}
                        defaultValue={product.price}
                        onChange={(e) => {
                            setPrice(e.target.value);
                        }}
                    ></input>
                </td>
                <td className="btn">
                    <button
                        onClick={() => {
                            editProduct(product.id, name, price, setProducts);
                            setIsEditing(false);
                        }}
                    >
                        <span role="img" aria-label="confirm">
                            ✅
                        </span>
                    </button>
                </td>
                <td className="btn">
                    <button
                        onClick={() => {
                            setName(product.name);
                            setPrice(product.price);
                            setIsEditing(false);
                        }}
                    >
                        <span role="img" aria-label="delete">
                            ❌
                        </span>
                    </button>
                </td>
            </tr>
        );
    } else {
        return (
            <tr>
                <td className="name">{product.name}</td>
                <td className="price">{product.price}</td>
                <td className="btn">
                    <button
                        onClick={() => {
                            setIsEditing(true);
                        }}
                    >
                        <span role="img" aria-label="edit">
                            ✏️
                        </span>
                    </button>
                </td>
                <td className="btn">
                    <button
                        onClick={() => {
                            deleteProduct(product.id, setProducts);
                        }}
                    >
                        <span role="img" aria-label="delete">
                            ❌
                        </span>
                    </button>
                </td>
            </tr>
        );
    }
};

export default ProductRow;
