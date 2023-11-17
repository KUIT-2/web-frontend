import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import OrderAmountContainer from '../components/OrderBar/OrderAmountContainer';

const meta = {
  title: 'week8/OrderAmountContainer',
  component: OrderAmountContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof OrderAmountContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    orderAmount: 12345,
  },
};
