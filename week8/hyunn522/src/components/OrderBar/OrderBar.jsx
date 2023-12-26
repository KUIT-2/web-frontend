import React from 'react';
import useCartStore from '../../store/cartStore';

import * as S from './OrderBar.styles';
import { Link } from 'react-router-dom';

const OrderBar = () => {
  // const menus = useCartStore((state => state.menus));
  const store = useCartStore((state) => state.store);
  const totalPrice = useCartStore((state) => state.totalPrice);

  if (!store) {
    return <div>찾으시는 가게가 없어요</div>;
  }

  return (
    <S.OrderContainer>
      {totalPrice === 0 ? (
        <S.OrderNothing>주문할 음식을 담아주세요</S.OrderNothing>
      ) : (
        <>
          <S.OrderPrice>
            <S.OrderText>총 주문금액</S.OrderText>
            <S.OrderTotalPrice>{totalPrice}원</S.OrderTotalPrice>
          </S.OrderPrice>
          <Link to="/cart">
            <S.OrderBtn type="button">주문하기</S.OrderBtn>
          </Link>
        </>
      )}
    </S.OrderContainer>
  );
};

export default OrderBar;
