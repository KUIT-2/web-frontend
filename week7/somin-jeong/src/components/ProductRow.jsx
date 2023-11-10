import React from 'react'
import * as S from './ProductRow.style'

const ProductRow = ({product, deleteProduct}) => {
  const handleDeleteProduct = () => {
    deleteProduct(product.name);
  };

  return (
    <S.ProductsPadding>
      <tr>
        <td style={{color: product.stocked ? "black" : "red"}}>
          {product.name}
        </td>
        <td>{product.price}</td>
        <button onClick={handleDeleteProduct} type={"button"}>X</button>
      </tr>
    </S.ProductsPadding>
  )
}

export default ProductRow
