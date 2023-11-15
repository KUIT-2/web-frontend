import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Cart.module.css";
import useCartStore from "../../store/cartStore";

const Cart = () => {
    const { store, menus, getTotal } = useCartStore((state) => state);
    const navigate = useNavigate();

    const handleAddMore = () => {
        navigate(`/store/${store.id}`);
    };
    const isEnoughPrice = getTotal() < store.minDeliveryPrice;

    return (
        <div>
            <div className={styles.storeInfo}>
                <h1>{store.name}</h1>
                {isEnoughPrice && (
                    <span className={styles.lowPrice}>
                        최소금액 미달
                        <img src="/img/warning.svg" alt="최소금액 미달"></img>
                    </span>
                )}
            </div>
            <div className={styles.itemContainer}>
                <button className={styles.addMore} onClick={handleAddMore}>
                    더 담기 +
                </button>
            </div>
            <div className={styles.price}>
                <span>
                    <span>주문금액</span>
                    <span>{getTotal().toLocaleString()}원</span>
                </span>
                <span>
                    <span>배달요금</span>
                    <span>{store.deliveryFee.toLocaleString()}원</span>
                </span>

                <span className={styles.total}>
                    <span>총 결제금액</span>
                    <span>{(getTotal() + store.deliveryFee).toLocaleString()}원</span>
                </span>
            </div>
        </div>
    );
};

export default Cart;
