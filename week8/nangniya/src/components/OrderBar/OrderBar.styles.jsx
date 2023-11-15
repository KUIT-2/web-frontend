import styled from "styled-components";

export const OrderBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  height: 110px;
  background-color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  box-shadow: 0 5px 10px 10px rgba(0, 0, 0, 0.1);
`;

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-weight: bold;
  p {
    color: #6b7684;
    font-size: 14px;
  }
  .price {
    color: #4e5968;
    font-size: 18px;
  }
`;
