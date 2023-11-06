import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = ({ products, deleteProduct, editProduct }) => {
  const productsByCategory = products.reduce((acc, product) => {
    acc[product.category] = acc[product.category] || [];
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div>
      {Object.keys(productsByCategory).map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          <ul>
            {productsByCategory[category].map((product) => (
              <ProductRow
                key={product.name}
                product={product}
                deleteProduct={deleteProduct}
                editProduct={editProduct}
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProductTable;
