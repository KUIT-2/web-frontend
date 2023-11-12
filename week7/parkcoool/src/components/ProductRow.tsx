import React from "react";

import styles from "./ProductRow.module.css";
import { Product, ModalState } from "../types";

interface ProductRowProps {
    product: Product;
    setModalState: React.Dispatch<React.SetStateAction<ModalState>>;
}

const handleClick = (product: Product, setModalState: React.Dispatch<React.SetStateAction<ModalState>>) => {
    setModalState(
        (prevState) => ({ ...prevState, title: "Edit Exsiting Item", enabled: true, product: product } as ModalState)
    );
};

const ProductRow: React.FC<ProductRowProps> = ({ product, setModalState }) => {
    return (
        <tr className={styles.row}>
            <td>{product.name}</td>
            <td>${product.price}</td>
            <td className={styles.btnCol}>
                <button
                    onClick={() => {
                        handleClick(product, setModalState);
                    }}
                    className={styles.editBtn}
                >
                    ✏️
                </button>
            </td>
        </tr>
    );
};

export default ProductRow;
