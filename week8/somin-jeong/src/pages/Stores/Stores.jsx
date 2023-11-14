import React from 'react'

import TopBar from "../../components/TopBar/TopBar";
import StoreItem from "../../components/StoreItem/StoreItem";
import OrderBar from "../../components/OrderBar/OrderBar";

import styled from 'styled-components';

import stores from "../../models/stores";

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

const Stores = () => {
  return (
    <div>
      <TopBar />
      <Title>샐러드</Title>
      {stores.map((store) => {
        return <StoreItem key={store.id} store={store} />
      })}
      <OrderBar />
    </div>
  )
}

export default Stores