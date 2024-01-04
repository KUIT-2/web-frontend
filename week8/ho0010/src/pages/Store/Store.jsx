import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MenuItem from "../../components/MenuItem/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar";
import NavTop from "../../components/Nav/NavTop";

import * as S from "./Store.styles"

import { getStore } from "../../apis/stores";
import useCartStore from "../../store/cartStore";

const Store = () => {
  const { storeId } = useParams();
  const [store,setStore] = useState();
  const addMenu = useCartStore ((state)=> state.addMenu);

  useEffect(() => {
    getStore(storeId).then(value => setStore(value))
  }, []);

  const handleAddMenu = (menu) => {
addMenu(menu,store);

  }


  if (!store) {
    return <div>가게를 찾을 수 없어요 🥺</div>;
  }



  return (
    <div>
      <NavTop />
      <S.StoreInf>
        <h2>{store.name}</h2>
        <S.StoreInfRate>⭐{store.rate} 리뷰{store.reviewCnt}</S.StoreInfRate>
        <S.StoreInfText>결제방법 토스결제만 현장결제 안됨</S.StoreInfText>
        <S.StoreInfText>최소주문 {store.minDeliveryPrice}원</S.StoreInfText>
        <S.StoreInfText>배달시간 약 {store.minDeliveryTime}~{store.maxDeliveryTime}분</S.StoreInfText>
      </S.StoreInf>
      <S.StoreCategory>샐러드</S.StoreCategory>
      <div>
        {store.menus.map((menu) => {
          return <MenuItem key={menu.id} menu={menu} handleAddMenu = {() => handleAddMenu(menu)} />;
          // 1. meunitem에 store를 주기
          // 2. menuitem에 handleAddmenu 주기
        })}
      </div>
      <OrderBar />
    </div>
  );
};

export default Store;
