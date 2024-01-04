import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 40px;
  margin-bottom: 110px;
`;

export const Wrapper = styled.div`
  display: flex;
  height: 120px;
  padding: 20px;
  gap: 15px;
`;
export const StoreImage = styled.div`
  border-radius: 10px;
  background-color: #ececec;
  width: 64px;
  height: 64px;
`;
export const StoreBox = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  gap: 5px;
  p {
    display: flex;
    align-items: center;
    font-size: 18px;
  }
  span {
    color: #6b7684;
    font-size: 14px;
  }
`;

export const FoodCategory = styled.h1`
  display: flex;
  align-items: flex-end;
  height: 59px;
  padding: 0 20px;
  font-weight: bold;
`;
