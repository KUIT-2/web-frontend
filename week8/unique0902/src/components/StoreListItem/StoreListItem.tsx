import React from 'react';
import { Link } from 'react-router-dom';
import { ItemInform, ItemName } from '../../styles/ItemStyle';
import {
  StoreItemDescriptionWrapper,
  StoreItemImg,
  StoreItemWrapper,
} from './StoreListItem.styles';

type Props = {
  ranking?: string;
};

const StoreListItem: React.FC<Props> = ({ ranking }: Props) => {
  return (
    <Link to={'1'}>
      <StoreItemWrapper>
        <StoreItemImg src='' alt='' />
        <StoreItemDescriptionWrapper>
          {ranking && <ItemName>{ranking}</ItemName>}
          <ItemName>셀로리 한남점</ItemName>
          <ItemInform>✨4.9(3,919)</ItemInform>
          <ItemInform>13분~30분.배달비 2,000원</ItemInform>
        </StoreItemDescriptionWrapper>
      </StoreItemWrapper>
    </Link>
  );
};

export default StoreListItem;
