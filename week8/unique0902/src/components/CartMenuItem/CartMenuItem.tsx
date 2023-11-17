import React from 'react';
import { OrderIconWrapper } from '../../pages/Cart/Cart.styles';
import { ItemInform, ItemName } from '../../styles/ItemStyle';
import { MenuItemInformDiv, MenuItemSec } from '../MenuItem/MenuItem.styles';
import { AiOutlineRight } from 'react-icons/ai';
import { MenuInCart } from '../../store/type/menu';
import RoundedImg from '../Img/RoundedImg';
import { rounded } from '../../styles/Theme';
type Props = {
  menu: MenuInCart;
};

const CartMenuItem: React.FC<Props> = ({ menu }: Props) => {
  return (
    <MenuItemSec>
      <RoundedImg
        src={`${menu.img ? `${menu.img}` : ''}`}
        alt=''
        rounded={rounded.small}
      />
      <MenuItemInformDiv>
        <ItemName>{menu.name}</ItemName>
        <ItemInform>{menu.ingredients}</ItemInform>
        <ItemInform>{menu.price}원</ItemInform>
      </MenuItemInformDiv>
      <ItemInform>{menu.cnt}개</ItemInform>
      <OrderIconWrapper>
        <AiOutlineRight />
      </OrderIconWrapper>
    </MenuItemSec>
  );
};

export default CartMenuItem;
