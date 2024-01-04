import styled from "styled-components";
import { ReactComponent as BackIcon } from "./BackIcon.svg";

//BackBtn
export const StyledBackIcon = styled(BackIcon)`
  width: 24px;
  height: 24px;
  margin: 10px;
  flex-shrink: 0;
  fill: #191f28;
`;

//BackBar
export const BackBar = styled.div`
  width: 390px;
  height: 44px;
  margin-top: 10px;
  display:flex;
  justify-content: space-between;
`;

export const CancelButton = styled.button`
  color: #333d4b;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border:none;
  background: #fff;
  margin-right: 10px;
`;
