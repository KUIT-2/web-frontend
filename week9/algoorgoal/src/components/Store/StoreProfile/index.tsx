import React from 'react';
import styled from 'styled-components';
import StoreRating from './StoreRating';
import StoreReviewCount from './StoreReviewCount';
import StoreDetail from './StoreDetail';
import Row from '../../common/Row';
import Column from '../../common/Column';
import useCartStore from '../../../store/cartStore';
import Text from '../../common/Text';

const ReviewRow = styled(Row)`
  column-gap: 9px;
  align-items: end;
  margin: 7px 0px 12px 0px;
`;

const StoreProfileColumn = styled(Column)`
  margin-top: 26px;
`;

export default function StoreProfile() {
  const store = useCartStore((state) => state.store);

  if (!store) {
    return <>찾을 수 없어요</>;
  }

  return (
    <StoreProfileColumn>
      <Text color="highlight" size="extraLarge" as="h1">
        {store?.name}
      </Text>
      <ReviewRow>
        <StoreRating rating={store?.rating} />
        <StoreReviewCount reviewCount={store?.reviewCount} />
      </ReviewRow>
      <StoreDetail />
    </StoreProfileColumn>
  );
}
