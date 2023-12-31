import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

import * as S from "./Stores.styles";

import StoreItem from "../../components/StoreItem/StoreItem";
import OrderBar from "../../components/OrderBar/OrderBar";

// import stores from "../../models/stores";
import { getStores } from "../../apis/stores";

import { PrevButton, StatusBar, HomeIndicator } from "../../assets";

const Stores = () => {
  const [stores, setStores] = useState();

  useEffect(() => {
    getStores().then((value) => setStores(value));
  }, []);

  // const navigate = useNavigate();
  const handlePrev = () => {};

  return (
    <S.Container>
      <S.Top>
        <StatusBar />
        <S.Prev type="button" onClick={handlePrev}>
          <PrevButton />
        </S.Prev>
      </S.Top>
      <S.Title>샐러드</S.Title>
      <div>
        {/* {stores.map((store) => {
          return <StoreItem key={store.id} store={store} />;
        })} */}
        {stores &&
          stores.map((store) => {
            return <StoreItem key={store.id} store={store} />;
          })}
      </div>
      <S.Bottom>
        <OrderBar />
        <S.HomeIndicator>
          <HomeIndicator />
        </S.HomeIndicator>
      </S.Bottom>
    </S.Container>
  );
};

export default Stores;
