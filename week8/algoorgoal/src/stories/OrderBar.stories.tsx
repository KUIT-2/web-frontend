import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import OrderBar from '../components/common/OrderBar';

const meta = {
  title: 'week8/OrderBar',
  component: OrderBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof OrderBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
