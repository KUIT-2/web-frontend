import React from 'react';
import { OrderIconWrapper } from '../../pages/Cart/Cart.styles';
import { ItemInform, ItemName } from '../../styles/ItemStyle';
import { MenuItemInformDiv, MenuItemSec } from '../MenuItem/MenuItem.styles';
import { MenuInCart } from '../../store/type/menu';
import RoundedImg from '../Img/RoundedImg';
import { color, rounded } from '../../styles/Theme';
import { RightIcn } from '../../asset/img/icon';
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
        <RightIcn width={16} height={16} fill={color.gray_500} />
      </OrderIconWrapper>
    </MenuItemSec>
  );
};

export default CartMenuItem;
