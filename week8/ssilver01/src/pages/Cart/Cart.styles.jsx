import styled from "styled-components";

export const div = styled.div`
  width: 390px;
  height: 770px;
  border: 2px solid;
  position: relative;
`;
export const bar = styled.div`
  height: 16px;
  background: #f2f4f6;
`;
export const bar_W = styled.div`
  height: 16px;
  background: #fff;
`;

export const PriceDiv = styled.div`
  display: flex;
  padding: 9px 24px 9px 24px;
  justify-content: space-between;
  align-items: flex-start;
`;

export const PriceLabel = styled.span`
  color: #8b95a1;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Price = styled.span`
  color: #505967;
  text-align: right;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const TotalPriceLabel = styled.span`
  color: #4e5968;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const TotalPrice = styled.span`
  color: #4e5968;
  text-align: right;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  box-sizing: border-box;
  // width: max-content;
`;

export const minPrice = styled.div`
  color: #6b7684;
  text-align: center;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  position: absolute;
  bottom:12%;
  margin-left:110px;
`;

export const payButton = styled.button`
  display: inline-flex;
  height: 56px;
  padding: 18px 112px 19px 113px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border-radius: 16px;
  background: #d0dffb;
  border: none;
  position: absolute;
  bottom: 0;

  margin: 19px 20px 20px 20px;


  &:hover{
    background: #3182f6;
    cursor: pointer;
  }
`;
