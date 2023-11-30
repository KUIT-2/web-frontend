import styled from "styled-components";
import tempImage from "../../assets/arrow_back.svg";

export const WrapStore = styled.div`
  width: 390px;
  height: 100%;
`;

export const StoreTop = styled.div`
  position: relative;
  top: 50px;
  left: 24px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e5e8eb;
  margin-bottom: 10px;
`;

export const StoreName = styled.div`
  color: #191f28;

  font-family: Pretendard;
  font-size: 26px;
  font-weight: 700;
  line-height: 31px;
  letter-spacing: 0px;
  text-align: left;
`;

export const BackArrow = styled.button`
  background-image: url(${tempImage});
  position: fixed;
  width: 24px;
  height: 24px;
  top: 10px;
  left: 10px;
  padding: 3px, 7.05px, 3.53px, 7px;
  border: none;
  background-color: #fff;
`;

export const ReviewSentence = styled.div`
  margin-top: 7px;
  margin-bottom: 18px;
`;

export const ReviewStar = styled.span`
  width: 18px;
  height: 19px;
  color: #ffd158;
`;

export const ReviewNumber = styled.span`
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #4e5968;
`;

export const ReviewCnt = styled.span`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: left;
  color: #4e5968;
`;

export const InfoSentence = styled.div`
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 550;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  color: #4e5968;
  margin-bottom: 10px;
`;

export const InfoQuestion = styled.span`
  margin-right: 10px;
`;

export const InfoAnswer = styled.span``;

export const ShowMenu = styled.div`
  margin-top: 80px;
  margin-left: 24px;
`;

export const Salad = styled.div`
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: #6b7684;
`;
