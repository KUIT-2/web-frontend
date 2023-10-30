import React from "react";

const ProductCategory = ({ category }) => {
    return <tr>
        <th colspan={2}>{category}</th>
    </tr>
};

export default ProductCategory;