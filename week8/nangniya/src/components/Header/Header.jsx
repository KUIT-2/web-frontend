import React from "react";
import { ReactComponent as Chevron } from "../../images/chevron.svg";
import { useNavigate } from "react-router-dom";
import * as S from "./Header.styles";
import useCartStore from "../../store/cartStore";

const Header = ({ isCartPage }) => {
  const removeStore = useCartStore((state) => state.removeStore);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const cancelOrder = () => {
    removeStore();
  };
  return (
    <S.StyledDiv>
      <Chevron onClick={goBack}></Chevron>
      {isCartPage ? (
        <S.CancelOrder onClick={cancelOrder}>주문취소</S.CancelOrder>
      ) : null}
    </S.StyledDiv>
  );
};

export default Header;
