import React from 'react'

const ProductRow = ({ product, setProducts }) => {
  // {category: "Fruits", price: "$1", stocked: true, name: "Apple"}

  const deleteProduct = (product, ...rest) => {
    setProducts((prev) => {
      // prev 배열에서 product 객체 필터링
      const newProducts = prev.filter((p) => p !== product);
      return newProducts;
    });
  }

  const handleDeleteProduct = (product) => {
    deleteProduct(product);
  }

  return (
  <tr>
    <td style={{ color: product.stocked ? "black" : "red" }}>
      {product.name}
    </td>
    <td>{product.price}</td>
    <td>
      <button type={"button"} onClick={() => handleDeleteProduct(product)}>✖️</button>
      </td>
  </tr>
  );
}

export default ProductRow