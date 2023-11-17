import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import NavigationRow from '../components/NavigationRow';
import BackButton from '../components/NavigationRow/BackButton';
import CancelButton from '../components/NavigationRow/CancelButton';
import theme from '../common/styles/theme';
import GlobalStyle from '../common/styles/GlobalStyle';

const meta = {
  title: 'week8/NavigationRow',
  component: NavigationRow,
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
} satisfies Meta<typeof NavigationRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <BackButton />,
  },
};

export const Payment: Story = {
  args: {
    children: (
      <>
        <BackButton />
        <CancelButton />
      </>
    ),
  },
};
