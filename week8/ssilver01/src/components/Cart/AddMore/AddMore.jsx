import React from "react";
import { Link } from "react-router-dom";
import * as S from "./AddMore.styles";

const AddMore = () => {
  return (
    <Link to="/store" style={{ textDecoration: 'none' }}>
          <S.Add>
          <S.AddText>더 담기</S.AddText>
          <S.StyledAddIcon />
      </S.Add>
    </Link>
  );
};

export default AddMore;
