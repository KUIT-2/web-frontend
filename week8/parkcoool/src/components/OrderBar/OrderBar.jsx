import React from "react";

import useCartStore from "../../store/cartStore";
import styles from "./OrderBar.module.css";
import { useNavigate, useLocation } from "react-router-dom";

const OrderBar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const menus = useCartStore((state) => state.menus);
    const store = useCartStore((state) => state.store);
    const getTotal = useCartStore((state) => state.getTotal);

    const handleOrder = () => {
        navigate("/cart");
    };

    if (!store || menus.length === 0) return null;
    if (location.pathname === "/cart") return null;

    return (
        <div className={styles.orderBar}>
            <div className={styles.priceContainer}>
                <div className={styles.title}>총 주문금액</div>
                <div className={styles.price}>{getTotal().toLocaleString()}원</div>
            </div>
            <button onClick={handleOrder} type="button" className={`${styles.orderBtn} primaryBtn`}>
                {store?.name}에서 주문하기
            </button>
        </div>
    );
};

export default OrderBar;
