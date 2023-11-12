import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Stores.module.css";

import categories from "../../models/categories";
import stores from "../../models/stores";
import StoreRow from "./StoreRow";

const Stores = () => {
    const { categoryId } = useParams();
    const category = categories.find((c) => c.id.toString() === categoryId);

    if (!category) {
        return (
            <div>
                <div className="header">
                    <h1>카테고리를 찾을 수 없어요 🥺</h1>
                </div>
            </div>
        );
    }

    const storesInCategory = stores.filter((store) => store.categoryId === category.id);
    

    return (
        <div>
            <div className="header">
                <h1>{category.kor}</h1>
            </div>
            <div className={styles.storeContainer}>
                {storesInCategory.map((store, index) => (
                    <StoreRow store={store} index={index} key={store.id}></StoreRow>
                ))}
            </div>
        </div>
    );
};

export default Stores;
