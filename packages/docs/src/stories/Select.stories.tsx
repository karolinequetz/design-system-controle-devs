import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { Select, SelectProps } from '@controle-devs-ui/react';

export default {
  title: 'Components/Select',
  component: Select,
  decorators: [
    (Story) => (
      <div
        id="decorator"
        className="absolute flex flex-col bg-dark w-64 left-0 top-10 bottom-0 border-l overflow-x-hidden overflow-y-auto"
      >
        <Story />
      </div>
    ),
  ],
} as Meta<SelectProps>;

const getElement = () =>
  document.getElementById('storybook-root') as HTMLElement;

export const Primary: StoryObj<SelectProps> = {
  args: {
    placeholder: 'Selecione as hard skills ...',
    descriptiveTextForAccessibility: 'select com opções de hard skills ',
    portal: {
      container: getElement,
    },
    options: [
      { value: '1', label: 'React Js' },
      { value: '2', label: 'React Native' },
      { value: '3', label: 'Angular' },
      { value: '4', label: 'C#' },
    ],
  },
};

export const Disabled: StoryObj<SelectProps> = {
  args: {
    placeholder: 'Selecione as hard skills ...',
    descriptiveTextForAccessibility: 'select com opções de hard skills ',
    portal: {
      container: getElement,
    },
    content: {
      position: 'popper',
      sideOffset: 5,
      align: 'center',
      avoidCollisions: true,
      hideWhenDetached: true,
    },
    item: {
      disabled: true,
    },
    options: [
      { value: '1', label: 'React Js' },
      { value: '2', label: 'React Native' },
      { value: '3', label: 'Angular' },
      { value: '4', label: 'C#' },
    ],
  },
};
