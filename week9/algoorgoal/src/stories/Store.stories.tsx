import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  reactRouterParameters,
  withRouter,
} from 'storybook-addon-react-router-v6';

import Store from '../pages/Store';
import Cart from '../pages/Cart';

const meta = {
  title: 'Page/Store',
  component: Store,
  decorators: [withRouter],
} satisfies Meta<typeof Store>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        path: '/stores/:storeId',
        pathParams: {
          storeId: '1',
        },
      },
      routing: [
        {
          path: '/stores/:storeId',
          element: <Store />,
        },
        {
          path: '/cart',
          element: <Cart />,
        },
      ],
    }),
  },
};
