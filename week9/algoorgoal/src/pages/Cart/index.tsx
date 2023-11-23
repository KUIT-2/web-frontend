import React from 'react';
import styled from 'styled-components';
import NavigationRow from '../../components/common/NavigationRow';
import BackButton from '../../components/common/NavigationRow/BackButton';
import CancelButton from '../../components/common/NavigationRow/CancelButton';
import Text from '../../components/common/Text';
import Row from '../../components/common/Row';
import { SquarePortraitIcon } from '../../common/styles/Icons';
import Column from '../../components/common/Column';
import Button from '../../components/common/Button';
import theme from '../../common/styles/theme';
import useCartStore from '../../store/cartStore';
import ItemsInCart from '../../components/Cart/ItemsInCart';
import AddMoreButton from '../../components/Cart/AddMoreButton';

const StoreNameRow = styled(Row)`
  justify-content: space-between;
`;

const InversedPrimaryButton = styled(Button)`
  box-sizing: border-box;
  color: ${theme.color.primary};
  background-color: ${theme.color.white};
`;

const CenteredRow = styled(Row)`
  justify-content: center;
`;

const PriceRow = styled(Row)`
  justify-content: space-between;
`;

const PaymentButton = styled(Button)`
  height: 56px;
`;

export default function Order() {
  const { store, menu } = useCartStore();

  const totalOrderValue =
    menu &&
    menu.reduce((accumulator, menuItem) => accumulator + menuItem.price, 0);

  const isMinimumOrderValueSatisfied =
    totalOrderValue && store && totalOrderValue > store.minimumOrderValue;

  if (!store || !menu) {
    return <>주문 내역이 없어요</>;
  }

  const { deliveryFee, minimumOrderValue } = store;
  const totalPayment = totalOrderValue! + deliveryFee;

  return (
    <>
      <NavigationRow>
        <BackButton />
        <CancelButton />
      </NavigationRow>
      <StoreNameRow>
        <Text size="medium" color="muted">
          {store.name}
        </Text>

        {!isMinimumOrderValueSatisfied && (
          <Text size="small" color="danger">
            최소금액 미달
          </Text>
        )}
      </StoreNameRow>
      <ItemsInCart />
      <CenteredRow>
        <AddMoreButton />
      </CenteredRow>
      <Column>
        <PriceRow>
          <Text color="muted" size="medium">
            주문금액
          </Text>
          <Text color="base" size="medium">
            {totalOrderValue}
          </Text>
        </PriceRow>
        <PriceRow>
          <Text color="muted" size="medium">
            배달요금
          </Text>
          <Text color="base" size="medium">
            {deliveryFee}
          </Text>
        </PriceRow>
        <PriceRow>
          <Text color="highlight" size="medium">
            총 결제금액
          </Text>
          <Text color="base" size="medium">
            {totalPayment}
          </Text>
        </PriceRow>
      </Column>
      <Column>
        <CenteredRow>
          <Text color="muted" size="medium">
            최소 주문금액 {minimumOrderValue}원
          </Text>
        </CenteredRow>
        <CenteredRow>
          <PaymentButton width="80%" onClick={() => {}}>
            {totalPayment}원 결제하기
          </PaymentButton>
        </CenteredRow>
      </Column>
    </>
  );
}
