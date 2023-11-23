import React from "react";
import * as S from "./index.styles";

export default function BackButton() {
  return (
    <S.PrimaryButton type="button" onClick={() => {}}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.675 20.475C15.375 20.475 15.075 20.375 14.875 20.075L7.375 12.575C6.875 12.075 6.875 11.375 7.375 10.875L14.875 3.375C15.375 2.875 16.075 2.875 16.575 3.375C17.075 3.875 17.075 4.575 16.575 5.075L9.775 11.775L16.475 18.475C16.975 18.975 16.975 19.675 16.475 20.175C16.275 20.375 15.975 20.475 15.675 20.475Z"
          fill="#191F28"
        />
      </svg>
    </S.PrimaryButton>
  );
}
