import React from "react";
import useCartStore from "../../store/cartStore";
import styles from "../../pages/Store/Store.module.css";

const MenuItem = ({ menu, isBest }) => {
    const addMenu = useCartStore((state) => state.addMenu);

    const handleAddMenu = () => {
        addMenu(menu);
    };

    return (
        <div className={styles.menu}>
            <div className={styles.left}>
                <img src="http://placehold.co/54" alt={menu.name}></img>
                <div className={styles.info}>
                    <h3 className={styles.name}>
                        {menu.name}
                        {isBest && <span className={styles.best}>BEST</span>}
                    </h3>
                    <span className={styles.price}>{menu.price.toLocaleString()}원</span>
                    <p className={styles.ingredients}>{menu.ingredients}</p>
                </div>
            </div>
            <button onClick={handleAddMenu} className={styles.addBtn}>
                담기
            </button>
        </div>
    );
};

export default MenuItem;
