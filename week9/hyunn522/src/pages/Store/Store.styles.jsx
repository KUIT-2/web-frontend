import styled from "styled-components";

export const StoreHeader = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
`;

export const StoreName = styled.div`
  padding-top: 26px;
  padding-left: 24px;

  font-family: "Pretendard-Bold";
  font-size: 26px;
  color: #191f28;
`;

export const StoreReview = styled.div`
  padding-left: 24px;
  padding-top: 7px;
  padding-bottom: 12px;
  display: flex;
`;

export const StoreStar = styled.span`
  padding-right: 5px;
`;

export const StoreRate = styled.span`
  padding-right: 9px;
  color: #4e5968;
  font-family: "Pretendard-SemiBold";
  font-size: 17px;
`;

export const StoreDesc = styled.span`
  color: #4e5968;
  font-family: "Pretendard-Medium";
  font-size: 15px;
`;

export const StoreDetail = styled.div`
  padding-left: 24px;
  padding-top: 9px;
  display: flex;
  gap: 12px;
`;

export const StoreLastDetail = styled(StoreDetail)`
  padding-bottom: 14px;
`;

export const StoreMenuHeader = styled.div`
  padding-left: 24px;
  padding-top: 26px;
  padding-bottom: 11px;

  color: #6b7684;
  font-family: "Pretendard-SemiBold";
`;
