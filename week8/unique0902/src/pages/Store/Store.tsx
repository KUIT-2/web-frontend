import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import MenuItem from '../../components/MenuItem/MenuItem';

import stores from '../../models/stores';
import useCartStore from '../../api/cartStore';
import BackButton from '../../components/Button/BackButton';

const Store = () => {
  const { storeId } = useParams();
  const setStore = useCartStore((state) => state.setStore);

  const store = stores.find((s) => s.id.toString() === storeId);
  useEffect(() => {
    if (store) {
      setStore(store);
    }
  }, []);

  if (!store) {
    return <div>가게를 찾을 수 없어요 🥺</div>;
  }

  return (
    <div>
      <BackButton />
      <section>
        <h1>{store.name}</h1>
        <div>
          <p>별 4.9 리뷰 3,919</p>
        </div>
        <div>
          <p>결제방법</p>
          <p>토스결제만 현장결제안됨</p>
        </div>
        <div>
          <p>최소주문</p>
          <p>13000원</p>
        </div>
        <div>
          <p>배달시간</p>
          <p>약 15~25분</p>
        </div>
      </section>

      <div>
        <h4>샐러드</h4>
        {store.menus.map((menu) => {
          return <MenuItem key={menu.id} menu={menu} />;
        })}
      </div>
    </div>
  );
};

export default Store;
