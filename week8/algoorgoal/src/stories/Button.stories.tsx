import { ThemeProvider } from 'styled-components';
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Normalize } from 'styled-normalize';

import theme from '../common/styles/theme';
import GlobalStyle from '../common/styles/GlobalStyle';
import Button from '../common/components/Button';

const meta = {
  title: 'week8/Button',
  component: Button,
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: '담기',
    width: '54px',
    height: '32px',
    color: 'primary',
  },
};
