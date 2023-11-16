import React from 'react'
import styled from 'styled-components'


const CartItem = ({ menu }) => {
    return (
        <Item>
            <ItemImg />
            <ItemInf>
                <h4>{menu.name}</h4>
                <div>추천소스...</div>
                <div>{menu.price}원</div>
            </ItemInf>
            <ItemNum></ItemNum>
            <div> &gt;</div>
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
`
const ItemInf = styled.div`
display:flex;
flex-direction : column;
`
const ItemNum = styled.div`
`
const Item = styled.div`
display:flex;
`