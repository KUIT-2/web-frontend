import React from 'react';
import useCartStore from '../../api/cartStore';
import { Menu } from '../../store/type/menu';
import { ItemBest, ItemInform, ItemName } from '../../styles/ItemStyle';
import PrimaryBtn from '../Button/PrimaryBtn/PrimaryBtn';
import {
  MenuItemImg,
  MenuItemInformDiv,
  MenuItemNameSect,
  MenuItemSec,
} from './MenuItem.styles';

type Props = {
  menu: Menu;
};

const MenuItem = ({ menu }: Props) => {
  const addMenu = useCartStore((state) => state.addMenu);

  const handleAddMenu = () => {
    addMenu(menu);
  };

  return (
    <MenuItemSec>
      <MenuItemImg src='' alt='' />
      <MenuItemInformDiv>
        <MenuItemNameSect>
          <ItemName>{menu.name}</ItemName>
          {menu.isBest && <ItemBest>BEST</ItemBest>}
        </MenuItemNameSect>
        <ItemInform>{menu.price}</ItemInform>
        <ItemInform>{menu.ingredients}</ItemInform>
      </MenuItemInformDiv>
      <PrimaryBtn handleClick={handleAddMenu}>담기</PrimaryBtn>
    </MenuItemSec>
  );
};

export default MenuItem;
