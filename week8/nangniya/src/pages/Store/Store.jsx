import React from "react";
import { useParams } from "react-router-dom";
import * as S from "./Store.styles";
import MenuItem from "../../components/MenuItem/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar";
import stores from "../../models/stores";
import Header from "../../components/Header/Header";

const Store = () => {
  const { storeId } = useParams();
  const store = stores.find((s) => s.id.toString() === storeId);

  if (!store) {
    return <div>가게를 찾을 수 없어요 🥺</div>;
  }

  return (
    <S.Container>
      <Header />
      <div>
        <S.StoreInfo>
          <h1>{store.name}</h1>
          <p className="rate">
            <span style={{ color: "#ffd158" }}>★ </span>
            <span className="rate-number">{store.rate} </span>
            리뷰{store.reviewCnt.toLocaleString()}
          </p>
          <p className="delivery-info">
            <span>결제방법</span> 토스결제만 현장결제 안됨
          </p>
          <p className="delivery-info">
            <span>최소주문</span> {store.minDeliveryPrice.toLocaleString()}원
          </p>
          <p className="delivery-info">
            <span>배달시간</span>약 {store.minDeliveryTime}~
            {store.maxDeliveryTime}분
          </p>
        </S.StoreInfo>
        <S.FoodCategory>샐러드</S.FoodCategory>
        <div>
          {store.menus.map((menu) => {
            return <MenuItem key={menu.id} store={store} menu={menu} />;
          })}
        </div>
      </div>
      <OrderBar />
    </S.Container>
  );
};

export default Store;
