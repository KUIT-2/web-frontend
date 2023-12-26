/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';

// import stores from '../../models/stores'
import StoreItem from '../../components/StoreItem/StoreItem';
import OrderBar from '../../components/OrderBar/OrderBar';

import * as S from './Stores.styles';
import icon from '../../assets/img/icon-left-chevron.svg';
import { getStores } from '../../apis/stores';

const Stores = () => {
  const [stores, setStores] = useState();

  useEffect(() => {
    getStores().then((value) => setStores(value));
  }, []);

  if (!stores) {
    return <div>가게를 찾을 수 없어요 🥺</div>;
  }

  return (
    <div>
      <S.StoresHeader>
        <img src={icon} style={{ width: '24px', height: '24px' }} />
      </S.StoresHeader>
      <S.StoresCategory>샐러드</S.StoresCategory>
      {stores
        .sort((a, b) => a.ranking - b.ranking)
        .map((store) => {
          return <StoreItem key={store.ranking} store={store} />;
        })}
      <div style={{ width: '100%', height: '77px' }} />
      <OrderBar />
    </div>
  );
};

export default Stores;
