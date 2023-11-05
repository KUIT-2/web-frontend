import React, {useState} from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import InputBar from "./InputBar";

// FilterableProductTable 컴포넌트를 정의
// products 상태와 setProducts 함수를 props로 받음
const FilterableProductTable = ({ products, setProducts }) => {
    // filterText와 inStockOnly라는 로컬 상태를 생성
    // filterText: 검색 필터 텍스트 관리
    // inStockOnly: 재고 여부 필터 관리
    const [filterText, setFilterText] = useState("");
    const [inStockOnly, setInStockOnly] = useState(false);

    // addProduct 함수 정의
    // 새로운 상품을 products 배열에 추가하는 역할
    // 이전 상태를 기반으로 새로운 배열을 생성하여 업데이트
    const addProduct = (newProduct) => {
        // setProducts([...products, newProduct]);
        setProducts((previousData) => [...previousData, newProduct]);
        // products = [{}, {}, {}, ..., {} ]
        // newProducts = [...products, { newProduct }]
    };

    /*
    SearchBar 컴포넌트는 검색 필터 및 재구 여부 필터를 설정하고 업데이트하기 위한 입력 요소를 제공
    filterText와 inStockOnly prop을 전달, 해당 값들이 업데이트되면 setFilterText와 setInStockOnly를 호출하여 이 값들을 업데이트

    ProductTable 컴포넌트는 상품 목록을 표시하고 필터링하는 역할
    products, filterText, inStockOnly prop을 받아와서 필터링된 결과를 표시

    InputBar 컴포넌트는 새로운 상품을 추가하기 위한 입력 요소를 제공
    addProduct 콜백 함수를 prop으로 전달하여 새로운 상품을 추가할 수 있도록 함

    */
    return ( 
        <div> 
            <SearchBar 
            filterText={filterText} 
            inStockOnly = {inStockOnly}
            onFilterTextChange={setFilterText}
            onInStockOnlyChange={setInStockOnly}
            />
            <ProductTable
            setProducts = {setProducts}
            products={products}
            filterText={filterText}
            inStockOnly = {inStockOnly}
            />

            <InputBar addProduct = {addProduct} />
        </div>
    );
};


export default FilterableProductTable;