import React from 'react'

const ProductRow = ({product, deleteProduct, index}) => {
  const handleDeleteProduct = () => {
    deleteProduct(index);
  };

  return (
    <tr>
      <td style={{color: product.stocked ? "black" : "red"}}>
        {product.name}
      </td>
      <td>{product.price}</td>
      <button onClick={handleDeleteProduct} type={"button"}>X</button>
    </tr>
  )
}

export default ProductRow
