import React, { useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";
import * as S from "./Store.styles";

import MenuItem from "../../components/MenuItem/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar";

import stores from "../../models/stores";
import useCartStore from "../../store/cartStore";

const Store = () => {

  const navigate = useNavigate();
  const clearMenus = useCartStore((state) => state.clearMenus);

  const backArrowClick = () => {
    alert("지금까지 고른 메뉴를 초기화합니다.");
    clearMenus();
    navigate(`/store`);
  }

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
    <S.WrapStore>
      
      <S.StoreTop>
        <S.BackArrow onClick= {() => backArrowClick()} />
        <S.StoreName>{store.name}</S.StoreName>
        <S.ReviewSentence>
          <S.ReviewStar>★ </S.ReviewStar>
          <S.ReviewNumber>{store.rate}</S.ReviewNumber>
          <S.ReviewCnt>  리뷰 {store.reviewCnt}</S.ReviewCnt>
        </S.ReviewSentence>
        
        <S.InfoSentence>
          <S.InfoQuestion>결제방법 </S.InfoQuestion>
          <S.InfoAnswer>토스결제만 현장결제 안됨</S.InfoAnswer>
        </S.InfoSentence>
        <S.InfoSentence>
          <S.InfoQuestion>최소주문 </S.InfoQuestion>
          <S.InfoAnswer>{store.minDeliveryPrice}원</S.InfoAnswer>
        </S.InfoSentence>
        <S.InfoSentence>
          <S.InfoQuestion>배달시간</S.InfoQuestion>
          <S.InfoAnswer>약 {store.minDeliveryTime}-{store.maxDeliveryTime}분</S.InfoAnswer>
        </S.InfoSentence>
      </S.StoreTop>
      
      <S.ShowMenu>
        <S.Salad>샐러드</S.Salad>
        {store.menus.map((menu) => {
          return <MenuItem key={menu.id} menu={menu} />;
        })}
      </S.ShowMenu>
      <OrderBar />
    
    </S.WrapStore>
  );
};

export default Store;
