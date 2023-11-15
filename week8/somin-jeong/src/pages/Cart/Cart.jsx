import React from 'react';

import TopBar from "../../components/TopBar/TopBar";
import OrderItem from "../../components/OrderItem/OrderItem";

import styled from 'styled-components';

import Plus from '../../images/Plus.svg';
import Limit from '../../images/PriceLimit.svg';

import useCartStore from "../../store/cartStore";

const OrderStore = styled.div`
  display: flex;
  border-top: 16px solid #F2F4F6;
  box-sizing: content-box;
  margin-top: 3px;
  width: 390px;
  box-sizing: border-box;
`;

const StoreName = styled.div`
  margin-right: 147px;
  color: #6B7684;
  font-family: Pretendard-Bold;
  font-size: 17px;
  line-height: normal;
  width: 93px;
  height: 20px;
  margin: 26px 0px 12px 24px;
`;

const PriceLimit = styled.div`
  color: #F04452;
  font-family: Pretendard-Medium;
  font-size: 15px;
  line-height: normal;
  margin: 27px 6px 13px 147px;
`;

const LimitImg = styled.img`
  width: 13px;
  height: 13px;
  margin: 30px 23px 16px 0px;
`;

const MoreInput = styled.div`
  display: flex;
  width: 390px;
  height: 59px;
  padding: 19px 0px 20px 0px;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #E5E8EB;
  box-sizing: border-box;
`;

const MoreInputText = styled.div`
  color: #3182F6;
  font-family: Pretendard-SemiBold;
  font-size: 17px;
  line-height: normal;
  margin-right: 3px;
`;

const PlusImg = styled.img`
  width: 12px;
  height: 12px;
  padding: 2px; 
`;

const BorderGray = styled.div`
  height: 16px;
  background: #F2F4F6;
  width: 390px;
`;

const BorderWhite = styled.div`
  height: 16px;
  background: #FFF;
  width: 390px;
`;

const OrderPrice = styled.div`
  padding: 8px 23px 9px 24px;
  display: flex;
  justify-content : space-between;
  width: 390px;
  box-sizing: border-box;
`;

const TextStyle = styled.div`
  color: #8B95A1;
  font-family: Pretendard-Medium;
  font-size: 17px;
  line-height: normal;
`;

const PriceStyle = styled.div`
  color: #505967;
  text-align: right;
  font-family: Pretendard-Medium;
  font-size: 17px;
  line-height: normal;
`;

const DeliveryPrice = styled.div`
  padding: 8px 23px 9px 24px;
  display: flex;
  justify-content : space-between;
  width: 390px;
  box-sizing: border-box;
`;

const TotalPay = styled.div`
  padding: 8px 23px 9px 24px;
  display: flex;
  justify-content : space-between;
  width: 390px;
  box-sizing: border-box;
`;

const TotalPriceTextStyle = styled.div`
  color: #4E5968;
  font-family: Pretendard-Medium;
  font-size: 17px;
  line-height: normal;
`;

const TotalPriceStyle = styled.div`
  color: #4E5968;
  font-family: Pretendard-SemiBold;
  font-size: 17px;
  line-height: normal;
`;

const OrderBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 390px;
  height: 95px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  position: fixed;
  bottom: 0;
  box-sizing: border-box;
  background: #FFF;
`;

const LimitPrice = styled.div`
  color: #6B7684;
  text-align: center;
  font-family: Pretendard-Medium;
  font-size: 17px;
  line-height: normal;
  margin-bottom: 18px;
`;

const OrderBtn = styled.div`
  height: 56px;
  padding: 18px 112px 19px 113px;
  flex-shrink: 0;
  border-radius: 16px;
  background: #D0DFFB;
  color: #FFF;
  text-align: center;
  font-family: Pretendard-SemiBold;
  font-size: 16px;
  line-height: normal;
  box-sizing: border-box;
  bottom: 0;
`;

const BottemPadding = styled.div`
  height: 100px;
`;

const Cart = () => {
  const menus = useCartStore((state) => state.menus);
  const store = useCartStore((state) => state.store);
  const menuCounts = useCartStore((state) => state.menuCounts);

  const totalPrice = menus.reduce((acc, currentMenu) => acc + (currentMenu.price * menuCounts[currentMenu.id]), 0);

  if (!store) {
    return <div>메뉴를 먼저 담아주세요 🥺</div>;
  }

  return (
    <div>
      <TopBar subBtn={"주문취소"}/>
      <OrderStore>
        <div>
          <StoreName>{store.name}</StoreName>
        </div>
        <div>
          { store.minDeliveryPrice > totalPrice+store.deliveryFee && <PriceLimit>최소금액 미달</PriceLimit> }
        </div>
        <div>
          { store.minDeliveryPrice > totalPrice+store.deliveryFee && <LimitImg src={Limit} alt="limit" /> }
        </div>
      </OrderStore>
      <div>
        {
          menus.map((menu) => {
            return <OrderItem key={menu.id} menu={menu} />
          })
        }
      </div>
      <MoreInput>
        <MoreInputText>더 담기</MoreInputText>
        <PlusImg src={Plus} alt="plus" />
      </MoreInput>
      <BorderGray />
      <BorderWhite />
      <OrderPrice>
        <TextStyle>주문금액</TextStyle>
        <PriceStyle>{totalPrice}원</PriceStyle>
      </OrderPrice>
      <DeliveryPrice>
        <TextStyle>배달요금</TextStyle>
        <PriceStyle>{store.deliveryFee}원</PriceStyle>
      </DeliveryPrice>
      <TotalPay>
        <TotalPriceTextStyle>총 결제금액</TotalPriceTextStyle>
        <TotalPriceStyle>{totalPrice+store.deliveryFee}원</TotalPriceStyle>
      </TotalPay>
      <BottemPadding></BottemPadding>
      <OrderBar>
        <LimitPrice>최소 주문금액 {store.minDeliveryPrice}원</LimitPrice>
        <OrderBtn>{totalPrice+store.deliveryFee}원 결제하기</OrderBtn>
      </OrderBar>
    </div>
  );
};

export default Cart;