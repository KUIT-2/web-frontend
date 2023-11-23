import React from 'react'
import styled from 'styled-components'
import useCartStore from "../../store/cartStore";



const CartItem = ({ menu }) => {
    const menuCount = useCartStore((state) => state.menuCount[menu.id]);


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