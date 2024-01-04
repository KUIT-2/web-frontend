import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MenuItem from "../../components/MenuItem/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar";

import { getStore } from "../../api/stores";
import BackBar from "../../components/BackBar/BackBar";
import useCartStore from "../../store/cartStore";
import * as S from "./Store.styles";

const Store = () => {
  //url 값
  const { storeId } = useParams();
  const [store, setStore] = useState();
  const addMenu = useCartStore((state) => state.addMenu);

  //mount 되는 순간
  useEffect(() => {
    getStore(storeId).then((value) => setStore(value));
  }, []);

  const handleAddMenu = (menu) => {
    addMenu(menu, store);
  };

  if (!store) {
    return <div>가게를 찾을 수 없어요 🥺</div>;
  }

  return (
    <S.div>
      <BackBar />
      <S.MainLabel>{store.name}</S.MainLabel>

      <S.Info>
        <S.StyledStarIcon />
        <S.Rate>{store.rate}</S.Rate>
        <S.Label15>리뷰 {store.reviewCnt}</S.Label15>
      </S.Info>

      <S.Info>
        <S.Label15>결제방법</S.Label15>
        <S.Label15>토스결제만 현장결제 안됨</S.Label15>
      </S.Info>

      <S.Info>
        <S.Label15>최소주문</S.Label15>
        <S.Label15>{store.minDeliveryPrice}원</S.Label15>
      </S.Info>

      <S.Info style={{ paddingBottom: "14px" }}>
        <S.Label15>배달시간</S.Label15>
        <S.Label15>
          약 {store.minDeliveryTime}-{store.maxDeliveryTime}분
        </S.Label15>
      </S.Info>

      <S.MenuMainLabel>샐러드</S.MenuMainLabel>

      <div>
        {store.menus.map((menu) => {
          return (
            <MenuItem
              key={menu.id}
              menu={menu}
              handleAddMenu={() => handleAddMenu(menu)}
            />
          );
        })}
      </div>
      <OrderBar />
    </S.div>
  );
};

export default Store;
