import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import MenuItem from "../../components/MenuItem/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar";
import TopBar from "../../components/TopBar/TopBar";

import stores from "../../models/stores";
import useCartStore from "../../store/cartStore";

import styled from 'styled-components';

const Title = styled.h1`
  color: #191F28;
  font-family: Pretendard-Bold;
  font-size: 26px;
  line-height: normal;
  display: flex;
  padding: 26px 225px 2px 24px;
  align-items: center;
  margin: 0px;
  width: 141px;
  height: 31px;
`;

const Review = styled.div`
  display: flex;
  width: 390px;
  height: 38px;
  box-sizing: border-box;
  padding: 6px 230px 12px 23px;
`;

const ReviewPoint = styled.span`
  color: #4E5968;
  font-family: Pretendard-SemiBold;
  font-size: 17px;
  line-height: normal;
  margin-right: 9px;
`;

const ReviewCount = styled.span`
  color: #4E5968;
  font-family: Pretendard-Medium;
  font-size: 16px;
  line-height: normal;
  width: 69px;
  height: 19px;
  padding: 1px 0px 0px 0px;
`;

const Star = styled.div`
  width: 18px;
  height: 19px;
  box-sizing: border-box;
  padding: 7px 5px 12px 23px;
`;

const OrderInfo = styled.div`
  display: flex;
  padding: 9px 152px 1px 24px;
  align-items: flex-start;
  gap: 12px;
  color: #4E5968;
  font-family: Pretendard-Medium;
  font-size: 15px;
  line-height: normal;
`;

const Info = styled.div`
  padding-bottom: 13px;
  border-bottom: 1px solid #E5E8EB;
`;

const MenuCategory = styled.div`
  padding: 26px 321px 11px 24px;
  color: #6B7684;
  font-family: Pretendard-SemiBold;
  font-size: 17px;
  line-height: normal;
`;

const Store = () => {
  const { storeId } = useParams();
  const setStore = useCartStore((state) => state.setStore);

  const store = stores.find((s) => s.id.toString() === storeId);

  useEffect(() => {
    if (store) {
      setStore(store);
    }
  }, []);

  if (!store) {
    return <div>가게를 찾을 수 없어요 🥺</div>;
  }

  return (
    <div>
      <TopBar />
      <Title>{store.name}</Title>
      <Review>
        <Star src="../../images/Star.svg" alt="star" />
        <ReviewPoint>4.9</ReviewPoint>
        <ReviewCount>리뷰3,919</ReviewCount>
      </Review>
      <Info>
        <OrderInfo>
          <div>결제방법</div>
          <div>토스결제만 현장결제 안됨</div>
        </OrderInfo>
        <OrderInfo>
          <div>최소주문</div>
          <div>13,000원</div>
        </OrderInfo>
        <OrderInfo>
          <div>배달시간</div>
          <div>약 15-25분</div>
        </OrderInfo>
      </Info>
      <MenuCategory>샐러드</MenuCategory>
      <div>
        {store.menus.map((menu) => {
          return <MenuItem key={menu.id} menu={menu} />;
        })}
      </div>
      <OrderBar />
    </div>
  );
};

export default Store;