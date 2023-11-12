import React from "react";
import ProductRow from "./ProductRow";

const ProductTable = ({ products, setProducts }) => {
  const productsByCategory = products.reduce((acc, product) => {
    acc[product.category] = acc[product.category] || [];
    acc[product.category].push(product);
    return acc;
  }, {});

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
    
      setProducts(updatedProducts);
  
}


  return (
    <div>
      {Object.keys(productsByCategory).map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          <ul>
            {productsByCategory[category].map((product) => (
              <ProductRow key={product.name} product={product} deleteProduct={deleteProduct} modifyProduct={modifyProduct} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProductTable;
