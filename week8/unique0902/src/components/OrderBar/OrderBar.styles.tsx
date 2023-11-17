import styled from 'styled-components';
import { color } from '../../styles/Theme';

export const OrderFooter = styled.footer`
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  background-color: ${color.white};
  bottom: 0;
  display: flex;
  flex-direction: row;
  padding: 16px 24px;
  justify-content: space-between;
  border-radius: 16px 16px 0px 0px;
  align-items: center;
  box-shadow: 0px -8px 16px 0px rgba(0, 0, 0, 0.1);
`;
export const OrderSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const OrderSectionTitle = styled.h2`
  font-size: 15px;
  font-weight: 400;
  color: ${color.gray_500};
  margin: 0;
`;
export const OrderSectPrice = styled.p`
  font-size: 17px;
  font-weight: 600;
  color: ${color.gray_700};
  margin: 0;
`;
