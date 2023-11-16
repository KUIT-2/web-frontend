import React from "react";
import Header from "../../components/Header/Header";
import * as S from "./Cart.styles";
import useCartStore from "../../store/cartStore";
import { ReactComponent as Warning } from "../../images/warning.svg";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { ReactComponent as RightChevron } from "../../images/rightChevron.svg";

const Cart = () => {
  const navigate = useNavigate();
  const store = useCartStore((state) => state.store);
  const menus = useCartStore((state) => state.menus);
  const totalPrice = menus.reduce(
    (acc, currentMenu) => acc + currentMenu.price,
    0
  );
  const groupedMenus = menus.reduce((acc, menu) => {
    const existingMenu = acc.find((m) => m.id === menu.id);

    if (existingMenu) {
      existingMenu.quantity += 1;
    } else {
      acc.push({ ...menu, quantity: 1 });
    }

    return acc;
  }, []);
  if (!store || menus.length === 0) {
    return (
      <S.Container>
        <Header isCartPage={true} />
        <p>장바구니가 비었습니다.</p>
      </S.Container>
    );
  }
  return (
    <S.Container>
      <Header isCartPage={true} />
      <S.StoreTitle>
        <h3>{store.name}</h3>
        {totalPrice + store.deliveryFee < store.minDeliveryPrice ? (
          <span>
            최소금액 미달
            <Warning />
          </span>
        ) : null}
      </S.StoreTitle>
      {groupedMenus.map((menu) => (
        <S.CartBox>
          <S.MenuImage />
          <S.MenuInfo>
            <h3>{menu.name}</h3>
            <span>{menu.ingredients}</span>
            <span>{menu.price.toLocaleString()}원</span>
          </S.MenuInfo>
          <p className="menu-quantity">{menu.quantity}개</p>
          <div className="chevron">
            <RightChevron />
          </div>
        </S.CartBox>
      ))}
      <S.AddMore
        onClick={() => {
          navigate(`/store/${store.id}`);
        }}
      >
        더 담기 +
      </S.AddMore>
      <S.OrderInfo>
        <p className="individual-info">
          <span>주문금액</span>
          {totalPrice.toLocaleString()}원
        </p>
        <p className="individual-info">
          <span>배달요금</span>
          {store.deliveryFee.toLocaleString()}원
        </p>
        <p className="total-price">
          <span>총 결제금액</span>
          {(totalPrice + store.deliveryFee).toLocaleString()}원
        </p>
      </S.OrderInfo>
      <S.BottomBox>
        <p>최소 주문금액 {store?.minDeliveryPrice.toLocaleString()}원</p>
        <Button
          isForbidden={totalPrice + store.deliveryFee < store.minDeliveryPrice}
        >
          {(totalPrice + store.deliveryFee).toLocaleString()}원 결제하기
        </Button>
      </S.BottomBox>
    </S.Container>
  );
};

export default Cart;
