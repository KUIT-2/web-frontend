import React from "react";

import * as S from "./CartStore.styles";
import CartStoreList from './CartStoreList';

const CartStore = ({ store, menus, totalPrice, getcounts}) => {

  return (
    <>
      <div
        style={{
          display:"flex",
          padding: "26px 26px 12px 24px",
          justifyContent: "space-between"
        }}
      >
        <S.StoreLabel>{store.name}</S.StoreLabel>
        <span>
          {totalPrice < store.minDeliveryPrice && (
            <S.alert>최소금액 미달</S.alert>
          )}
        </span>
      </div>
      <CartStoreList menus={menus} store={store} getcounts = {getcounts}/>
    </>
  );
};

export default CartStore;
