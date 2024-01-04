export type ColorType =
  | 'primary'
  | 'white'
  | 'danger'
  | 'base'
  | 'highlight'
  | 'muted';

export type SizeType =
  | 'extraSmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'extraLarge';

export interface ThemeType {
  color: Record<ColorType, string>;
  size: Record<SizeType, string>;
}

const theme: ThemeType = {
  color: {
    primary: '#3182F6',
    white: '#FFFFFF',
    danger: '#F04452',
    base: '#4E5968',
    highlight: '#333D4B',
    muted: '#6B7684',
  },
  size: {
    extraSmall: '12px',
    small: '14px',
    medium: '16px',
    large: '20px',
    extraLarge: '26px',
  },
};

export default theme;
