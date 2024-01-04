import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

const ProductTable = ({ products, filterText, inStockOnly, deleteProduct }) => {
  const rows = [];
  let lastCategory = null;

  products
    .filter((product) => {
      // 필터링 로직
      if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        return false;
      }

      if (inStockOnly && !product.stocked) {
        return false;
      }

      return true;
    })
    .sort((a, b) => {
      // 카테고리 오름차순 정렬, 동일한 카테고리 내에서는 이름 오름차순 정렬
      if (a.category !== b.category) {
        return a.category.localeCompare(b.category);
      }
      return a.name.localeCompare(b.name);
    })
    .map((product) => {
      // 렌더링 로직
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }

      rows.push(<ProductRow product={product} key={product.name} deleteProduct={deleteProduct} />);

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
      <tbody>
        {/* // return (
                // <tr key={product.name}>
                //     <td>{product.name}</td>
                // </tr>
                // ); */}
        {rows}
      </tbody>
    </table>
  );
};

export default ProductTable;
