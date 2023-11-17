import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import BackButton from '../components/NavigationRow/BackButton';

const meta = {
  title: 'week8/BackButton',
  component: BackButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BackButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
