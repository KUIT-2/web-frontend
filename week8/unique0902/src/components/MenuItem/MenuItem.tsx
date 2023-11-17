import React from 'react';
import useCartStore from '../../api/cartStore';
import { Menu } from '../../store/type/menu';
import { Store } from '../../store/type/store';
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
  store: Store;
};

const MenuItem = ({ menu, store }: Props) => {
  const addMenu = useCartStore((state) => state.addMenu);
  const setStore = useCartStore((state) => state.setStore);

  const handleAddMenu = () => {
    addMenu(menu, store.id);
    setStore(store);
  };

  return (
    <MenuItemSec>
      <MenuItemImg src={`${menu.img ? `${menu.img}` : ''}`} alt='' />
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
