import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import InputBar from "./InputBar";

const FilterableProductTable = ({ products, setProducts }) => {
    const [filterText, setFilterText] = useState("");
    const [inStockOnly, setInStockOnly] = useState(false);

    const addProduct = (newProduct) => {
        setProducts((previousData) => [...previousData, newProduct])
        // React에서 배열 데이터를 변경하는 아이디어
        // products = [{},{},{}, ...,{}] 
        //newProducts = [...products, {newProduct}]
    }
    const deleteProduct = (deleteProductName) => {
        setProducts(products.filter((product) => product.name !== deleteProductName))
        // 내장함수인 filter를 이용해 false가 나오면 객체 제외
        // const newProductList = products.filter((it) => it.name !== deleteProductName)
        // setProducts(newProductList)
    }

    return (<div>
        <SearchBar filterText={filterText}
            inStockOnly={inStockOnly}
            onFilterTextChange={setFilterText}
            onInStockOnlyChange={setInStockOnly}
        />
        <ProductTable
            products={products}
            filterText={filterText}
            inStockOnly={inStockOnly}
            deleteProduct={deleteProduct}
        />
        <InputBar addProduct={addProduct} />

    </div>
    );
};

export default FilterableProductTable;