import styled from 'styled-components';
import { PageFlexRowDiv } from '../../styles/PageStyle';
import { color, flexRowStyle, fontSize, fontWeight } from '../../styles/Theme';

export const CartHeader = styled.header`
  ${flexRowStyle}
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
  font-size: 17px;
  font-weight: 700;
`;
export const OrderWarningMinPrice = styled(PageFlexRowDiv)`
  color: ${color.warning};
  font-size: 15px;
  font-weight: 500;
  gap: 4px;
`;

export const CartCancelBtn = styled.button`
  color: ${color.gray_800};
  font-size: 16px;
  font-weight: 600;
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
  ${flexRowStyle}
  gap: 15px;
`;
export const CartMenuItemWrapper = styled.div`
  border-bottom: 1px solid ${color.border_top};
`;
export const OrderAddMoreBtn = styled.button`
  width: 100%;
  color: ${color.primary_500};
  font-size: 17px;
  font-weight: 600;
  ${flexRowStyle}
  justify-content: center;
  gap: 4px;
  padding: 19px 0;
  cursor: pointer;
  &:hover {
    filter: opacity(0.5) drop-shadow(0 0 0 ${color.border_top});
  }
`;

export const OrderPriceSumSect = styled.section`
  margin: 16px 0;
  display: flex;
  flex-direction: column;
`;
export const OrderPriceRowSect = styled.section`
  margin: 16px 0;
  ${flexRowStyle}
  justify-content: space-between;
  padding: 24px 10px;
`;

export const OrderPriceText = styled.p`
  color: ${color.gray_600};
  font-size: 17px;
  font-weight: 500;
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
  font-size: 17px;
  font-weight: 500;
`;

export const CartPrimaryBtn = styled.p`
  color: ${color.white};
  font-size: ${fontSize.xxm};
  font-weight: ${fontWeight.semiBold};
`;
