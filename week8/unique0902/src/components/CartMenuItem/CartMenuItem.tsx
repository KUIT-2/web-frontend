import React from 'react';
import { OrderIconWrapper } from '../../pages/Cart/Cart.styles';
import { ItemInform, ItemName } from '../../styles/ItemStyle';
import { MenuItemInformDiv, MenuItemSec } from '../MenuItem/MenuItem.styles';
import { StoreItemImg } from '../StoreListItem/StoreListItem.styles';
import { AiOutlineRight } from 'react-icons/ai';
import { Menu } from '../../store/type/menu';
type Props = {
  menu: Menu;
};

const CartMenuItem: React.FC<Props> = ({ menu }: Props) => {
  return (
    <MenuItemSec>
      <StoreItemImg src='' alt='' />
      <MenuItemInformDiv>
        <ItemName>토마토 샐러드</ItemName>
        <ItemInform>추천소스, 채소볼, 베이컨추가, 시저드레싱 추가</ItemInform>
        <ItemInform>10600원</ItemInform>
      </MenuItemInformDiv>
      <ItemInform>1개</ItemInform>
      <OrderIconWrapper>
        <AiOutlineRight />
      </OrderIconWrapper>
    </MenuItemSec>
  );
};

export default CartMenuItem;
