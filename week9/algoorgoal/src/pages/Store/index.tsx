import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useCartStore from '../../store/cartStore';
import stores, { MenuItemType, StoreType } from '../../models/stores';
import OrderBar from '../../components/common/OrderBar';
import StoreProfile from '../../components/Store/StoreProfile';
import Menu from '../../components/Store/Menu';
import { getStore } from '../../apis/store';
import MenuItem from '../../components/Store/Menu/FoodItem';

export default function Store() {
  const { storeId } = useParams();
  const addMenuItem = useCartStore((state) => state.addMenuItem);
  const setStore = useCartStore((state) => state.setStore);
  const store = useCartStore((state) => state.store);
  const resetCart = useCartStore((state) => state.resetCart);
  const fetchCart = useCartStore((state) => state.fetchCart);

  useEffect(() => {
    const initializeCart = async () => {
      // fetch cart initially
      const fetchedCart = await fetchCart();
      if (!fetchedCart.store || Number(storeId) === fetchedCart.store.id) {
        getStore(storeId!).then((fetchedStore) => setStore(fetchedStore));
      } else {
        // when store is loaded by initial fetching or visiting Store page
        // and current store is newly visited
        resetCart();
        getStore(storeId!).then((storeData) => setStore(storeData));
      }
    };

    initializeCart();
  }, [storeId]);

  const handleAddMenuItem = (menuItem: MenuItemType) => {
    addMenuItem(menuItem);
  };

  if (!store) {
    return <div>가게를 찾을 수 없어요 🥺</div>;
  }

  return (
    <div>
      <StoreProfile />
      <Menu handleAddMenuItem={handleAddMenuItem} />
      <OrderBar />
    </div>
  );
}
