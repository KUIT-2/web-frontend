import React, { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";
import * as S from "./Store.styles";

import MenuItem from "../../components/MenuItem/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar";
import { getStore } from "../../apis/stores"; 
import useCartStore from "../../store/cartStore";

const Store = () => {

  const navigate = useNavigate();
  const addMenu = useCartStore((state) => state.addMenu );
  const clearMenu = useCartStore((state) => state.clearMenu);
  const { storeId } = useParams();
  const [store, setStore] = useState();
  

  useEffect(() => {
    getStore(storeId).then((value) => setStore(value));
  }, [])


  useEffect(() => {
    if (store) {
      setStore(store);
    }
  }, [store]);
  

  const handleAddMenu = (menu) => {
    addMenu(menu, store);
  };

  const backArrowClick = () => {
    alert("지금까지 고른 메뉴를 초기화합니다.");
    clearMenu();
    navigate(`/store`);
  }


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
          return <MenuItem 
          key={menu.id} 
          menu={menu} 
          handleAddMenu = {() => handleAddMenu(menu)} />;
          // 1. MenuItem에 store를 주기
          // 2. MenuItem에 handleAddMenu 주기
        })}
      </S.ShowMenu>
      <OrderBar />
    
    </S.WrapStore>
  );
};

export default Store;
