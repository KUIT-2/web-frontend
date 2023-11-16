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

import useCartStore from '../../api/cartStore';
import CartMenuItem from '../../components/CartMenuItem/CartMenuItem';
const Cart = () => {
  const store = useCartStore((state) => state.store);
  const menus = useCartStore((state) => state.menus);

  return (
    <React.Fragment>
      <CartHeader>
        <BackButton />
        <CartCancelBtn>주문취소</CartCancelBtn>
      </CartHeader>
      <OrderSect>
        <OrderHeaderWrapper>
          <OrderStoreText>샐로리 한남점</OrderStoreText>
          <OrderWarningMinPrice>
            <p>최소금액 미달</p>
            <AiOutlineExclamationCircle />
          </OrderWarningMinPrice>
        </OrderHeaderWrapper>
        {menus.map((menu) => (
          <CartMenuItem menu={menu} key={menu.id} />
        ))}

        <OrderAddMoreBtn>
          더 담기 <AiOutlinePlus />
        </OrderAddMoreBtn>
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
        <OrderFooterText>최소 주문금액 130000원</OrderFooterText>
        <OrderFooterBtn>
          {store
            ? menus.reduce((acc, currentMenu) => acc + currentMenu.price, 0) +
              store.deliveryFee
            : 0}
          원 결제하기
        </OrderFooterBtn>
      </OrderFooter>
    </React.Fragment>
  );
};

export default Cart;
