/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import useCartStore from '../../store/cartStore';
import CartOrderItem from '../../components/CartOrderItem/CartOrderItem';

import * as S from './Cart.styles';
import back from '../../img/icon-left-chevron.svg';
import warning from '../../img/icon-warning.svg';
import plus from '../../img/icon-plus.svg';

const Cart = () => {
  // const { storeId } = useParams();
  const store = useCartStore((state) => state.store);
  const menus = useCartStore((state) => state.menus);
  const totalPrice = useCartStore((state) => state.totalPrice);

  const storeLink = '/store/' + store.id;
  const storesLink = '/store';
  const sum = totalPrice + store.deliveryFee;

  const setStore = useCartStore((state) => state.setStore);
  const setInitialized = useCartStore((state) => state.setInitialized);

  const handleCancelOrder = () => {
    setInitialized();
  };

  useEffect(() => {
    if (store.id) {
      setStore(store);
    }
  }, []);

  return (
    <div>
      <S.CartHeader>
        <Link to={storeLink}>
          <img src={back} style={{ width: '24px', height: '24px' }} />
        </Link>
        <Link to={storesLink} style={{ textDecoration: 'none' }}>
          <S.CartCancel onClick={handleCancelOrder}>주문취소</S.CartCancel>
        </Link>
      </S.CartHeader>
      <div style={{ width: '100%', height: '16px', background: '#F2F4F6' }} />
      <S.CartOrderCategory>
        <S.CartStoreName>{store.name}</S.CartStoreName>
        {totalPrice < store.minDeliveryPrice ? (
          <S.CartPriceWarning>
            <S.CartPriceLimitLabel>최소금액 미달</S.CartPriceLimitLabel>
            <S.CartPriceLimitIcon src={warning} />
          </S.CartPriceWarning>
        ) : (
          <></>
        )}
      </S.CartOrderCategory>
      {menus.map((menu) => {
        return <CartOrderItem key={menu.id} menu={menu} />;
      })}
      <Link
        to={storeLink}
        style={{
          textDecoration: 'none',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px 0px',
        }}
      >
        <S.CartAddBtn>더 담기</S.CartAddBtn>
        <img src={plus} style={{ width: '16px', height: '16px', marginLeft: '3px' }} />
      </Link>
      <div style={{ width: '100%', height: '16px', background: '#F2F4F6' }} />
      <div style={{ marginBottom: '90px' }}>
        <S.CartOrderPriceBar>
          <S.CartOrderPriceLabel>주문금액</S.CartOrderPriceLabel>
          <S.CartOrderPrice>{totalPrice}원</S.CartOrderPrice>
        </S.CartOrderPriceBar>
        <S.CartOrderPriceBar>
          <S.CartOrderPriceLabel>배달요금</S.CartOrderPriceLabel>
          <S.CartOrderPrice>{store.deliveryFee}원</S.CartOrderPrice>
        </S.CartOrderPriceBar>
        <S.CartOrderSum>
          <S.CartOrderSumLabel>총 결제금액</S.CartOrderSumLabel>
          <S.CartOrderSumLabel>{sum}원</S.CartOrderSumLabel>
        </S.CartOrderSum>
      </div>
      <S.CartCtaBar>
        {totalPrice < store.minDeliveryPrice ? (
          <>
            <S.CartCtaLabel>최소 주문금액 {store.minDeliveryPrice}원</S.CartCtaLabel>
            <S.CartCtaNotBuy>{sum}원 결제하기</S.CartCtaNotBuy>
          </>
        ) : (
          <S.CartCtaDoBuy>{sum}원 결제하기</S.CartCtaDoBuy>
        )}
      </S.CartCtaBar>
    </div>
  );
};

export default Cart;
