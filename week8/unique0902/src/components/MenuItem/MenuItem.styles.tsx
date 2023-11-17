import styled from 'styled-components';

export const MenuItemSec = styled.section`
  padding: 16px 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const MenuItemInformDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 400px;
  @media screen and (max-width: 500px) {
    width: 200px;
  }
`;
export const MenuItemNameSect = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 500px) {
    align-items: flex-start;
  }
  gap: 6px;
`;
