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
  MenuItemPrimaryBtnText,
  MenuItemSec,
} from './MenuItem.styles';

type Props = {
  menu: Menu;
  storeInNowPage: Store;
};

const MenuItem = ({ menu, storeInNowPage }: Props) => {
  const addMenu = useCartStore((state) => state.addMenu);
  const clearMenu = useCartStore((state) => state.clearMenu);
  const setStore = useCartStore((state) => state.setStore);
  const store = useCartStore((state) => state.store);

  const handleAddMenu = () => {
    if (!store) {
      setStore(storeInNowPage);
    } else {
      if (store.id !== storeInNowPage.id) {
        clearMenu();
        setStore(storeInNowPage);
      }
    }
    addMenu(menu, storeInNowPage);
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
        <MenuItemPrimaryBtnText>담기</MenuItemPrimaryBtnText>
      </PrimaryBtn>
    </MenuItemSec>
  );
};

export default MenuItem;
