/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// import stores from "../../models/stores";
import MenuItem from '../../components/MenuItem/MenuItem';
import OrderBar from '../../components/OrderBar/OrderBar';
import useCartStore from '../../store/cartStore';
import { getStore } from '../../apis/stores';

import * as S from './Store.styles';
import icon from '../../assets/img/icon-left-chevron.svg';

const Store = () => {
  const { storeId } = useParams();
  const store = useCartStore((state) => state.store);
  const setStore = useCartStore((state) => state.setStore);
  const addMenu = useCartStore((state) => state.addMenu);

  // const menus = useCartStore((state) => state.menus);

  // const addCnt = useCartStore((state) => state.addCnt);

  // local db 사용
  // const store = stores.find((s) => s.id.toString() === storeId);
  // const setStore = useCartStore((state) => state.setStore);

  // server에서 data 가져옴
  useEffect(() => {
    getStore(storeId).then((value) => setStore(value));
  }, []);

  if (!store) {
    return <div>가게를 찾을 수 없어요 🥺</div>;
  }

  const handleAddMenu = (menu) => {
    addMenu(menu, store);
  };

  if (!store) {
    return <div>가게를 찾을 수 없어요 🥺</div>;
  }

  return (
    <div>
      <S.StoreHeader>
        <Link to="/store">
          <img src={icon} style={{ width: '24px', height: '24px' }} />
        </Link>
      </S.StoreHeader>
      <S.StoreName>{store.name}</S.StoreName>
      <S.StoreReview>
        <S.StoreStar>⭐</S.StoreStar>
        <S.StoreRate>{store.rate}</S.StoreRate>
        <S.StoreDesc>리뷰 {store.reviewCnt}</S.StoreDesc>
      </S.StoreReview>
      <S.StoreDesc>
        <S.StoreDetail>
          <span>결제방법</span>
          <span>토스결제만 현장결제 안됨</span>
        </S.StoreDetail>
        <S.StoreDetail>
          <span>최소주문</span>
          <span>{store.minDeliveryPrice}원</span>
        </S.StoreDetail>
        <S.StoreLastDetail>
          <span>배달시간</span>
          <span>
            약 {store.minDeliveryTime}-{store.maxDeliveryTime}분
          </span>
        </S.StoreLastDetail>
      </S.StoreDesc>
      <div style={{ background: '#E5E8EB', width: 'auto', height: '1px' }} />
      <div>
        <S.StoreMenuHeader>샐러드</S.StoreMenuHeader>
        {store.menus &&
          store.menus.map((menu) => (
            <MenuItem key={menu.id} menu={menu} handleAddMenu={() => handleAddMenu(menu)} />
          ))}
        <div style={{ width: '100%', height: '77px' }} />
      </div>
      <OrderBar />
    </div>
  );
};

export default Store;
