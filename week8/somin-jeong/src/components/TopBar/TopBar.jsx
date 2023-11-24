import React from "react";
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';

import useCartStore from "../../store/cartStore";
import { BackIcon } from "../../assets/images";

const Top = styled.div`
    height: 41px;
    width: 390px;
    box-sizing: border-box;
    display: flex;
    justify-content : space-between;
`;

const BackBtn = styled.div`
    width: 24px;
    height: 24px;
    margin: 7px 0px 10px 10px;
`;

const OrderCancel = styled.div`
    color: #333D4B;
    font-family: Pretendard-SemiBold;
    font-size: 16px;
    line-height: normal;
    width: 56px;
    height: 19px;
    margin: 9px 15px 10px 0px;
`;

const TopBar = ({ subBtn }) => {
    const navigate = useNavigate();
    const clearCartMenus = useCartStore((state) => state.clearCartMenus);

    const handleGoBack = () => {
      // 뒤로가기
      navigate(-1);
    };

    const handleOrderCancel = () => {
      navigate(`/store`);
      clearCartMenus();
    };

    return (
      <Top>
        <BackBtn onClick={handleGoBack}>
          <BackIcon />
        </BackBtn>
        <OrderCancel onClick={handleOrderCancel}>{subBtn}</OrderCancel>
      </Top>
    );
  };
  
  export default TopBar;