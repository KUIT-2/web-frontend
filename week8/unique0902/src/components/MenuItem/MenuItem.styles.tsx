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
`;
export const MenuItemNameSect = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;

export const MenuItemName = styled.h3`
  color: #333d4b;
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 600;
`;

export const MenuItemBest = styled.p`
  color: #3182f6;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
`;

export const MenuItemNormalInform = styled.p`
  color: #6b7684;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
`;

export const MenuItemImg = styled.img`
  width: 54px;
  height: 54px;
  background: #ececec;
  border-radius: 27px;
`;
