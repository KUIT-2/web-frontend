import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = ({ products, deleteProductRow }) => {
  const productByCategory = products.reduce((acc, product) => {
    acc[product.category] = acc[product.category] || [];
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div>
      {Object.keys(productByCategory).map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          <ul>
            {productByCategory[category].map((product) => (
              <ProductRow
                key={product.name}
                product={product}
                deleteProductRow={deleteProductRow}
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProductTable;
