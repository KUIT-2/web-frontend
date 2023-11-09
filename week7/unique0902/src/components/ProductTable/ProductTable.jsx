import React from 'react';
import ProductRow from '../ProductRow/ProductRow';
import ProductTableHead from '../ProductTableHead/ProductTableHead';
import styles from './ProductTable.module.css';
const ProductTable = ({ products, deleteProduct, editProduct }) => {
  const productsByCategory = products.reduce((acc, product) => {
    acc[product.category] = acc[product.category] || [];
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div>
      <ProductTableHead />
      {Object.keys(productsByCategory).map((category) => (
        <div className={styles.table} key={category}>
          <h3 className={styles.category}>{category}</h3>
          <ul className={styles.list}>
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
