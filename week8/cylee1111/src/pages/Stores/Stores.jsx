import React from "react";

import StoreItem from "../../components/StoreItem/StoreItem";
import OrderBar from "../../components/OrderBar/OrderBar";

import stores from "../../models/stores";

import { PrevButton } from "../../assets";
import { useNavigate } from "react-router-dom";

const Stores = () => {
  const navigate = useNavigate();
  const handlePrev = () => {};

  return (
    <div>
      <button type="button" onClick={handlePrev}><PrevButton /></button>
      <h1>샐러드</h1>
      <div>
        {stores.map((store) => {
          return <StoreItem key={store.id} store={store} />;
        })}
      </div>
      <OrderBar />
    </div>
  );
};

export default Stores;
