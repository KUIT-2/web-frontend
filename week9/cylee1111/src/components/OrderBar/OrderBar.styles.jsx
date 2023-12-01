import styled from "styled-components";

export const OrderBarContainer = styled.div`
  height: 45px;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  box-shadow: 0px -8px 16px rgba(0, 0, 0, 0.1);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  overflow: hidden;
`;

export const OrderAmountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const OrderAmountDesc = styled.div`
  color: #6b7684;
  font-size: 15px;
  font-weight: 500;
`;

export const OrderAmountPrice = styled.div`
  color: #4e5968;
  font-size: 17px;
  font-weight: 600;
`;

export const OrderBtn = styled.button`
  width: 84px;
  height: 38px;
  background-color: #3182f6;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 15px;
  font-weight: 500;
`;
