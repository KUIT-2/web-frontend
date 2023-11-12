import React from "react";
import { v4 as uuidv4 } from "uuid";

import "./App.css";
import { Product, Filter, ModalState } from "./types";

import ProductTableContainer from "./components/ProductTableContainer";
import Header from "./components/Header";
import Modal from "./components/Modal";

const App = () => {
    const [products, setProducts] = React.useState([
        { id: uuidv4(), category: "Fruits", price: 2, name: "Apple", onStock: true as boolean },
        { id: uuidv4(), category: "Fruits", price: 5, name: "Banana", onStock: true as boolean },
        { id: uuidv4(), category: "Fruits", price: 3, name: "Cherry", onStock: true as boolean },
        { id: uuidv4(), category: "Fruits", price: 6, name: "Durian", onStock: true as boolean },
        { id: uuidv4(), category: "Vegetables", price: 3, name: "Broccoli", onStock: true as boolean },
        { id: uuidv4(), category: "Vegetables", price: 2, name: "Cabbage", onStock: true as boolean },
        { id: uuidv4(), category: "Snacks", price: 5, name: "Cheese Ball", onStock: true as boolean },
        { id: uuidv4(), category: "Snacks", price: 1, name: "Chocolate", onStock: true as boolean },
        { id: uuidv4(), category: "Snacks", price: 2, name: "Candy", onStock: true as boolean },
    ] as Product[]);

    const [modalState, setModalState] = React.useState({
        enabled: false as boolean,
    } as ModalState);

    const [filter, setFilter] = React.useState({ searchQuery: "", onStock: false } as Filter);

    const emptyProudct = {
        id: "",
        category: "",
        price: 0,
        name: "",
        onStock: true,
    } as Product;

    return (
        <>
            {modalState.enabled && (
                <Modal ModalState={modalState} setProducts={setProducts} setModalState={setModalState} />
            )}
            <button
                className="modalBtn"
                onClick={() =>
                    setModalState({ title: "Add New Item", enabled: true, product: emptyProudct } as ModalState)
                }
            >
                +
            </button>
            <Header setFilter={setFilter} />
            <ProductTableContainer products={products} filter={filter} setModalState={setModalState} />
        </>
    );
};

export default App;
