import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useCartStore from '../../store/cartStore';
import stores from '../../models/stores';
import OrderBar from '../../components/OrderBar';
import Menu from '../../components/Menu';
import StoreProfile from '../../components/StoreProfile';

export default function Store() {
  const { storeId } = useParams();
  const setStore = useCartStore((state) => state.setStore);
  const store = stores.find((s) => s.id.toString() === storeId);

  useEffect(() => {
    if (store) {
      setStore(store);
    }
  });

  if (!store) {
    return <div>가게를 찾을 수 없어요 🥺</div>;
  }

  return (
    <div>
      <StoreProfile />
      <Menu />
      <OrderBar />
    </div>
  );
}
