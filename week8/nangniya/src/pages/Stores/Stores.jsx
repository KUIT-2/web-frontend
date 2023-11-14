import React from "react";
import stores from "../../models/stores";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  height: 116px;
  padding: 20px;
  gap: 15px;
`;
const StoreImage = styled.div`
  border-radius: 10px;
  background-color: #ececec;
  width: 64px;
  height: 64px;
`;
const StoreBox = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  p {
    margin: 2px 0;
    display: flex;
    align-items: center;
  }
  span {
    color: #6b7684;
    font-size: 12px;
  }
`;

const FoodMenu = styled.div`
  display: flex;
  align-items: flex-end;
  height: 59px;
  padding: 0 20px;
  font-weight: bold;
  font-size: 20px;
`;

const Stores = () => {
  return (
    <>
      <FoodMenu>샐러드</FoodMenu>
      {stores.map((store) => (
        <Link
          to={`/store/${store.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Wrapper key={store.id}>
            <StoreImage />
            <StoreBox>
              <p>{store.id}위</p>
              <p>{store.name}</p>
              <p>
                <span>
                  ★ {store.rate}({store.reviewCnt})
                </span>
              </p>
              <p>
                <span>
                  {store.minDeliveryTime}분~{store.maxDeliveryTime}분
                </span>
                •<span>배달비 {store.deliveryFee}원</span>
              </p>
            </StoreBox>
          </Wrapper>
        </Link>
      ))}
    </>
  );
};

export default Stores;
