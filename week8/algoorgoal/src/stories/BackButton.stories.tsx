import { ThemeProvider } from 'styled-components';
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Normalize } from 'styled-normalize';
import BackButton from '../components/NavigationRow/BackButton';
import theme from '../common/styles/theme';
import GlobalStyle from '../common/styles/GlobalStyle';

const meta = {
  title: 'week8/BackButton',
  component: BackButton,
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
} satisfies Meta<typeof BackButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
