import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import FoodCategoryRow from '../components/Menu/FoodCategoryRow';

const meta = {
  title: 'week8/FoodCategoryRow',
  component: FoodCategoryRow,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FoodCategoryRow>;

export default meta;
type Story = StoryObj<typeof FoodCategoryRow>;

export const Primary: Story = {
  args: {
    foodCategory: '샐러드',
  },
};
