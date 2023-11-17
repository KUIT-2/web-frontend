import styled from "styled-components";
import { ReactComponent as StarIcon } from "./star.svg";

export const StoreList = styled.div`
  height: 116px;
  background: #fff;
  border: none;
  margin: 16px 24px;
  display: flex;
`;

export const div = styled.div`
  margin-left: 17px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const divSubLabel = styled.div`
  display: flex;
  gap: 5px;
`;

//스토어의 이미지 스타일 컴포넌트
export const StoreImage = styled.div`
  width: 54px;
  height: 54px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #ececec;
`;

export const StoreMainLabel = styled.span`
  color: #333d4b;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const SubLabel = styled.span`
  color: #6b7684;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const StyledStarIcon = styled(StarIcon)`
  width: 13.161px;
  height: 13.161px;
  flex-shrink: 0;
  fill: #6b7684;
`;
