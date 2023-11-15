import React from "react";
import NavTop from "../../components/Nav/NavTop";
import StoresCategory from "../../components/StoreList/StoresCategory";
import OrderBar from "../../components/OrderBar/OrderBar";
import StoreList from "../../components/StoreList/StoreList";

const Stores = () => {
  return (
    <div>
      <NavTop />
      <StoresCategory />
      <StoreList />
      <OrderBar />
    </div>

  )
};

export default Stores;



