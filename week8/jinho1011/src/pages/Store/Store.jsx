import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MenuItem from "../../components/MenuItem/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar";

import { getStore } from "../../apis/stores";
import useCartStore from "../../store/cartStore";

const Store = () => {
  const { storeId } = useParams();
  const [store, setStore] = useState();
  const addMenu = useCartStore((state) => state.addMenu);

  useEffect(() => {
    getStore(storeId).then((value) => setStore(value));
  }, []);

  const handleAddMenu = (menu) => {
    addMenu(menu, store);
  };

  if (!store) {
    return <div>가게를 찾을 수 없어요 🥺</div>;
  }

  return (
    <div>
      <h1>{store.name}</h1>
      <div>
        {store.menus.map((menu) => {
          return (
            <MenuItem
              key={menu.id}
              menu={menu}
              handleAddMenu={() => handleAddMenu(menu)}
            />
          );
        })}
      </div>
      <OrderBar />
    </div>
  );
};

export default Store;
