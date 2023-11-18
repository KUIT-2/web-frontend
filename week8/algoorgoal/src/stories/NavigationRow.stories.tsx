import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import NavigationRow from '../components/common/NavigationRow';
import BackButton from '../components/common/NavigationRow/BackButton';
import CancelButton from '../components/common/NavigationRow/CancelButton';

const meta = {
  title: 'week8/NavigationRow',
  component: NavigationRow,
  parameters: {
    layout: 'centered',
  },
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
