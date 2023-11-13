import React from 'react';
import { Product } from '../../../store/type/product';
import ProductRow from '../ProductRow/ProductRow';
import ProductTableHead from '../ProductTableHead/ProductTableHead';
import styles from './ProductTable.module.css';

type Props = {
  products: Product[];
  deleteProduct: (name: string) => void;
  editProduct: (name: string, newProduct: Product) => void;
};

type ProductsByCategory = {
  [key: string]: Product[];
};

const ProductTable = ({ products, deleteProduct, editProduct }: Props) => {
  const productsByCategory = products.reduce(
    (acc: ProductsByCategory, product) => {
      acc[product.category] = acc[product.category] || [];
      acc[product.category].push(product);
      return acc;
    },
    {}
  );

  return (
    <div>
      <ProductTableHead />
      {Object.keys(productsByCategory).map((category, index) => (
        <div className={styles.table} key={category}>
          <h3 className={styles.category}>{category}</h3>
          <ul className={styles.list}>
            {productsByCategory[category].map((product) => (
              <ProductRow
                key={product.name + index + Date.now()}
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
