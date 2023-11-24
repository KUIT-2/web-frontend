import React, { useEffect } from 'react'
import useCartStore from '../../store/cartStore';

import * as S from './OrderBar.styles';
import { Link } from 'react-router-dom';
import { getSum } from '../../apis/cart';

const OrderBar = () => {
  // const menus = useCartStore((state => state.menus));
  const store = useCartStore((state => state.store));
  const menus = useCartStore((state) => state.menus);
  const totalPrice = useCartStore((state) => state.totalPrice);
  const setSum = useCartStore((state) => state.setSum);

  const handleOrder = () => {};

  useEffect(() => {
    getSum().then(value => setSum(value));
  }, [menus, setSum])
 
  if(!store) {
    return <div>찾으시는 가게가 없어요</div>
  }

  return (
    <S.OrderContainer>
      {totalPrice === 0 ? (
        <S.OrderNothing>주문할 음식을 담아주세요</S.OrderNothing>
      ) : (<>
        <S.OrderPrice>
          <S.OrderText>총 주문금액</S.OrderText>
          <S.OrderTotalPrice>{totalPrice}원</S.OrderTotalPrice>
      </S.OrderPrice>
      <Link to='/cart'>
        <S.OrderBtn onClick={handleOrder} type="button">
            주문하기
        </S.OrderBtn>
      </Link></>
      )}
    </S.OrderContainer>
  )
}

export default OrderBar