import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 40px;
  margin-bottom: 110px;
`;

export const StoreInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px 20px;
  height: 200px;
  font-weight: bold;
  border-bottom: 1px solid #ececec;
  .rate {
    margin: 5px 0;
    .rate-number {
      color: #4e5968;
      font-size: 18px;
    }
  }
  h1 {
    display: flex;
    align-items: flex-end;
    height: 59px;
  }
  p {
    color: #6b7684;
  }
  .delivery-info {
    display: flex;
    gap: 5px;
    span {
      width: 70px;
    }
  }
`;
export const FoodCategory = styled.div`
  padding: 20px 0 10px 20px;
  color: #6b7684;
  font-weight: bold;
  font-size: 20px;
`;
