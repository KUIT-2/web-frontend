import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  reactRouterParameters,
  withRouter,
} from 'storybook-addon-react-router-v6';

import Order from '../pages/Order';

const meta = {
  title: 'Page/Order',
  component: Order,
  decorators: [withRouter],
} satisfies Meta<typeof Order>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    reactRouter: reactRouterParameters({
      routing: {
        path: '/order',
        handle: 'Order',
      },
    }),
  },
};
