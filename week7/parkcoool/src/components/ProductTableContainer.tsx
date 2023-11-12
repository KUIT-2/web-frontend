import React from "react";

import styles from "./ProductTableContainer.module.css";
import { Product, Filter, ModalState } from "../types";

import ProductTable from "./ProductTable";

interface ProductTableContainerProps {
    products: Product[];
    filter: Filter;
    setModalState: React.Dispatch<React.SetStateAction<ModalState>>;
}

const ProductTableContainer: React.FC<ProductTableContainerProps> = ({ products, filter, setModalState }) => {
    const categorizedProducts = products.reduce((acc, product) => {
        // filter 적용
        if (!product.onStock && filter.onStock) return acc;
        if (!product.name.toLowerCase().includes(filter.searchQuery.toLowerCase())) return acc;
        // category 별로 분류
        if (acc[product.category]) acc[product.category].push(product);
        else acc[product.category] = [product];

        return acc;
    }, {} as { [category: string]: Product[] });

    return (
        <div className={styles.container}>
            {Object.keys(categorizedProducts).map((category) => (
                <ProductTable
                    key={category}
                    category={category}
                    products={categorizedProducts[category]}
                    setModalState={setModalState}
                />
            ))}
        </div>
    );
};

export default ProductTableContainer;
