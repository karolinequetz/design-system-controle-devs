import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Tooltip, TooltipProps } from '@controle-devs-ui/react';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as Meta<TooltipProps>;

const getElement = () =>
  document.getElementById('storybook-root') as HTMLElement;

export const Default: StoryObj<TooltipProps> = {
  args: {
    children: <span className="dark:text-white">Tooltip</span>,
    message: 'Componente Tooltip',

    portal: {
      container: getElement,
    },
  },
};
