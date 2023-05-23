import React from 'react';
import { Meta } from '@storybook/react';
import { Dropdown } from '@controle-devs-ui/react';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as Meta;

const Template = () => <Dropdown />;

export const Default = Template.bind({});
