import React from 'react'
import ProductRow from './ProductRow';
import * as S from './ProductTable.styles'

const ProductTable = ({ products, deleteProduct }) => {
  const productsByCategory = products.reduce((acc, product) => {
    acc[product.category] = acc[product.category] || [];
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    
      <div>
      {Object.keys(productsByCategory).map((category) => (
        <div key={category}>
            <S.CategoryLine>
              <h3>{category}</h3>
            </S.CategoryLine>
            <ul>
              {productsByCategory[category].map((product, index) => (
                <ProductRow key={product.name} deleteProduct={deleteProduct} product={product} />
              ))}
            </ul>
        </div>
      ))}
    </div>
  )
}

export default ProductTable