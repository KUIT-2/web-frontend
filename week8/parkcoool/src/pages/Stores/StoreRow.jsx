import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Stores.module.css";

const StoreRow = ({ store, index }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/store/${store.id}`);
    };

    return (
        <div className={styles.store} onClick={handleClick} tabIndex="0">
            <img src="http://placehold.co/54" alt={store.name}></img>
            <div className={styles.description}>
                {index <= 2 && <h1>{index + 1}위</h1>}
                <h1>{store.name}</h1>
                <h2>
                    <img src="/img/star.svg" alt="평점"></img>
                    {store.rate} ({store.reviewCnt.toLocaleString()})
                </h2>
                <h2>
                    {store.minDeliveryTime}분~{store.maxDeliveryTime}분 ㆍ 배달비 {store.deliveryFee.toLocaleString()}원
                </h2>
            </div>
        </div>
    );
};

export default StoreRow;
