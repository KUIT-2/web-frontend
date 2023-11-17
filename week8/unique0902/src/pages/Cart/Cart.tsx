import React from 'react';
import BackButton from '../../components/Button/BackButton';
import {
  CartCancelBtn,
  CartHeader,
  OrderAddMoreBtn,
  OrderHeaderWrapper,
  OrderWarningMinPrice,
  OrderSect,
  OrderStoreText,
  OrderPriceSumSect,
  OrderPriceRowSect,
  OrderPriceTitle,
  OrderPriceText,
  OrderTotalPriceTitle,
  OrderTotalPriceText,
  OrderFooterBtn,
  OrderFooterText,
  OrderFooter,
} from './Cart.styles';
import { AiOutlinePlus, AiOutlineExclamationCircle } from 'react-icons/ai';

// TODO: 최소금액 미달 로직 추가
// TODO: 주문취소 로직 추가
// TODO: 이미지 추가
// TODO: 메뉴 정렬 로직 추가
// TODO: 반응형 꾸미기 추가

import useCartStore from '../../api/cartStore';
import CartMenuItem from '../../components/CartMenuItem/CartMenuItem';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const store = useCartStore((state) => state.store);
  const menus = useCartStore((state) => state.menus);
  const clearOrder = useCartStore((state) => state.clearOrder);
  const handleClickCancelBtn = () => {
    clearOrder();
  };
  const navigate = useNavigate();
  const handleClickAddMoreBtn = () => {
    navigate(`/store/${store?.id}`);
  };
  return (
    <>
      <CartHeader>
        <BackButton />
        <CartCancelBtn onClick={handleClickCancelBtn}>주문취소</CartCancelBtn>
      </CartHeader>
      <OrderSect>
        <OrderHeaderWrapper>
          <OrderStoreText>{store?.name}</OrderStoreText>
          {store &&
            menus.reduce((acc, currentMenu) => acc + currentMenu.price, 0) <
              store.minDeliveryPrice && (
              <OrderWarningMinPrice>
                <p>최소금액 미달</p>
                <AiOutlineExclamationCircle />
              </OrderWarningMinPrice>
            )}
        </OrderHeaderWrapper>
        {menus.map((menu) => (
          <CartMenuItem menu={menu} key={menu.id} />
        ))}

        {store && (
          <OrderAddMoreBtn onClick={handleClickAddMoreBtn}>
            더 담기 <AiOutlinePlus />
          </OrderAddMoreBtn>
        )}
      </OrderSect>
      <OrderPriceSumSect>
        <OrderPriceRowSect>
          <OrderPriceTitle>주문금액</OrderPriceTitle>
          <OrderPriceText>
            {menus.reduce((acc, currentMenu) => acc + currentMenu.price, 0)}원
          </OrderPriceText>
        </OrderPriceRowSect>
        <OrderPriceRowSect>
          <OrderPriceTitle>배달요금</OrderPriceTitle>
          <OrderPriceText>{store?.deliveryFee}원</OrderPriceText>
        </OrderPriceRowSect>
        <OrderPriceRowSect>
          <OrderTotalPriceTitle>총 결제금액</OrderTotalPriceTitle>
          <OrderTotalPriceText>
            {store
              ? menus.reduce((acc, currentMenu) => acc + currentMenu.price, 0) +
                store.deliveryFee
              : 0}
            원
          </OrderTotalPriceText>
        </OrderPriceRowSect>
      </OrderPriceSumSect>
      <OrderFooter>
        <OrderFooterText>
          최소 주문금액 {store && store.minDeliveryPrice}원
        </OrderFooterText>
        <OrderFooterBtn
          isActivated={
            menus.reduce((acc, currentMenu) => acc + currentMenu.price, 0) >
            (store ? store.minDeliveryPrice : 10000)
          }
        >
          {store
            ? menus.reduce((acc, currentMenu) => acc + currentMenu.price, 0) +
              store.deliveryFee
            : 0}
          원 결제하기
        </OrderFooterBtn>
      </OrderFooter>
    </>
  );
};

export default Cart;
