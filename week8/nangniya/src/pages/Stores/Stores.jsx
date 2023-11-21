import React, { useState, useEffect } from "react";
import { getStores } from "../../apis/stores";
import * as S from "./Stores.styles";
import { Link } from "react-router-dom";
import OrderBar from "../../components/OrderBar/OrderBar";
import Header from "../../components/Header/Header";

const Stores = () => {
  const [stores, setStores] = useState();
  useEffect(() => {
    getStores()
      .then((value) => setStores(value))
      .catch((error) => console.error("Error fetching stores:", error));
  }, []);
  if (!stores) {
    return <div>가게들을 찾을 수 없어요 🥺</div>;
  }
  return (
    <S.Container>
      <Header />
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
