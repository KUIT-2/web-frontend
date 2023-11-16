import React from 'react';
import { Link } from 'react-router-dom';
import { ItemInform, ItemName } from '../../styles/ItemStyle';
import {
  StoreItemDescriptionWrapper,
  StoreItemImg,
  StoreItemWrapper,
} from './StoreListItem.styles';

type Props = {
  id: number;
  name: string;
  rate: number;
  reviewCnt: number;
  deliveryFee: number;
  minDeliveryTime: number;
  maxDeliveryTime: number;
  ranking?: string;
};

const StoreListItem: React.FC<Props> = ({
  id,
  name,
  rate,
  reviewCnt,
  deliveryFee,
  minDeliveryTime,
  maxDeliveryTime,
  ranking,
}: Props) => {
  return (
    <Link to={`${id}`}>
      <StoreItemWrapper>
        <StoreItemImg src='' alt='' />
        <StoreItemDescriptionWrapper>
          {ranking && <ItemName>{ranking}</ItemName>}
          <ItemName>{name}</ItemName>
          <ItemInform>
            ✨{rate}({reviewCnt})
          </ItemInform>
          <ItemInform>
            {minDeliveryTime}분~{maxDeliveryTime}분.배달비 {deliveryFee}원
          </ItemInform>
        </StoreItemDescriptionWrapper>
      </StoreItemWrapper>
    </Link>
  );
};

export default StoreListItem;
