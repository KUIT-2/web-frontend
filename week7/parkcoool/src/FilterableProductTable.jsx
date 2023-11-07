import React, { useState } from "react";

import SearchBar from "./SearchBar";
import ProductTableContainer from "./ProductTableContainer";
import NewProductForm from "./NewProductForm";

const FilterableProductTable = ({ products, setProducts }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [inStockOnly, setInStockOnly] = useState(false);
    return (
        <div>
            <h1>Product Manager</h1>
            <div className="topBar">
                <SearchBar setSearchQuery={setSearchQuery} setInStockOnly={setInStockOnly} />
                <NewProductForm setProducts={setProducts} />
            </div>
            <ProductTableContainer
                products={products}
                setProducts={setProducts}
                searchQuery={searchQuery}
                inStockOnly={inStockOnly}
            />
        </div>
    );
};

export default FilterableProductTable;
