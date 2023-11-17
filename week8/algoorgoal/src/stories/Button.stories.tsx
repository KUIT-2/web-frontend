import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Button from '../common/components/Button';

const meta = {
  title: 'week8/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: '담기',
    width: '54px',
    height: '32px',
    color: 'primary',
  },
};
