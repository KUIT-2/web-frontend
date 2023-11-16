import React from 'react';
import useCartStore from '../../api/cartStore';
import { Menu } from '../../store/type/menu';
import PrimaryBtn from '../Button/PrimaryBtn/PrimaryBtn';
import {
  MenuItemBest,
  MenuItemImg,
  MenuItemInformDiv,
  MenuItemName,
  MenuItemNameSect,
  MenuItemNormalInform,
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
          <MenuItemName>{menu.name}</MenuItemName>
          {menu.isBest && <MenuItemBest>BEST</MenuItemBest>}
        </MenuItemNameSect>
        <MenuItemNormalInform>{menu.price}</MenuItemNormalInform>
        <MenuItemNormalInform>{menu.ingredients}</MenuItemNormalInform>
      </MenuItemInformDiv>
      <PrimaryBtn handleClick={handleAddMenu}>담기</PrimaryBtn>
    </MenuItemSec>
  );
};

export default MenuItem;
