import React from 'react'
import styled from 'styled-components';

const Menu = styled.div`
  display: flex;
  height: 110px
`;

const MenuImage = styled.div`
    box-sizing: border-box;
    border-radius: 8px;
    background: #ECECEC;
    width: 54px;
    height: 54px;
    flex-shrink: 0;
    margin-top: 28px;
    margin-bottom: 28px;
    margin-left: 24px;    
`;

const MenuInfo = styled.div`
  display : flex;
  flex-direction: column;
  margin: 16px;
  gap: 5px;
  width: 201px; 
`;

const MenuName = styled.span`
  color: #333D4B;
  font-family: Pretendard-SemiBold;
  font-size: 17px;
  line-height: normal;
`;

const MenuPrice = styled.span`
  color: #6B7684;
  font-family: Pretendard-Medium;
  font-size: 13px;
  font-style: normal;
  line-height: normal;
`;

const MenuCount = styled.div`
    margin: 46px 14px 46px 0px;
    color: #6B7684;
    font-family: Pretendard-Medium;
    font-size: 15px;
    line-height: normal;
`;

const Button = styled.div`
    margin: 48px 20px 46px 0px;
`;

const OrderItem = ({ menu }) => {
  return (
    <Menu>
        <MenuImage />
        <MenuInfo>
            <MenuName>{menu.name}</MenuName>
            <MenuPrice>{menu.ingredients}</MenuPrice>
            <MenuPrice>{menu.price}원</MenuPrice>
        </MenuInfo>
        <MenuCount>1개</MenuCount>
        <Button>{'>'}</Button>
    </Menu>
  )
}

export default OrderItem