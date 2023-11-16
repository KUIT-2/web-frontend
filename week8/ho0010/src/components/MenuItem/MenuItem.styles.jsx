import styled from "styled-components";

export const MenuListComponent = styled.div`
margin:15px;
display:flex;
width:390px;
height:110px;
align-items:center;
`
export const MenuImg = styled.div`
background-color : #E2E2E2;
width : 54px;
height : 54px;
border-radius : 50%;
display:flex;
`

export const MenuText = styled.div`
display :flex;
flex-direction : column;
margin-left : 20px;
width:230px;
gap:4px;
justify-items:center;
`
export const MenuName = styled.div`
font-weight: bold;
font-size: 18px;
`
export const MenuIngr = styled.div`
color: #6B7684;
font-size : 0.8em;
font-weight: 600;


`
export const MenuPrice = styled.div`
font-weight: 600;

color: #6B7684;
font-size : 0.8em;
`

export const MenuButton = styled.button`
display: inline-block;
border-radius: 6px;
background-color: #3182f6;
cursor: pointer;
margin: 10px 10px 20px 20px;
width:52px;
height:32px;
color: #ffffff;
font-size:12px;
border:none;
`
export const ImgContainer = styled.div`
display:flex;
align-items:center;
`