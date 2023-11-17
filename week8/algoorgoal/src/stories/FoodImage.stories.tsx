import { ThemeProvider } from 'styled-components';
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Normalize } from 'styled-normalize';

import theme from '../common/styles/theme';
import GlobalStyle from '../common/styles/GlobalStyle';
import FoodImage from '../components/Menu/FoodItem/FoodImage';

const meta = {
  title: 'week8/FoodImage',
  component: FoodImage,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <>
        <Normalize />
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      </>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof FoodImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
