import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import StoreProfile from '../components/StoreProfile';
import theme from '../common/styles/theme';
import GlobalStyle from '../common/styles/GlobalStyle';

const meta = {
  title: 'week8/StoreProfile',
  component: StoreProfile,
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
} satisfies Meta<typeof StoreProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
