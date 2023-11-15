import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Cart.module.css";
import useCartStore from "../../store/cartStore";

const Cart = () => {
    const { store, menus, getTotal, reset } = useCartStore((state) => state);
    const navigate = useNavigate();

    const handleAddMore = () => {
        navigate(`/store/${store.id}`);
    };
    const handlePurchase = () => {
        alert(`${getTotal().toLocaleString()}원 결제 완료`);
        reset();
        navigate("/");
    };

    const isEnoughPrice = getTotal() < store.minDeliveryPrice;

    const menuSet = {};
    // key: menu의 id
    // value: 기존 menu 정보에 count 속성이 추가된 object
    menus.forEach((menu) => {
        if (!(menu.id in menuSet))
            menuSet[menu.id] = {
                ...menu,
                count: 1,
            };
        else
            menuSet[menu.id] = {
                ...menu,
                count: menuSet[menu.id].count + 1,
            };
    });

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
                {Object.entries(menuSet).map(([key, value]) => (
                    <Item key={key} menu={value} />
                ))}
                <button className={styles.addMore} onClick={handleAddMore}>
                    더 담기 +
                </button>
            </div>
            <div className={styles.price}>
                <span className={styles.sub}>
                    <span>주문금액</span>
                    <span>{getTotal().toLocaleString()}원</span>
                </span>
                <span className={styles.sub}>
                    <span>배달요금</span>
                    <span>{store.deliveryFee.toLocaleString()}원</span>
                </span>
                <span className={styles.total}>
                    <span>총 결제금액</span>
                    <span>{(getTotal() + store.deliveryFee).toLocaleString()}원</span>
                </span>
            </div>
            <div className={styles.order}>
                <p>최소 주문금액 {store.minDeliveryPrice.toLocaleString()}원</p>
                <button className={`primaryBtn ${styles.orderBtn}`} onClick={handlePurchase} disabled={isEnoughPrice}>
                    {getTotal().toLocaleString()}원 결제하기
                </button>
            </div>
        </div>
    );
};

const Item = ({ menu }) => {
    return (
        <div className={styles.item}>
            <div className={styles.itemInfo}>
                <img src="http://placehold.co/54" alt={menu.name}></img>
                <div className={styles.itemDescription}>
                    <h1>{menu.name}</h1>
                    <p>{menu.ingredients} 추가</p>
                    <p>{(menu.price * menu.count).toLocaleString()}원</p>
                </div>
            </div>
            <div className={styles.itemModify}>
                <span>{menu.count.toLocaleString()}개</span>
                <button>
                    <img src="/img/arrow.svg" alt={menu.name}></img>
                </button>
            </div>
        </div>
    );
};

export default Cart;
