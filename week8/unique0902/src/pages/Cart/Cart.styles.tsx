import styled from 'styled-components';
import { PageFlexRowDiv } from '../../styles/PageStyle';

export const PrimaryButton = styled.button<{ $isActivated: boolean }>`
  border: none;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: ${(props) =>
      props.$isActivated ? '#1d4a89' : '#D0DFFB'};
  }
  background-color: ${(props) => (props.$isActivated ? '#3182F6' : '#D0DFFB')};
  color: white;
  padding: 10px 16px;
  border-radius: 8px;
  border: none;
`;
export const CartHeader = styled.header`
  display: flex;
  flex: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 16px #f2f4f6 solid;
`;

export const OrderHeaderWrapper = styled(PageFlexRowDiv)`
  padding: 26px 24px 12px 24px;
  justify-content: space-between;
`;

export const OrderStoreText = styled.h3`
  color: #6b7684;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const OrderWarningMinPrice = styled(PageFlexRowDiv)`
  color: #f04452;
  text-align: right;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  gap: 4px;
`;

export const CartCancelBtn = styled.button`
  color: #333d4b;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 10px;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    color: #a7abb0;
  }
`;
export const OrderSect = styled.section`
  border-bottom: 16px #f2f4f6 solid;
`;
export const OrderIconWrapper = styled.div`
  font-size: 16px;
  color: #6b7684;
`;
export const OrderMenuInformWrapper = styled.section`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
`;

export const OrderAddMoreBtn = styled.button`
  border-top: 1px solid #e5e8eb;
  width: 100%;
  color: #3182f6;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 19px 0;
  cursor: pointer;
  &:hover {
    color: #0f2d57;
  }
`;

export const OrderPriceSumSect = styled.section`
  margin: 16px 0;
  display: flex;
  flex-direction: column;
`;
export const OrderPriceRowSect = styled.section`
  margin: 16px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 10px;
`;

export const OrderPriceText = styled.p`
  color: #505967;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const OrderPriceTitle = styled(OrderPriceText)`
  color: #8b95a1;
`;
export const OrderTotalPriceTitle = styled(OrderPriceText)`
  color: #4e5968;
`;
export const OrderTotalPriceText = styled(OrderPriceText)`
  color: #4e5968;
  font-weight: 600;
`;

export const OrderFooter = styled.footer`
  position: fixed;
  width: 100%;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  padding: 20px;
  gap: 20px;
`;
export const OrderFooterText = styled.p`
  color: #6b7684;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const OrderFooterBtn = styled(PrimaryButton)`
  width: 100%;
  border-radius: 16px;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-top: 18px;
  padding-bottom: 19px;
`;
