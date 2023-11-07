import React from "react";

import ProductTable from "./ProductTable";

const ProductTableContainer = ({ products, setProducts, searchQuery, inStockOnly }) => {
    // category─Products[] 쌍으로 이루어진 Object 생성
    const categories = {};
    for (const product of products) {
        if (!(product.category in categories)) categories[product.category] = [];
        categories[product.category].push(product);
    }

    return (
        <div className="productTableContainer">
            {Object.keys(categories).map((category) => (
                <ProductTable
                    category={category}
                    products={categories[category]}
                    setProducts={setProducts}
                    searchQuery={searchQuery}
                    inStockOnly={inStockOnly}
                    key={category}
                />
            ))}
        </div>
    );
};

export default ProductTableContainer;
