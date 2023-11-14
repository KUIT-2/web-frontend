import React from 'react'
import useCartStore from '../../store/cartStore';

import * as S from './OrderBar.styles';

const OrderBar = () => {
  const menus = useCartStore((state => state.menus));
  const store = useCartStore((state => state.store));

  const handleOrder = () => {};
  
  if(!store) {
    return <div></div>
  }

  return (
    <S.OrderContainer>
      <S.OrderPrice>
        <S.OrderText>총 주문금액</S.OrderText>
        <S.OrderTotalPrice>{menus.reduce((acc, currentMenu) => acc + currentMenu.price, 0)}원</S.OrderTotalPrice>
      </S.OrderPrice>
      <S.OrderBtn onClick={handleOrder} type="button">
        주문하기
      </S.OrderBtn>
    </S.OrderContainer>
  )
}

export default OrderBar