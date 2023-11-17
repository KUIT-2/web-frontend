import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import MenuItem from "../../components/MenuItem/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar";

import stores from "../../models/stores";
import useCartStore from "../../store/cartStore";

import { PrevButton } from "../../assets";
import { useNavigate } from "react-router-dom";

const Store = () => {
  const { storeId } = useParams();
  const setStore = useCartStore((state) => state.setStore);
  const clearMenu = useCartStore((state) => state.clearMenu);

  const store = stores.find((s) => s.id.toString() === storeId);

  const navigate = useNavigate();
  const handlePrev = () => {
    clearMenu();
    navigate(`/store`);
  };

  useEffect(() => {
    if (store) {
      setStore(store);
    }
  }, []); 
  // 콜백함수, 디펜던시 배열(상태)
  // -> 상태가 변하면(상태 비워두면, 컴포넌트가 그려지는 순간) 콜백함수 실행

  if (!store) {
    return <div>가게를 찾을 수 없어요 🥺</div>;
  }

  return (
    <div>
      <button type="button" onClick={handlePrev}><PrevButton /></button>
      <h1>{store.name}</h1>
      <div>★{store.rate} 리뷰{store.reviewCnt}</div>
      <div>최소주문 {store.minDeliveryPrice}원</div>
      <div>배달시간 약 {store.minDeliveryTime}-{store.maxDeliveryTime}분</div>
      <div>
        {store.menus.map((menu) => {
          return <MenuItem key={menu.id} menu={menu} />;
        })}
      </div>
      <OrderBar />
    </div>
  );
};

export default Store;
