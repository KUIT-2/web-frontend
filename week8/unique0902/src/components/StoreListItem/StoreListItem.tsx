import React from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../../store/type/store';
import { ItemInform, ItemName } from '../../styles/ItemStyle';
import {
  StoreItemDescriptionWrapper,
  StoreItemImg,
  StoreItemWrapper,
} from './StoreListItem.styles';

type Props = {
  store: Store;
  ranking?: string;
};

const StoreListItem: React.FC<Props> = ({ store, ranking }: Props) => {
  return (
    <Link to={`${store.id}`}>
      <StoreItemWrapper>
        <StoreItemImg src={`${store.img ? `${store.img}` : ''}`} alt='' />
        <StoreItemDescriptionWrapper>
          {ranking && <ItemName>{ranking}</ItemName>}
          <ItemName>{store.name}</ItemName>
          <ItemInform>
            ✨{store.rate}({store.reviewCnt})
          </ItemInform>
          <ItemInform>
            {store.minDeliveryTime}분~{store.maxDeliveryTime}분.배달비{' '}
            {store.deliveryFee}원
          </ItemInform>
        </StoreItemDescriptionWrapper>
      </StoreItemWrapper>
    </Link>
  );
};

export default StoreListItem;
