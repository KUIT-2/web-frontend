import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import StoreDetail from '../components/StoreProfile/StoreDetail';

const meta = {
  title: 'week8/StoreDetail',
  component: StoreDetail,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StoreDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
