import styled from "styled-components";
import { ReactComponent as StarIcon } from "./StarIcon.svg";

export const div = styled.div`
  width: 390px;
  height: 770px;
  border: 2px solid;
  position: relative;
`;

export const MainLabel = styled.div`
  color: #191f28;
  font-family: Pretendard;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 26px 0 2px 24px;
`;

export const StyledStarIcon = styled(StarIcon)`
  width: 18px;
  height: 19px;
  flex-shrink: 0;
`;

export const Rate = styled.div`
  color: #4e5968;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Label15 = styled.div`
  color: #4e5968;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Info = styled.div`
  display: flex;
  gap: 12px;
  padding-top: 9px;
  padding-left: 24px;
`;

export const MenuMainLabel = styled.div`
  color: #6b7684;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 26px 0 11px 24px;
  border-top: solid 2px #e5e8eb;
`;
