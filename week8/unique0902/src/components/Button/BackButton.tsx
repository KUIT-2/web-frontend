import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './BackButton.styles';

const BackButton: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return <Button onClick={handleClick}>{'<'}</Button>;
};

export default BackButton;
