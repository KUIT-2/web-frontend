import React from 'react';
import BackButton from '../../components/Button/BackButton/BackButton';
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
  OrderFooterText,
  OrderFooter,
  CartMenuItemWrapper,
} from './Cart.styles';

//TODO: fontweight, font size 정리하기

import useCartStore from '../../api/cartStore';
import CartMenuItem from '../../components/CartMenuItem/CartMenuItem';
import { useNavigate } from 'react-router-dom';
import { MenuInCart } from '../../store/type/menu';
import PrimaryBtn from '../../components/Button/PrimaryBtn/PrimaryBtn';
import { PlusIcn, WarningIcn } from '../../asset/img/icon';
import { color } from '../../styles/Theme';

const Cart = () => {
  const store = useCartStore((state) => state.store);
  const menus = useCartStore((state) => state.menus);
  const clearStoreAndMenus = useCartStore((state) => state.clearAll);
  const handleClickCancelBtn = () => {
    clearStoreAndMenus();
  };
  const navigate = useNavigate();
  const handleClickAddMoreBtn = () => {
    navigate(`/store/${store?.id}`);
  };

  //카트 속 메뉴들 정리하는 로직
  const menusInCart = menus.reduce((acc: MenuInCart[], menu) => {
    const index = acc.findIndex((meunItem) => meunItem.id === menu.id);
    if (index === -1) {
      acc.push({ ...menu, cnt: 1 });
    } else {
      acc[index].cnt++;
    }
    return acc;
  }, []);

  const totalMenusPrice = menus.reduce(
    (acc, currentMenu) => acc + currentMenu.price,
    0
  );
  return (
    <>
      <CartHeader>
        <BackButton />
        <CartCancelBtn onClick={handleClickCancelBtn}>주문취소</CartCancelBtn>
      </CartHeader>
      <OrderSect>
        <OrderHeaderWrapper>
          <OrderStoreText>{store?.name}</OrderStoreText>
          {store && totalMenusPrice < store.minDeliveryPrice && (
            <OrderWarningMinPrice>
              <p>최소금액 미달</p>
              <WarningIcn width={13} height={13} />
            </OrderWarningMinPrice>
          )}
        </OrderHeaderWrapper>
        <CartMenuItemWrapper>
          {menusInCart.map((menu) => (
            <CartMenuItem menu={menu} key={menu.id} />
          ))}
        </CartMenuItemWrapper>

        {store && (
          <OrderAddMoreBtn onClick={handleClickAddMoreBtn}>
            더 담기{' '}
            <PlusIcn width={16} height={16} stroke={color.primary_500} />
          </OrderAddMoreBtn>
        )}
      </OrderSect>
      <OrderPriceSumSect>
        <OrderPriceRowSect>
          <OrderPriceTitle>주문금액</OrderPriceTitle>
          <OrderPriceText>{totalMenusPrice}원</OrderPriceText>
        </OrderPriceRowSect>
        <OrderPriceRowSect>
          <OrderPriceTitle>배달요금</OrderPriceTitle>
          <OrderPriceText>{store?.deliveryFee}원</OrderPriceText>
        </OrderPriceRowSect>
        <OrderPriceRowSect>
          <OrderTotalPriceTitle>총 결제금액</OrderTotalPriceTitle>
          <OrderTotalPriceText>
            {store ? totalMenusPrice + store.deliveryFee : 0}원
          </OrderTotalPriceText>
        </OrderPriceRowSect>
      </OrderPriceSumSect>
      <OrderFooter>
        <OrderFooterText>
          최소 주문금액 {store && store.minDeliveryPrice}원
        </OrderFooterText>
        <PrimaryBtn
          handleClick={() => {}}
          isActivated={
            menus.reduce((acc, currentMenu) => acc + currentMenu.price, 0) >
            (store ? store.minDeliveryPrice : 10000)
          }
          isFull={true}
        >
          {store ? totalMenusPrice + store.deliveryFee : 0}원 결제하기
        </PrimaryBtn>
      </OrderFooter>
    </>
  );
};

export default Cart;
