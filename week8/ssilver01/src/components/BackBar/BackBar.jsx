import React from "react";
import { useLocation, useNavigate, Link} from "react-router-dom";

import useCartStore from "../../store/cartStore";

import * as S from "./BackBar.styles";


const BackBar = () => {
  //주문 취소
  const cancelMenu = useCartStore((state) => state.cancelMenus);
  const cancelStore = useCartStore((state) => state.cancelStore);

  //뒤로 가기 기능
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleCancel = () => {
    console.log("!");
    cancelMenu();
    cancelStore();
    
  };

  return (
    
    <S.BackBar>
        <S.StyledBackIcon onClick={handleGoBack}/>
        {/* Cart 페이지인 경우만 취소 버튼 */}
        {useLocation().pathname === "/Cart" && <Link to="/Store"><S.CancelButton onClick={handleCancel}>주문취소</S.CancelButton></Link>}
    </S.BackBar>
  );
};

export default BackBar;
