import React from "react";

const ProductRow = ({ product }) => {
    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
                <button>
                    <span role="img" aria-label="edit">
                        ✏️
                    </span>
                </button>
            </td>
            <td>
                <button>
                    <span role="img" aria-label="delete">
                        ❌
                    </span>
                </button>
            </td>
        </tr>
    );
};

export default ProductRow;
