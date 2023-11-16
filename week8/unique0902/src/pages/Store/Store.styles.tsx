import styled from 'styled-components';
import { PageFlexRowDiv } from '../../styles/PageStyle';

export const Container = styled.div`
  width: 10px;
`;

export const StoreInformText = styled.p`
  color: #4e5968;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const StoreInformRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const StarWrapper = styled.div`
  color: #ffd158;
  font-size: 18px;
  margin-right: 5px;
`;
export const StoreInformWrapper = styled.section`
  padding: 9px 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const StoreReviewWrapper = styled(PageFlexRowDiv)`
  padding: 8px 24px;
`;

export const StoreMenuTitle = styled.h3`
  color: #6b7684;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const StoreMenuTitleWrapper = styled.div`
  padding: 26px 24px 11px 24px;
`;
