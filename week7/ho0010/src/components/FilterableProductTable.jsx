import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import ProductForm from "./ProductForm ";

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

    const filteredProducts = products.filter((product) => {
        const nameMatches = product.name
            .toLowerCase()
            .includes(filterText.toLowerCase());
        const stockMatches = !inStockOnly || product.stocked;
        return nameMatches && stockMatches;
    });

    return (<div>
        <SearchBar filterText={filterText}
            inStockOnly={inStockOnly}
            onFilterTextChange={setFilterText}
            onInStockOnlyChange={setInStockOnly}
        />
        <ProductTable
            products={filteredProducts}
            deleteProduct={deleteProduct}
        />
        <ProductForm addProduct={addProduct} />

    </div>
    );
};

export default FilterableProductTable;