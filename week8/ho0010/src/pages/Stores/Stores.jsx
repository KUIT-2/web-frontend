import React from "react";
import NavTop from "../../components/Nav/NavTop";
import StoresCategory from "../../components/StoreList/StoresCategory";
import OrderBar from "../../components/OrderBar/OrderBar";

const Stores = () => {
  return (
    <div>
      <NavTop />
      <StoresCategory />

      <OrderBar />
    </div>

  )
};

export default Stores;



