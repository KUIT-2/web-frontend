import React from "react";
import useCartStore from "../../store/cartStore";

const OrderBar = () => {
    const menus = useCartStore((state) => state.menus);
    const store = useCartStore((state) => state.store);

    const handleOrder = () => {};

    return (
        <div>
            <div>총 주문금액</div>
            <div>{menus.reduce((acc, currentMenu) => acc + currentMenu.price, 0)}원</div>
            <button onClick={handleOrder} type="button">
                {store?.name}에서 주문하기
            </button>
        </div>
    );
};

export default OrderBar;
