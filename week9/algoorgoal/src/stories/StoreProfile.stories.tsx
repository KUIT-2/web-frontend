import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import StoreProfile from '../components/Store/StoreProfile';

const meta = {
  title: 'week8/StoreProfile',
  component: StoreProfile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StoreProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
