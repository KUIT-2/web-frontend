import React from "react";
import Header from "../../components/Header/Header";
import styled from "styled-components";
import useCartStore from "../../store/cartStore";
import { ReactComponent as Warning } from "../../images/warning.svg";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  margin-top: 40px;
  margin-bottom: 130px;
`;

const BottomBox = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 130px;
  padding: 20px;
  background-color: white;
  gap: 20px;
  p {
    display: flex;
    justify-content: center;
    font-weight: bold;
    color: #6b7684;
  }
  button {
    padding: 20px;
    border-radius: 16px;
  }
`;

const StoreTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  border-top: 16px solid #ececec;
  padding: 20px;
  h3 {
    color: #6b7684;
  }
  span {
    color: #f1505d;
    display: flex;
    gap: 5px;
  }
`;
const CartBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const MenuImage = styled.div`
  display: flex;
  border-radius: 12px;
  width: 54px;
  height: 54px;
  background-color: #ececec;
`;

const MenuInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  font-weight: bold;
  max-width: 200px;
  justify-content: space-between;
  gap: 5px;
  span {
    color: #6b7684;
    font-size: 12px;
  }
`;

const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  p {
    display: flex;
    justify-content: space-between;
    padding: 20px 20px 0 20px;
    font-weight: bold;
  }
  .individual-info {
    color: #6b7684;
    span {
      color: #8b95a1;
    }
  }
  .total-price {
    font-weight: bold;
    color: #4e5968;
    margin-top: 10px;
    font-size: 17px;
  }
`;

const AddMore = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #ececec;
  color: #3182f6;
  font-weight: bold;
  font-size: 17px;
  border-bottom: 16px solid #ececec;
  padding: 20px;
  height: 80px;
`;

const Cart = () => {
  const navigate = useNavigate();
  const store = useCartStore((state) => state.store);
  const menus = useCartStore((state) => state.menus);
  const totalPrice = menus.reduce(
    (acc, currentMenu) => acc + currentMenu.price,
    0
  );
  if (!store || menus.length === 0) {
    return (
      <Container>
        <Header isCartPage={true} />
        <p>장바구니가 비었습니다.</p>
      </Container>
    );
  }
  return (
    <Container>
      <Header isCartPage={true} />
      <StoreTitle>
        <h3>{store.name}</h3>
        {totalPrice < store.minDeliveryPrice ? (
          <span>
            최소금액 미달
            <Warning />
          </span>
        ) : null}
      </StoreTitle>
      {menus.map((menu) => (
        <CartBox>
          <MenuImage />
          <MenuInfo>
            <h3>{menu.name}</h3>
            <span>{menu.ingredients}</span>
            <span>{menu.price.toLocaleString()}원</span>
          </MenuInfo>
        </CartBox>
      ))}
      <AddMore
        onClick={() => {
          navigate(`/store/${store.id}`);
        }}
      >
        더 담기 +
      </AddMore>
      <OrderInfo>
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
      </OrderInfo>
      <BottomBox>
        <p>최소 주문금액 {store?.minDeliveryPrice.toLocaleString()}원</p>
        <Button
          isForbidden={totalPrice + store.deliveryFee < store.minDeliveryPrice}
        >
          {(totalPrice + store.deliveryFee).toLocaleString()}원 결제하기
        </Button>
      </BottomBox>
    </Container>
  );
};

export default Cart;
