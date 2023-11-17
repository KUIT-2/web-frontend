import styled from 'styled-components';
import { PageFlexRowDiv } from '../../styles/PageStyle';
import { color } from '../../styles/Theme';

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
  border-bottom: 16px ${color.border} solid;
`;

export const OrderHeaderWrapper = styled(PageFlexRowDiv)`
  padding: 26px 24px 12px 24px;
  justify-content: space-between;
`;

export const OrderStoreText = styled.h3`
  color: ${color.gray_500};
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const OrderWarningMinPrice = styled(PageFlexRowDiv)`
  color: ${color.warning};
  text-align: right;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  gap: 4px;
`;

export const CartCancelBtn = styled.button`
  color: ${color.gray_800};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 10px;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    color: ${color.gray_500};
  }
`;
export const OrderSect = styled.section`
  border-bottom: 16px ${color.border} solid;
`;
export const OrderIconWrapper = styled.div`
  font-size: 16px;
  color: ${color.gray_500};
`;
export const OrderMenuInformWrapper = styled.section`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
`;

export const OrderAddMoreBtn = styled.button`
  border-top: 1px solid ${color.border_top};
  width: 100%;
  color: ${color.primary_500};
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
    color: ${color.primary_100};
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
  color: ${color.gray_600};
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const OrderPriceTitle = styled(OrderPriceText)`
  color: ${color.gray_400};
`;
export const OrderTotalPriceTitle = styled(OrderPriceText)`
  color: ${color.gray_700};
`;
export const OrderTotalPriceText = styled(OrderPriceText)`
  color: ${color.gray_700};
  font-weight: 600;
`;

export const OrderFooter = styled.footer`
  position: fixed;
  width: 100%;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: ${color.white};
  align-items: center;
  padding: 20px;
  gap: 20px;
`;
export const OrderFooterText = styled.p`
  color: ${color.gray_500};
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
