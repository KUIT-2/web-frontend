import styled from 'styled-components';
import { StoresCategory, StoresHeader } from '../Stores/Stores.styles';
import { StoreItemContainer, StoreItemName } from '../../components/StoreItem/StoreItem.styles';

export const CartHeader = styled(StoresHeader)`
  display: flex;
  justify-content: space-between;
  padding-right: 15px;
`;

export const CartCancel = styled(StoreItemName)`
  margin-top: 0px;
  font-size: 16px;
`;

export const CartOrderCategory = styled(StoresCategory)`
  display: flex;
  justify-content: space-between;
  padding-bottom: 12px;
  padding-right: 25px;
`;

export const CartStoreName = styled.span`
  font-family: 'Pretendard-Bold';
  font-size: 17px;
  color: #6b7684;
`;

export const CartPriceWarning = styled.span`
  display: flex;
  align-items: center;
`;

export const CartPriceLimitLabel = styled.span`
  color: #f04452;
  font-family: 'Pretendard-Medium';
  font-size: 15px;
`;

export const CartPriceLimitIcon = styled.img`
  width: 13px;
  height: 13px;
  margin-left: 6px;
`;

export const CartOrderItem = styled(StoreItemContainer)``;

export const CartAddBtn = styled.span`
  color: #3182f6;
  font-family: 'Pretendard-SemiBold';
  font-size: 17px;
`;

export const CartOrderPriceBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 24px;
`;

export const CartOrderPriceLabel = styled.span`
  color: #8b95a1;
  font-family: 'Pretendard-Medium';
  font-size: 17px;
`;

export const CartOrderPrice = styled(CartOrderPriceLabel)`
  color: #505967;
`;

export const CartOrderSum = styled(CartOrderPriceBar)`
  padding: 16px 24px;
`;

export const CartOrderSumLabel = styled.span`
  color: #4e5968;
  font-family: 'Pretendard-SemiBold';
  font-size: 17px;
`;

export const CartCtaBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0px;
  background: #fff;
`;

export const CartCtaLabel = styled.span`
  color: #6b7684;
  font-family: 'Pretendard-Bold';
  font-size: 17px;
`;

export const CartCtaNotBuy = styled.div`
  margin: 19px auto;
  padding: 18px 112px;
  border-radius: 16px;
  background: #d0dffb;

  color: #fff;
  font-family: 'Pretendard-SemiBold';
  font-size: 16px;
  text-align: center;
`;

export const CartCtaDoBuy = styled(CartCtaNotBuy)`
  background: #3182f6;
`;
