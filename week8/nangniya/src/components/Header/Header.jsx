import React from "react";
import { ReactComponent as Chevron } from "../../images/chevron.svg";
import { useNavigate } from "react-router-dom";
import * as S from "./Header.styles";

const Header = ({ isCartPage }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <S.StyledDiv>
      <Chevron onClick={goBack}></Chevron>
      {isCartPage ? <S.CancelOrder>주문취소</S.CancelOrder> : null}
    </S.StyledDiv>
  );
};

export default Header;
