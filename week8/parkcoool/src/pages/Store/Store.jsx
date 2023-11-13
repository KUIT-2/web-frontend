import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import MenuItem from "../../components/MenuItem/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar";
import styles from "./Store.module.css";

import stores from "../../models/stores";
import useCartStore from "../../store/cartStore";

const Store = () => {
    const { storeId } = useParams();
    const setStore = useCartStore((state) => state.setStore);

    const store = stores.find((s) => s.id.toString() === storeId);

    useEffect(() => {
        if (store) {
            setStore(store);
        }
    }, []);

    if (!store) {
        return (
            <div>
                <div className="header">
                    <h1>가게를 찾을 수 없어요 🥺</h1>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="header">
                <h1>{store.name}</h1>
            </div>
            <div clasName={styles.rating}>
                <span clssName={styles.score}>{store.rate}</span>
                <span className={styles.review}>리뷰 {store.reviewCnt.toLocaleString()}</span>
            </div>
            <div clasName={styles.info}>
                <p></p>
            </div>
            <div>
                {store.menus.map((menu) => {
                    return <MenuItem key={menu.id} menu={menu} />;
                })}
            </div>
            <OrderBar />
        </div>
    );
};

export default Store;
