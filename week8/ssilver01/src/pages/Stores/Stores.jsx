import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import StoreList from "../../components/StoreList/storeList";
import OrderBar from "../../components/OrderBar/OrderBar";
import * as S from "./Stores.styles";
import BackBar from "../../components/BackBar/BackBar";
import stores from "../../models/stores";

const Stores = () => {

  return (
  <S.div>
    <BackBar/>
    <S.MainLabel>샐러드</S.MainLabel>
    <S.span>
    {stores.map((store) => {
          return <Link to={`/Store/${store.id}`}><StoreList key={store.id} store={store} /></Link>;
        })}
    </S.span>
    <OrderBar/>
  </S.div>
  );
};

export default Stores;
