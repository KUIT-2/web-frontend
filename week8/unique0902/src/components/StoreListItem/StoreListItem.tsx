import React from 'react';
import { Link } from 'react-router-dom';
import { StarIcn } from '../../asset/img/icon';
import { Store } from '../../store/type/store';
import { ItemInform, ItemName } from '../../styles/ItemStyle';
import { color, rounded } from '../../styles/Theme';
import RoundedImg from '../Img/RoundedImg';
import {
  StoreItemDescriptionWrapper,
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
        <RoundedImg
          src={`${store.img ? `${store.img}` : ''}`}
          alt=''
          rounded={rounded.small}
        />
        <StoreItemDescriptionWrapper>
          {ranking && <ItemName>{ranking}</ItemName>}
          <ItemName>{store.name}</ItemName>
          <ItemInform>
            <StarIcn width={13} height={13} fill={color.gray_800} />
            {store.rate}({store.reviewCnt})
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
