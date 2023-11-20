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

const StoreNameRow = styled(Row)`
  justify-content: space-between;
`;

const FoodItemWrapper = styled(Row)`
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
  return (
    <>
      <NavigationRow>
        <BackButton />
        <CancelButton />
      </NavigationRow>
      <StoreNameRow>
        <Text size="medium" color="muted">
          샐러리 한남점
        </Text>
        <Text size="small" color="danger">
          최소금액 미달
        </Text>
      </StoreNameRow>
      <FoodItemWrapper>
        <SquarePortraitIcon width="54px" />
        <Column>
          <Text color="base" size="medium">
            토마토 샐러드
          </Text>
          <Text color="muted" size="small">
            추천소스, 채소볼, 베이컨추가, 시저드레싱 추가
          </Text>
          <Text color="muted" size="small">
            10,600원
          </Text>
        </Column>
        <Text color="muted" size="small">
          1개
        </Text>
      </FoodItemWrapper>
      <CenteredRow>
        <InversedPrimaryButton onClick={() => {}}>
          더 담기 +
        </InversedPrimaryButton>
      </CenteredRow>
      <Column>
        <PriceRow>
          <Text color="muted" size="medium">
            주문금액
          </Text>
          <Text color="base" size="medium">
            10600원
          </Text>
        </PriceRow>
        <PriceRow>
          <Text color="muted" size="medium">
            배달요금
          </Text>
          <Text color="base" size="medium">
            2000원
          </Text>
        </PriceRow>
        <PriceRow>
          <Text color="highlight" size="medium">
            총 결제금액
          </Text>
          <Text color="base" size="medium">
            12600원
          </Text>
        </PriceRow>
      </Column>
      <Column>
        <CenteredRow>
          <Text color="muted" size="medium">
            최소 주문금액 13000원
          </Text>
        </CenteredRow>
        <CenteredRow>
          <PaymentButton width="80%" onClick={() => {}}>
            12600원 결제하기
          </PaymentButton>
        </CenteredRow>
      </Column>
    </>
  );
}
