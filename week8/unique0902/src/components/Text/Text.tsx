import React from 'react';
import { SText } from './Text.styles';

interface Props {
  children: React.ReactNode;
  fontSize: string;
  fontWeight: string;
  textColor: string;
}

const Text: React.FC<Props> = ({
  children,
  fontSize,
  fontWeight,
  textColor,
}: Props) => {
  return (
    <SText $fontSize={fontSize} $fontWeight={fontWeight} $textColor={textColor}>
      {children}
    </SText>
  );
};

export default Text;
