import React, { useState } from "react";
import FilterableProductTable from "./FilterableProductTable";

const App = () =>  {

  // useState를 활용하여 products 상태와 상태를 업데이트하는 setProducts 함수 생성
  // products 배열은 상품 목록을 나타내며 초기 데이터로 여러 상품 객체를 포함함
  const [products, setProducts] = useState([
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  ]);

  // FilterableProductTable 컴포넌트를 렌더링
  // products 상태와 setProducts 함수를 FilterableProductTable 컴포넌트로 전달하여 하위 컴포넌트에서 이 데이터를 사용할 수 있도록 한다.
  return <FilterableProductTable products={products} setProducts={setProducts}/>;
};

export default App;
