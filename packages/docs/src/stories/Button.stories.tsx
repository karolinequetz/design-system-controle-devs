import type { StoryObj, Meta } from '@storybook/react';
import { SunIcon } from '@radix-ui/react-icons';
import { Button, ButtonProps } from '@controle-devs-ui/react';
import React from 'react';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta<ButtonProps>;

export const DefaultButton: StoryObj<ButtonProps> = {
  args: {
    text: 'Default Button',
    size: 'medium',
    onClick: () => {
      console.log('Default Button clicked');
    },
  },
};

export const PrimaryButton: StoryObj<ButtonProps> = {
  args: {
    text: 'Primary Button',
    intent: 'primary',
    size: 'medium',
    onClick: () => {
      console.log('Primary Button clicked');
    },
  },
};

export const SecondaryButton: StoryObj<ButtonProps> = {
  args: {
    text: 'Secondary Button',
    intent: 'secondary',
    size: 'medium',
    onClick: () => {
      console.log('Secondary Button clicked');
    },
  },
};

export const MenuButton: StoryObj<ButtonProps> = {
  args: {
    intent: 'menuButton',
    size: 'small',
    onClick: () => {
      console.log('Menu Button clicked');
    },
    imageSrc: 'path/to/image.jpg',
    alt: 'Button Image',
  },
};

export const IconButton: StoryObj<ButtonProps> = {
  args: {
    intent: 'transparent',
    size: 'medium',
    onClick: () => {
      console.log('Transparent Button clicked');
    },
    icon: <SunIcon />,
  },
};
