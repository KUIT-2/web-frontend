import { Color, FontSize, FontWeight, Rounded } from '../store/type/style';

export const color: Color = {
  primary_500: '#3182F6',
  primary_100: '#D0DFFB',
  white: '#FFFFFF',
  gray_900: '#191F28',
  gray_800: '#333D4B',
  gray_700: '#4E5968',
  gray_600: '#505967',
  gray_500: '#6B7684',
  gray_400: '#8b95a1',
  gray_200: '#ECECEC',
  warning: '#F04452',
  star: '#FFD158',
  border: '#f2f4f6',
  border_top: '#e5e8eb',
};

export const rounded: Rounded = {
  full: '27px',
  small: '8px',
};

export const flexRowStyle: string = `
  display: flex;
  flex: row;
  align-items: center;
`;

export const fontSize: FontSize = {
  xxs: '13px',
  xs: '15px',
  xxm: '16px',
  xm: '17px',
  base: '22px',
  md: '26px',
  lg: '32px',
};
export const fontWeight: FontWeight = {
  light: '300',
  normal: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
};
