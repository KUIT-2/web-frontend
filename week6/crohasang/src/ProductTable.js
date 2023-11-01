import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import FilterableProductTable from "./FilterableProductTable";

// products: 상품 목록
// filterText: 검색 필터 텍스트
// inStockOnly: 재고 여부 필터
const ProductTable = ({ products, setProducts, filterText, inStockOnly }) => {
    // rows: 테이블의 행을 저장하기 위한 빈 배열
    // lastCategory: 마지막으로 처리한 카테고리 추적
    const rows = [];
    let lastCategory = null;

    const deleteProduct = (deleteProduct) => {

        // products 배열에서 deleteProduct를 제외한 새 배열을 생성
        const updatedProducts = products.filter(product => product !== deleteProduct);

        // setProducts 함수를 사용하여 상태 업데이트
        setProducts(updatedProducts);  
    };

    const modifyProduct = (productToModify, modifiedName, modifiedPrice) => {
      
      // products 배열에서 수정할 product를 찾아 수정된 정보로 업데이트
      const updatedProducts = products.map(product => {
          
        if (product === productToModify) {
              return {
                  ...product,
                  name: modifiedName,
                  price: modifiedPrice
              };
          }
          
          return product;
      });

      // setProducts 함수를 사용하여 상태 업데이트
      setProducts(updatedProducts);
  };


    products
    .sort((a, b) => a.category > b.category)
    .map((product) => {
        // 검색 필터 텍스트가 상품의 이름에 포함되지 않는 경우, 해당 상품은 건너 뛴다.
      if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        return;
      }

      // 재고 여부 필터가 활성화되고 상품이 재고가 없는 경우, 해당 상품은 건너 뛴다.
      if (inStockOnly && !product.stocked) {
        return;
      }

      // 현재 상품의 카테고리가 이전 카테고리와 다를 경우, ProductCategoryRow 컴포넌트를 추가하여 새로운 카테고리를 나타낸다.
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
        );
      }
        // ProductRow 컴포넌트를 추가하여 현재 상품을 나타낸다. key는 상품의 이름으로
        rows.push(<ProductRow product={product} key={product.name} deleteProduct = {deleteProduct} modifyProduct={modifyProduct} />);

        // 현재 카테고리를 lastCategory에 할당하여 다음 상품과 비교할 때 사용
        lastCategory = product.category;

        
    })
    
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