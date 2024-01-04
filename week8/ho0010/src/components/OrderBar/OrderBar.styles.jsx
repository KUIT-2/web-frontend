import styled from 'styled-components'

export const OrderBar = styled.div`
position:fixed;
display: flex;
border-top-left-radius : 0.4em;
border-top-right-radius : 0.4em;
bottom:0px;
box-shadow: 0px -2px 4px -2px black ;
width:390px;
height:80px;
background-color:#ffffff;
`

export const OrderBarLeft = styled.div`
display:flex;
flex-direction:column;
padding:10px;
gap:5px;    
font-size: 15px;

`
export const OrderBarButton = styled.button`
border-radius: 6px;
display: inline-block;
background-color: #3182f6;
cursor: pointer;
margin: 10px 10px 20px 20px;
margin-left:auto;
font-size:10px;
color:#ffffff;
border:none;
`
export const Bold = styled.div`
font-weight : bold
`