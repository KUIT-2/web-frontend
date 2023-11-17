import React from 'react';
import styled from 'styled-components';
import StoreRating from './StoreRating';
import StoreReviewCount from './StoreReviewCount';
import StoreDetail from './StoreDetail';
import Text from '../../common/components/Text';
import Column from '../../common/components/Column';
import Row from '../../common/components/Row';

const ReviewRow = styled(Row)`
  column-gap: 9px;
  align-items: end;
  margin: 7px 0px 12px 0px;
`;

const StoreProfileColumn = styled(Column)`
  margin-top: 26px;
`;

export default function StoreProfile() {
  return (
    <StoreProfileColumn>
      <Text color="highlight" size="extraLarge" as="h1">
        샐로리 한남점
      </Text>
      <ReviewRow>
        <StoreRating rating={4.9} />
        <StoreReviewCount reviewCount={3919} />
      </ReviewRow>
      <StoreDetail />
    </StoreProfileColumn>
  );
}
