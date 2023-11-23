import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import MenuItem from '../components/Store/Menu/FoodItem';

const meta = {
  title: 'week8/MenuItem',
  component: MenuItem,
  parameters: {
    layout: 'full screen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    menuItem: {
      id: 1,
      name: '토마토 샐러드',
      isBest: true,
      price: 7600,
      ingredients: '계란, 옥수수, 양파, 올리브, 베이컨, 시저드레싱',
    },
  },
};
