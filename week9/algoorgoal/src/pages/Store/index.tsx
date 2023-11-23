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
  const [store, setStore] = useState<StoreType>();

  useEffect(() => {
    getStore(storeId!).then((storeData) => setStore(storeData));
  });

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
