import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 110px;
  padding: 20px;
`;

export const MenuImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: #ececec;
  width: 54px;
  height: 54px;
`;

export const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: 600;
  flex-grow: 1;
  max-width: 201px;
  gap: 5px;
  p {
    display: flex;
    align-items: center;
    color: #6b7684;
    font-size: 12px;
  }
`;

export const MenuName = styled.span`
  display: flex;
  gap: 5px;
  margin-bottom: 2px;
  .best {
    color: #3182f6;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
