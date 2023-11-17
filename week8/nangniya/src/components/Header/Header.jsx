import React from "react";
import { LeftChevron } from "../../images";
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
      <LeftChevron onClick={goBack}></LeftChevron>
      {isCartPage ? (
        <S.CancelOrder onClick={cancelOrder}>주문취소</S.CancelOrder>
      ) : null}
    </S.StyledDiv>
  );
};

export default Header;
