import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BackBtn } from './BackButton.styles';
import { AiOutlineLeft } from 'react-icons/ai';
const BackButton: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <BackBtn onClick={handleClick}>
      <AiOutlineLeft />
    </BackBtn>
  );
};

export default BackButton;
