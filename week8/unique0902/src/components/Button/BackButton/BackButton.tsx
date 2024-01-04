import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BackBtn } from './BackButton.styles';
import { LeftIcn } from '../../../asset/img/icon';
import { color } from '../../../styles/Theme';
const BackButton: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <BackBtn onClick={handleClick}>
      <LeftIcn width={24} height={24} fill={color.gray_900} />
    </BackBtn>
  );
};

export default BackButton;
