import React from 'react';
import * as S from './MenuItem.styles';
import Button from '../Button/Button';

const MenuItem = ({ handleAddMenu, menu }) => {
  return (
    <S.Wrapper>
      <S.MenuImage />
      <S.MenuBox>
        <S.MenuName>
          <h3>{menu.name}</h3>
          {menu.isBest ? <h3 className="best">BEST</h3> : null}
        </S.MenuName>
        <p>{menu.price.toLocaleString()}원</p>
        <p>{menu.ingredients}</p>
      </S.MenuBox>
      <S.ButtonWrapper>
        <Button onClick={handleAddMenu} type="button">
          담기
        </Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

export default MenuItem;
