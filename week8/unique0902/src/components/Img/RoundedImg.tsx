import React from 'react';
import { Rounded } from '../../store/type/style';
import { SRoundedImage } from './RoundedImg.styles';

type Props = {
  src: string;
  alt: string;
  rounded: Rounded;
};

const RoundedImg: React.FC<Props> = ({ src, alt, rounded }: Props) => {
  return <SRoundedImage src={src} alt={alt} $rounded={rounded} />;
};

export default RoundedImg;
