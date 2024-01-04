import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import BackBar from "../../components/BackBar/BackBar";
import OrderBar from "../../components/OrderBar/OrderBar";
import StoreList from "../../components/StoreList/storeList";
import { getStores } from "../../api/stores";
import * as S from "./Stores.styles";

const Stores = () => {
  const [stores, setStores] = useState();
  
  //Mount 되는 순간
  useEffect(() => {
    getStores().then((value) => setStores(value));
  }, []);

  console.log(stores);

  return (
    <S.div>
      <BackBar />
      <S.MainLabel>샐러드</S.MainLabel>
      <S.span>
        {stores&&stores.map((store) => {
          return (
            <Link to={`/Store/${store.id}`}>
              <StoreList key={store.id} store={store} />
            </Link>
          );
        })}
      </S.span>
      <OrderBar />
    </S.div>
  );
};

export default Stores;
