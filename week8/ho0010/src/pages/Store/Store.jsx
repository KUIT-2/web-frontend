import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import MenuItem from "../../components/MenuItem/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar";
import NavTop from "../../components/Nav/NavTop";
import stores from "../../models/stores";
import useCartStore from "../../store/cartStore";
import * as S from "./Store.styles"

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
          return <MenuItem key={menu.id} menu={menu} />;
        })}
      </div>
      <OrderBar />
    </div>
  );
};

export default Store;
