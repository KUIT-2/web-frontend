import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ThemeProvider } from 'styled-components';
import OrderBar from '../components/OrderBar';
import theme from '../common/styles/theme';
import { Normalize } from 'styled-normalize';
import GlobalStyle from '../common/styles/GlobalStyle';

const meta = {
  title: 'week8/OrderBar',
  component: OrderBar,
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
} satisfies Meta<typeof OrderBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
