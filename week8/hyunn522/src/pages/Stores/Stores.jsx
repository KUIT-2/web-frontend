import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

import stores from '../../models/stores'
import StoreItem from '../../components/StoreItem/StoreItem'
import OrderBar from '../../components/OrderBar/OrderBar'
import useCartStore from '../../store/cartStore';

import * as S from './Stores.styles';
import icon from '../../img/icon-arrow-back.svg';

const Stores = () => {
  // const { storeId } = useParams();
  const menus = useCartStore((state => state.menus));
  const store = useCartStore((state => state.store));

  const setStore = useCartStore((state) => state.setStore);

  // menus가 빈 배열이 아닐 때
  useEffect(() => {
    if(menus) {
      setStore(store);
    }
  },[])

  if(!stores) {
    return <div>가게를 찾을 수 없어요 🥺</div>
  }

  return (
    <div>
      <S.StoresHeader>
        <img src={icon} style={{width:"24px",height:"24px"}}></img>
      </S.StoresHeader>
      <S.StoresCategory>샐러드</S.StoresCategory>
      {stores
        .sort((a, b) => a.ranking - b.ranking)
        .map((store) => {
          return <StoreItem key={store.ranking} store={store} />;
        })}
      <div style={{width:"100%",height:"77px"}} />
      <OrderBar />
    </div>
  )
}

export default Stores;