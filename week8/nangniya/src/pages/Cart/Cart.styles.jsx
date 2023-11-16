import styled from "styled-components";

export const Container = styled.div`
  margin-top: 40px;
  margin-bottom: 130px;
`;

export const BottomBox = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 130px;
  padding: 20px;
  background-color: white;
  gap: 20px;
  p {
    display: flex;
    justify-content: center;
    font-weight: bold;
    color: #6b7684;
  }
  button {
    padding: 20px;
    border-radius: 16px;
  }
`;

export const StoreTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  border-top: 16px solid #ececec;
  padding: 20px;
  h3 {
    color: #6b7684;
  }
  span {
    color: #f1505d;
    display: flex;
    gap: 5px;
  }
`;
export const CartBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  .menu-quantity {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: #6b7684;
  }
  .chevron {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MenuImage = styled.div`
  display: flex;
  border-radius: 12px;
  width: 54px;
  height: 54px;
  background-color: #ececec;
`;

export const MenuInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  font-weight: bold;
  max-width: 200px;
  justify-content: space-between;
  gap: 5px;
  span {
    color: #6b7684;
    font-size: 12px;
  }
`;

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  p {
    display: flex;
    justify-content: space-between;
    padding: 20px 20px 0 20px;
    font-weight: bold;
  }
  .individual-info {
    color: #6b7684;
    span {
      color: #8b95a1;
    }
  }
  .total-price {
    font-weight: bold;
    color: #4e5968;
    margin-top: 10px;
    font-size: 17px;
  }
`;

export const AddMore = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #ececec;
  color: #3182f6;
  font-weight: bold;
  font-size: 17px;
  border-bottom: 16px solid #ececec;
  padding: 20px;
  height: 80px;
`;
