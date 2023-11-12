import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import styles from "./Modal.module.css";
import { Product, ModalState } from "../types";

interface ModalProps {
    ModalState: ModalState;
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
    setModalState: React.Dispatch<React.SetStateAction<ModalState>>;
}

const Modal: React.FC<ModalProps> = ({ ModalState, setProducts, setModalState }) => {
    const [values, setValues] = useState({
        category: ModalState.product.category,
        name: ModalState.product.name,
        price: ModalState.product.price,
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
            if (ModalState.product.id === "") {
                index = newProducts.length;
                ModalState.product.id = uuidv4();
            } else index = newProducts.findIndex((p) => p.id === ModalState.product.id);

            newProducts[index] = { ...ModalState.product, ...values };
            return newProducts;
        });
        closeModal();
    };

    return (
        <div className={styles.overlay} onClick={handleClick}>
            <form className={styles.modal} onSubmit={handleSubmit}>
                <h1 className={styles.title}>{ModalState.title}</h1>
                <div className={styles.inputBlock}>
                    <label htmlFor="productCateogry">Category</label>
                    <input
                        type="text"
                        id="productCateogry"
                        name="category"
                        placeholder="category"
                        className={styles.textBox}
                        defaultValue={ModalState.product.category}
                        onChange={handleChange}
                    ></input>
                </div>

                <div className={styles.inputBlock}>
                    <label htmlFor="productName">Name</label>
                    <input
                        type="text"
                        id="productName"
                        name="name"
                        placeholder="name"
                        className={styles.textBox}
                        defaultValue={ModalState.product.name}
                        onChange={handleChange}
                    ></input>
                </div>

                <div className={styles.inputBlock}>
                    <label htmlFor="productPrice">Price ($)</label>
                    <input
                        type="number"
                        id="productPrice"
                        name="price"
                        placeholder="price"
                        className={styles.textBox}
                        defaultValue={ModalState.product.price}
                        onChange={handleChange}
                    ></input>
                </div>
                <input type="submit" className={styles.submitBtn}></input>
            </form>
        </div>
    );
};

export default Modal;
