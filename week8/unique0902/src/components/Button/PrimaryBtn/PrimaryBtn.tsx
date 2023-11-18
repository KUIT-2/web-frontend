import React from 'react';
import { PrimaryButton } from './PrimaryBtn.styles';

type Props = {
  children: React.ReactNode;
  handleClick: () => void;
  isActivated: boolean;
  isFull?: boolean;
};

const PrimaryBtn: React.FC<Props> = ({
  children,
  handleClick,
  isActivated,
  isFull,
}: Props) => {
  return (
    <PrimaryButton
      onClick={handleClick}
      type={'button'}
      $isActivated={isActivated}
      $isFull={isFull}
    >
      {children}
    </PrimaryButton>
  );
};

export default PrimaryBtn;
