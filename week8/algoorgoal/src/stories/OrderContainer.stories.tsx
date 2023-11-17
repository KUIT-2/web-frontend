import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ThemeProvider } from 'styled-components';
import OrderAmountContainer from '../components/OrderBar/OrderAmountContainer';
import theme from '../common/styles/theme';
import { Normalize } from 'styled-normalize';
import GlobalStyle from '../common/styles/GlobalStyle';

const meta = {
  title: 'week8/OrderAmountContainer',
  component: OrderAmountContainer,
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
} satisfies Meta<typeof OrderAmountContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    orderAmount: 12345,
  },
};
