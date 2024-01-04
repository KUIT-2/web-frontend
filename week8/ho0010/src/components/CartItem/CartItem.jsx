import React from 'react'
import styled from 'styled-components'
import useCartStore from "../../store/cartStore";



const CartItem = ({ menu }) => {

//const menus = useCartStore((state) => state.menus);
//const menuCnt = menus.reduce((acc, cur) => cur.id === menu.id ? acc +1 : acc, 0)
//console.log(menu.id);
// 위 방법으로 구현하려고 했으나 cartStore 에서 addmenu를 통해 메뉴를 담을 때 같은
// 메뉴는 들어가지 않고 menucount를 이용했기에 cartstore를 수정해야함
//cartstore를 수정했으나 같은 메뉴를 출력하지 않고 걸러내면서 count하는 방법을
//모르겠고 다른 부분또한 연쇄적으로 수정할게 많아져서 다른 방법사용했습니다 ㅠㅠ
//의중은 이해했습니다! 감사합니다 !

const menuCount = useCartStore((state) => state.menuCount[menu.id])

    return (
        <Item>
            <ItemImg />
            <ItemInf>
                <ItemMenu>{menu.name}</ItemMenu>
                <ItemOption>추천소스...</ItemOption>
                <ItemPrice>{menu.price}원</ItemPrice>
            </ItemInf>
            <ItemNum> {menuCount}개</ItemNum>
            <ItemOptionButton> &gt;</ItemOptionButton>
        </Item>
    )
}

export default CartItem

const ItemImg = styled.div`
background-color : #E2E2E2;
width : 54px;
height : 54px;
border-radius : 20%;
display:flex;
margin-left:20px;

`
const ItemInf = styled.div`
display:flex;
flex-direction : column;
margin-left:20px;
gap:5px;


`
const Item = styled.div`
display:flex;
padding-bottom:20px;
padding-top:20px;
border-bottom: 1px solid #E5E8EB;


`
const ItemMenu = styled.div`
font-weight:700;
font-size:17px;
`
const ItemOption = styled.div`
font-weight:500;
font-size:13px;
color:#6b7684;
`
const ItemPrice = styled.div`
font-weight:500;
font-size:13px;
color:#6b7684;
`
const ItemNum = styled.div`
display:flex;
margin-left:auto;
align-items:center;
font-size:15px;
color:#6b7684;
`
const ItemOptionButton = styled.button`
background-color:#fff;
border:none;
cursor: pointer;
margin:5px;

`