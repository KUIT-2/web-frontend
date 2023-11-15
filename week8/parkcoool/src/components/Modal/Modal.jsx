import React from "react";
import useCartStore from "../../store/cartStore";
import styles from "./Modal.module.css";

const Modal = () => {
    const { askingStoreSwitch, switchStore } = useCartStore((state) => state);

    const handleCancel = () => {
        switchStore(false);
    };
    const handleSubmit = () => {
        switchStore(true);
    };

    if (!askingStoreSwitch) return null;

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <h1 className={styles.title}>주문서에는 같은 가게만 담을 수 있어요</h1>
                <p className={styles.description}>새로 담고 이전에 담은 메뉴는 삭제할까요?</p>
                <div>
                    <button type="button" className="secondaryBtn" onClick={handleCancel}>
                        취소
                    </button>
                    <button type="button" className="primaryBtn" onClick={handleSubmit}>
                        새로 담기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
