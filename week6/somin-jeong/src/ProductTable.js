import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow';

const ProductTable = ({ products, filterText, inStockOnly, deleteProduct }) => {
  const rows = [];
  let lastCategory = null;

  products
    .sort((a,b) => a.category > b.category)
    .map((product, index) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }

    if (inStockOnly && !product.stocked) {
      return;
    }

    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
    }
    rows.push(<ProductRow product={product} deleteProduct={deleteProduct} index={index} key={product.name} />);

    lastCategory = product.category;
  })

  return <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </table>
}

export default ProductTable