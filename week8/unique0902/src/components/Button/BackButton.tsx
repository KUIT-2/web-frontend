import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './BackButton.styles';
import { AiOutlineLeft } from 'react-icons/ai';
const BackButton: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <Button onClick={handleClick}>
      <AiOutlineLeft />
    </Button>
  );
};

export default BackButton;
