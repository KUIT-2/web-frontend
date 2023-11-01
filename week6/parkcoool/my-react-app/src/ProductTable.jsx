import React, { useState } from "react";

import ProductRow from "./ProductRow";

const ProductTable = ({ products, searchQuery, inStockOnly }) => {
    // category─Products[] 쌍으로 이루어진 Object 생성
    const categories = {};
    for (const product of products) {
        if (!(product.category in categories)) categories[product.category] = [];
        categories[product.category].push(product);
    }

    return (
        <div className="productTableContainer">
            {Object.keys(categories).map((category) => (
                <table className="productTable" key={category}>
                    <caption>{category}</caption>
                    <tbody>
                        {categories[category]
                            .filter((product) => {
                                if (inStockOnly && !product.stocked) return false;
                                if (searchQuery === "") return true;
                                return product.name.toLowerCase().includes(searchQuery.toLowerCase());
                            })
                            .map((product) => (
                                <ProductRow key={product.id} product={product} />
                            ))}
                    </tbody>
                </table>
            ))}
        </div>
    );
};

export default ProductTable;
