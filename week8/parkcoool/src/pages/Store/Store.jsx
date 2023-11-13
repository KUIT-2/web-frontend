import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import MenuItem from "../../components/MenuItem/MenuItem";
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
                <div className={styles.titleContainer}>
                    <h1>{store.name}</h1>
                </div>
                <div className={styles.ratingContainer}>
                    <span className={styles.rating}>
                        <img src="/img/yellow_star.svg" alt="평점"></img>
                        {store.rate}
                    </span>
                    <span className={styles.review}>리뷰 {store.reviewCnt.toLocaleString()}</span>
                </div>
                <div className={styles.infoContainer}>
                    <p>
                        <span className={styles.key}>결제방법</span>
                        <span className={styles.value}>{"토스결제만 현장결제 안 됨"}</span>
                    </p>
                    <p>
                        <span className={styles.key}>최소주문</span>
                        <span className={styles.value}>{store.minDeliveryPrice.toLocaleString()}원</span>
                    </p>
                    <p>
                        <span className={styles.key}>배달시간</span>
                        <span className={styles.value}>
                            약 {store.minDeliveryTime}-{store.maxDeliveryTime}분
                        </span>
                    </p>
                </div>
            </div>
            <div>
                {store.menus.map((menu, index) => {
                    return <MenuItem key={menu.id} isBest={index === 0} menu={menu} />;
                })}
            </div>
        </div>
    );
};

export default Store;
