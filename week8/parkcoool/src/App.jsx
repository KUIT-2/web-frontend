import React, { useEffect } from "react";
import Router from "./pages";
import styles from "./App.module.css";

import { getCart } from "./apis/cart";
import useCartStore from "./store/cartStore";

function App() {
    const { addMenu } = useCartStore((state) => state);
    useEffect(() => {
        getCart().then((data) => {
            data.menus.forEach((item) => {
                addMenu(data.store, item);
            });
        });
    }, [addMenu]);

    return (
        <div className={styles.app}>
            <Router />
        </div>
    );
}

export default App;
