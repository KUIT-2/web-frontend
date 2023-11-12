import React from "react";

import styles from "./ProductTable.module.css";
import { Product, ModalState } from "../types";
import ProductRow from "./ProductRow";

interface ProductTableProps {
    category: string;
    products: Product[];
    setModalState: React.Dispatch<React.SetStateAction<ModalState>>;
}

const ProductTable: React.FC<ProductTableProps> = ({ category, products, setModalState }) => {
    return (
        <table className={styles.table}>
            <caption className={styles.title}>{category}</caption>
            <tbody>
                {products.map((product) => (
                    <ProductRow key={product.id} product={product} setModalState={setModalState} />
                ))}
            </tbody>
        </table>
    );
};

export default ProductTable;
