import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import * as S from "./Store.styles"

import MenuItem from "../../components/MenuItem/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar";

import { getStore } from "../../apis/stores"

// import stores from "../../models/stores";
import useCartStore from "../../store/cartStore";

import { PrevButton, StatusBar, HomeIndicator } from "../../assets";

const Store = () => {
  const { storeId } = useParams();
  const [store, setStore] = useState();
  const addMenu = useCartStore(state => state.addMenu);
  const clearMenu = useCartStore((state) => state.clearMenu);

  // const store = stores.find((s) => s.id.toString() === storeId);
  // const setStore = useCartStore((state) => state.setStore);

  useEffect(() => {
    getStore(storeId).then((value) => setStore(value));
  }, []); 
  // 콜백함수, 디펜던시 배열(상태)
  // -> 상태가 변하면(상태 비워두면, 컴포넌트가 그려지는 순간) 콜백함수 실행

  const navigate = useNavigate();
  const handlePrev = () => {
    clearMenu();
    navigate(`/store`);
  };

  const handleAddMenu = (menu) => {
    addMenu(menu, store);
  };

  if (!store) {
    return <div>가게를 찾을 수 없어요 🥺</div>;
  }

  return (
    <S.Container>
      <S.Top>
        <StatusBar />
        <S.Prev type="button" onClick={handlePrev}><PrevButton /></S.Prev>
      </S.Top>
      <S.Title>{store.name}</S.Title>
      <S.ReviewSection>
        <S.ReviewStar>★</S.ReviewStar>
        <S.ReviewRate>{store.rate}</S.ReviewRate> 
        <S.ReviewCount>리뷰{store.reviewCnt}</S.ReviewCount>
      </S.ReviewSection>
      <S.StoreInfo>
        <span>최소주문</span> 
        <span>{store.minDeliveryPrice}원</span>
      </S.StoreInfo>
      <S.StoreInfo>
        <span>배달시간 </span> 
        <span>약 {store.minDeliveryTime}-{store.maxDeliveryTime}분</span> 
      </S.StoreInfo>
      <S.MenuItemsWrapper>
        {store.menus.map((menu) => {
          return <MenuItem key={menu.id} menu={menu} handleAddMenu={() => handleAddMenu(menu)} />;
        })}
      </S.MenuItemsWrapper>
      <S.Bottom>
        <OrderBar />
        <S.HomeIndicator><HomeIndicator /></S.HomeIndicator>     
      </S.Bottom>

    </S.Container>
  );
};

export default Store;
