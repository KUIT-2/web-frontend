import React, { useState } from "react";

import styles from "./Modal.module.css";
import { Product, ModalState } from "../types";

interface ModalProps {
    product: Product;
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
    setModalState: React.Dispatch<React.SetStateAction<ModalState>>;
}

const Modal: React.FC<ModalProps> = ({ product, setProducts, setModalState }) => {
    const [values, setValues] = useState({
        category: product.category,
        name: product.name,
        price: product.price,
    });

    const closeModal = () => {
        setModalState((prevState) => ({ ...prevState, enabled: false } as ModalState));
    };

    const handleChange: React.FormEventHandler<HTMLInputElement> = (e) => {
        setValues((prevValues) => {
            const target = e.target as HTMLInputElement;
            return { ...prevValues, [target.name]: target.value };
        });
    };

    const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
        if (e.target === e.currentTarget) closeModal();
    };

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        setProducts((prevProducts) => {
            const newProducts = [...prevProducts];

            let index;
            if (product.id === "") index = newProducts.length;
            else index = newProducts.findIndex((p) => p.id === product.id);

            newProducts[index] = { ...product, ...values };
            return newProducts;
        });
        closeModal();
    };

    return (
        <div className={styles.overlay} onClick={handleClick}>
            <form className={styles.modal} onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="productCateogry"
                    name="category"
                    placeholder="category"
                    defaultValue={product.category}
                    onChange={handleChange}
                ></input>
                <input
                    type="text"
                    id="productName"
                    name="name"
                    placeholder="name"
                    defaultValue={product.name}
                    onChange={handleChange}
                ></input>
                <input
                    type="number"
                    id="productPrice"
                    name="price"
                    placeholder="price"
                    defaultValue={product.price}
                    onChange={handleChange}
                ></input>
                <input type="submit" value="확인"></input>
            </form>
        </div>
    );
};

export default Modal;
