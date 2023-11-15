import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

import stores from "../../models/stores";
import useCartStore from '../../store/cartStore';

import * as S from './Cart.styles';
import icon from '../../img/icon-arrow-back.svg';

const Cart = () => {
  // const { storeId } = useParams();
  const setStore = useCartStore((state) => state.setStore);
  const store = useCartStore((state) => state.store);

  // const store = stores.find((s) => s.id.toString() === useCartStore.store);

  useEffect(() => {
    if(store) {
      setStore(store);
    }
  },[]);
  
  return (
    <div>
      <S.CartHeader>
        <img src={icon} style={{"width":"24px","height":"24px"}}></img>
        <S.CartCancel>주문취소</S.CartCancel>
      </S.CartHeader>
      <div style={{"width":"100%","height":"16px","background":"#F2F4F6"}} />
      <S.CartCategory>
        <S.CartStore>{store.name}</S.CartStore>
      </S.CartCategory>
    </div>
  )
}

export default Cart