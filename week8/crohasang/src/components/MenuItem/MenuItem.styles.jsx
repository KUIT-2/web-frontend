import styled from "styled-components";



export const WrapMenu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
`;

export const MenuThumbnail = styled.div`

    width: 54px;
    height: 54px;
    border-radius: 27px;
    background: #ECECEC;
`;

export const MenuInfo = styled.div`
    margin-left: 10px;
    margin-right: 20px;
    display: flex;
    flex-direction : column;
    justify-content: space-around;
    
`;

export const MenuName = styled.span`
font-family: Pretendard;
font-size: 17px;
font-weight: 600;
line-height: 20px;
letter-spacing: 0px;
text-align: left;
color: #333D4B;

`;

export const AboutMenu = styled.div`
font-family: Pretendard;
width: max-content;
max-width: 225px;
word-break: keep-all;
font-size: 13px;
font-weight: 500;
line-height: 16px;
letter-spacing: 0px;
text-align: left;
color: #6B7684;

`;

export const PutButton = styled.button`
width: 52px;
height: 32px;
padding: 8px, 14px, 8px, 15px;
border-radius: 8px;
background: #3182F6;
color: white;
border-color: transparent;
font-family: Pretendard;
font-size: 13px;
font-weight: 500;
line-height: 16px;
letter-spacing: 0px;
text-align: center;
`;