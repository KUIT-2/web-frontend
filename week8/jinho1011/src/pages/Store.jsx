import React from "react";
import { useParams } from "react-router-dom";

import stores from "../models/stores";

const Store = () => {
  const { storeId } = useParams();

  const store = stores.find((s) => s.id.toString() === storeId);

  if (!store) {
    return <div>가게를 찾을 수 없어요 🥺</div>;
  }

  return <div>{store.name}</div>;
};

export default Store;
