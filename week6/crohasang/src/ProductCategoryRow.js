import React from 'react'

// colspan={2} -> 열이 두 개
const ProductCategoryRow = ({ category }) => {
    return (
        <tr>
            <th colSpan={2}>{category}</th>
        </tr>
    )
}

export default ProductCategoryRow;