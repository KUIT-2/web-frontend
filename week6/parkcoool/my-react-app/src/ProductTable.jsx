import React from "react";

import ProductRow from "./ProductRow";

const ProductTable = ({ category, products, setProducts, searchQuery, inStockOnly }) => {
    return (
        <table className="productTable">
            <caption>{category}</caption>
            <tbody>
                {products
                    .filter((product) => {
                        if (inStockOnly && !product.stocked) return false;
                        if (searchQuery === "") return true;
                        return product.name.toLowerCase().includes(searchQuery.toLowerCase());
                    })
                    .map((product) => (
                        <ProductRow key={product.id} product={product} setProducts={setProducts} />
                    ))}
            </tbody>
        </table>
    );
};

export default ProductTable;
