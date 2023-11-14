import React from "react";
import styled from 'styled-components';

const Top = styled.div`
    height: 41px;
`;

const BackBtn = styled.div`
    width: 24px;
    height: 24px;
    margin: 7px 356px 10px 10px;
`;

const TopBar = () => {
    return (
      <Top>
        <BackBtn>{'>'}</BackBtn>
      </Top>
    );
  };
  
  export default TopBar;