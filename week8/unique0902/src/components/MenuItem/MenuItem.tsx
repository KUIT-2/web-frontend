import React from 'react';
import useCartStore from '../../api/cartStore';
import { Menu } from '../../store/type/menu';
import { Store } from '../../store/type/store';
import { ItemBest, ItemInform, ItemName } from '../../styles/ItemStyle';
import { rounded } from '../../styles/Theme';
import PrimaryBtn from '../Button/PrimaryBtn/PrimaryBtn';
import RoundedImg from '../Img/RoundedImg';
import {
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
      <RoundedImg
        src={`${menu.img ? `${menu.img}` : ''}`}
        alt=''
        rounded={rounded.full}
      />
      <MenuItemInformDiv>
        <MenuItemNameSect>
          <ItemName>{menu.name}</ItemName>
          {menu.isBest && <ItemBest>BEST</ItemBest>}
        </MenuItemNameSect>
        <ItemInform>{menu.price}</ItemInform>
        <ItemInform>{menu.ingredients}</ItemInform>
      </MenuItemInformDiv>
      <PrimaryBtn handleClick={handleAddMenu} isActivated={true}>
        담기
      </PrimaryBtn>
    </MenuItemSec>
  );
};

export default MenuItem;
