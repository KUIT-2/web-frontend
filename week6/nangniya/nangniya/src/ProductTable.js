import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = ({
  products,
  filterText,
  inStockOnly,
  deleteProduct,
  editProduct,
}) => {
  const rows = [];
  let lastCategory = null;

  products
    .sort((a, b) => (a.category > b.category ? 1 : -1))
    .map((product) => {
      if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        return;
      }

      if (inStockOnly && !product.stocked) {
        return;
      }

      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
        );
      }

      rows.push(
        <ProductRow
          product={product}
          key={product.name}
          deleteProduct={deleteProduct}
          editProduct={editProduct}
        />
      );

      lastCategory = product.category;
    });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default ProductTable;
