import React from 'react';
import { PrimaryButton } from './PrimaryBtn.styles';

type Props = {
  children: React.ReactNode;
  handleClick: () => void;
};

const PrimaryBtn: React.FC<Props> = ({ children, handleClick }: Props) => {
  return (
    <PrimaryButton onClick={handleClick} type={'button'}>
      {children}
    </PrimaryButton>
  );
};

export default PrimaryBtn;
