import React, { useEffect, useState } from 'react'

import TopBar from "../../components/TopBar/TopBar";
import StoreItem from "../../components/StoreItem/StoreItem";
import OrderBar from "../../components/OrderBar/OrderBar";
import useCartStore from "../../store/cartStore";

import styled from 'styled-components';

import { getStores } from "../../apis/stores";

const Title = styled.div`
  color: #191F28;
  font-family: Pretendard-Bold;
  font-size: 26px;
  line-height: normal;
  display: flex;
  padding: 26px 225px 2px 24px;
  align-items: center;
  margin: 0px;
  width: 141px;
  height: 31px;
`;

const BottemPadding = styled.div`
  height: 77px;
`;

const Stores = () => {
  const [stores, setStores] = useState();
  const menus = useCartStore((state) => state.menus);

  let totalPrice = menus.reduce((acc, currentMenu) => acc + (currentMenu.price * currentMenu.counts), 0);


  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const result = await getStores();
        setStores(result);
      } catch(error) {
        console.error('Error fetching stores:', error);
        setStores([]);
      }
    };
    fetchDataAsync();
  }, []);

  return (
    <div>
      <TopBar />
      <Title>샐러드</Title>
      <div>
        {stores ? (
          stores.map((store) => (
            <StoreItem key={store.id} store={store} />
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <BottemPadding></BottemPadding>
      <OrderBar key={totalPrice} price={totalPrice}/>
    </div>
  )
}

export default Stores;