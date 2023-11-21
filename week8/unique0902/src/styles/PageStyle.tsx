import styled from 'styled-components';
import { color, fontSize, fontWeight } from './Theme';

export const PageTitle = styled.h1`
  color: ${color.gray_900};
  font-size: ${fontSize.md};
  font-weight: ${fontWeight.bold};
`;
export const PageSubTitle = styled.h2`
  color: ${color.gray_800};
  font-size: ${fontSize.xm};
  font-weight: ${fontWeight.medium};
`;
export const PageTitleSect = styled.section`
  padding-left: 24px;
  padding-top: 26px;
`;
export const PageFlexRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const PageTitleWithSubSect = styled(PageTitleSect)`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;
