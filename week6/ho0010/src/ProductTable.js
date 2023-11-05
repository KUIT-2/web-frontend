import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = ({ products, filterText, inStockOnly, deleteProduct }) => {
    let lastCategory = null;

    const filteredProducts = products
        .sort((a, b) => (a.category > b.category))
        .filter((product) => {
            const filterTextMatch = product.name
                .toLowerCase()
                .includes(filterText.toLowerCase());
            const inStockCheck = !inStockOnly || product.stocked;
            return filterTextMatch && inStockCheck;
        });
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {filteredProducts.map((product, index) => {
                    const categoryRow = product.category !== lastCategory && (
                        <ProductCategoryRow
                            category={product.category}
                            key={product.category}
                        />
                    );
                    lastCategory = product.category;
                    return (
                        <React.Fragment key={index}>
                            {categoryRow}
                            <ProductRow
                                product={product}
                                deleteProduct={deleteProduct}

                            />
                        </React.Fragment>
                    );
                })}
            </tbody>
        </table>
    );
};

export default ProductTable;