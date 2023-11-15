import React from "react";
import stores from "../../models/stores";
import * as S from "./Stores.styles";
import { Link } from "react-router-dom";
import OrderBar from "../../components/OrderBar/OrderBar";

const Stores = () => {
  return (
    <S.Container>
      <S.FoodCategory>샐러드</S.FoodCategory>
      {stores.map((store) => (
        <Link
          to={`/store/${store.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <S.Wrapper key={store.id}>
            <S.StoreImage />
            <S.StoreBox>
              <p>{store.id}위</p>
              <p>{store.name}</p>
              <p>
                <span>
                  ★ {store.rate}({store.reviewCnt})
                </span>
              </p>
              <p>
                <span>
                  {store.minDeliveryTime}분~{store.maxDeliveryTime}분
                </span>
                •<span>배달비 {store.deliveryFee}원</span>
              </p>
            </S.StoreBox>
          </S.Wrapper>
        </Link>
      ))}
      <OrderBar />
    </S.Container>
  );
};

export default Stores;
