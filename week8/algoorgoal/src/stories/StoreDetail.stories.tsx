import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import StoreDetail from '../components/StoreProfile/StoreDetail';
import theme from '../common/styles/theme';
import GlobalStyle from '../common/styles/GlobalStyle';

const meta = {
  title: 'week8/StoreDetail',
  component: StoreDetail,
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
} satisfies Meta<typeof StoreDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
