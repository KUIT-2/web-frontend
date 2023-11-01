import React, { useState } from "react";

import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const FilterableProductTable = ({ products, setProducts }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [inStockOnly, setInStockOnly] = useState(false);
    return (
        <div>
            <h1>Product Manager</h1>
            <SearchBar setSearchQuery={setSearchQuery} setInStockOnly={setInStockOnly} />
            <ProductTable
                products={products}
                setProducts={setProducts}
                searchQuery={searchQuery}
                inStockOnly={inStockOnly}
            />
        </div>
    );
};

export default FilterableProductTable;
