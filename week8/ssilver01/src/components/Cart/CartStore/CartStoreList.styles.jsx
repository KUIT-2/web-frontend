import styled from "styled-components";
import { ReactComponent as ArrowIcon } from "./arrow.svg";


export const CartItems = styled.div`
  height: 250px;
  overflow-y:scroll;
`;

export const MenuImage = styled.div`
  width: 54px;
  height: 54px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #ececec;
`;

export const MenuLabel = styled.span`
  color: #333d4b;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Ingredients = styled.span`
  color: #6b7684;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 210px;
`;

export const Price = styled.span`
  color: #6b7684;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Count = styled.span`
  color: #6b7684;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  
`;

export const StyledArrowIcon = styled(ArrowIcon)`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
`;

