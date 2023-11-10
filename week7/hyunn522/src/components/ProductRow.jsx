import React from 'react'

import * as S from './ProductRow.styles'

const ProductRow = ({ product, deleteProductRow }) => {
  // {category: "Fruits", price: "$1", stocked: true, name: "Apple"}


  const handleDeleteProduct = (product) => {
    deleteProductRow(product);
  }

  return (
  <tr>
    <S.nameTd style={{ color: product.stocked ? "black" : "red" }}>
      {product.name}
    </S.nameTd>
    <S.priceTd>{product.price}</S.priceTd>
    <td>
      <S.Button type={"button"} onClick={() => handleDeleteProduct(product)}>✖️</S.Button>
      </td>
  </tr>
  );
}

export default ProductRow