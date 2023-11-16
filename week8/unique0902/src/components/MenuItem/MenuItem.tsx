import React from 'react';
import useCartStore from '../../api/cartStore';
import { Menu } from '../../store/type/menu';
import PrimaryBtn from '../Button/PrimaryBtn/PrimaryBtn';

type Props = {
  menu: Menu;
};

const MenuItem = ({ menu }: Props) => {
  const addMenu = useCartStore((state) => state.addMenu);

  const handleAddMenu = () => {
    addMenu(menu);
  };

  return (
    <div>
      <img src='' alt='' />
      <div>
        <div>
          <h3>{menu.name}</h3>
          {menu.isBest && <p>BEST</p>}
        </div>
        <span>{menu.price}</span>
        <p>{menu.ingredients}</p>
      </div>
      <PrimaryBtn handleClick={handleAddMenu}>담기</PrimaryBtn>
    </div>
  );
};

export default MenuItem;
