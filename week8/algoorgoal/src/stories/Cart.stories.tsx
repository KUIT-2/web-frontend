import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  reactRouterParameters,
  withRouter,
} from 'storybook-addon-react-router-v6';

import Cart from '../pages/Cart';

const meta = {
  title: 'Page/Cart',
  component: Cart,
  decorators: [withRouter],
} satisfies Meta<typeof Cart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    reactRouter: reactRouterParameters({
      routing: {
        path: '/cart',
        handle: 'Cart',
      },
    }),
  },
};
