import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import FoodImage from '../components/Menu/FoodItem/FoodImage';

const meta = {
  title: 'week8/FoodImage',
  component: FoodImage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FoodImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
