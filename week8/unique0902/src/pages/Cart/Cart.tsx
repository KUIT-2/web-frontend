import React from 'react';
import BackButton from '../../components/Button/BackButton';
import { ItemInform, ItemName } from '../../styles/ItemStyle';
import {
  CartCancelBtn,
  CartHeader,
  OrderAddMoreBtn,
  OrderHeaderWrapper,
  OrderIconWrapper,
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
import {
  AiOutlineRight,
  AiOutlinePlus,
  AiOutlineExclamationCircle,
} from 'react-icons/ai';
import { StoreItemImg } from '../../components/StoreListItem/StoreListItem.styles';
import {
  MenuItemInformDiv,
  MenuItemSec,
} from '../../components/MenuItem/MenuItem.styles';
const Cart = () => {
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
        <MenuItemSec>
          <StoreItemImg src='' alt='' />
          <MenuItemInformDiv>
            <ItemName>토마토 샐러드</ItemName>
            <ItemInform>
              추천소스, 채소볼, 베이컨추가, 시저드레싱 추가
            </ItemInform>
            <ItemInform>10600원</ItemInform>
          </MenuItemInformDiv>
          <ItemInform>1개</ItemInform>
          <OrderIconWrapper>
            <AiOutlineRight />
          </OrderIconWrapper>
        </MenuItemSec>
        <OrderAddMoreBtn>
          더 담기 <AiOutlinePlus />
        </OrderAddMoreBtn>
      </OrderSect>
      <OrderPriceSumSect>
        <OrderPriceRowSect>
          <OrderPriceTitle>주문금액</OrderPriceTitle>
          <OrderPriceText>10600원</OrderPriceText>
        </OrderPriceRowSect>
        <OrderPriceRowSect>
          <OrderPriceTitle>배달요금</OrderPriceTitle>
          <OrderPriceText>2000원</OrderPriceText>
        </OrderPriceRowSect>
        <OrderPriceRowSect>
          <OrderTotalPriceTitle>총 결제금액</OrderTotalPriceTitle>
          <OrderTotalPriceText>12600원</OrderTotalPriceText>
        </OrderPriceRowSect>
      </OrderPriceSumSect>
      <OrderFooter>
        <OrderFooterText>최소 주문금액 130000원</OrderFooterText>
        <OrderFooterBtn>12600원 결제하기</OrderFooterBtn>
      </OrderFooter>
    </React.Fragment>
  );
};

export default Cart;
