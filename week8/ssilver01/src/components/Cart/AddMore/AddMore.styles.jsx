import styled from "styled-components";
import { ReactComponent as AddIcon } from "./Add.svg";

export const Add = styled.div`
  display: flex;
  width: 100%px;
  height: 60px;
  justify-content: center;
  align-items: center;

  border-top: 1px solid #E5E8EB;
`;

export const AddText = styled.span`
  color: #3182f6;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-right:4px;
`;

export const StyledAddIcon = styled(AddIcon)`
  width: 12px;
  height: 12px;
  flex-shrink: 0;
`;


