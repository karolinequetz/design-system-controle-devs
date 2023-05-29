import React from 'react';
import { Meta } from '@storybook/react';
import { Switch, SwitchProps } from '@controle-devs-ui/react';

export default {
  title: 'Components/Switch',
  component: Switch,
} as Meta<SwitchProps>;

const Template = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Airplane Mode',
  root: {
    asChild: false,
    defaultChecked: false,
    checked: false,
    onCheckedChange: () => {},
    disabled: false,
    required: false,
    name: '',
    value: '',
  },
  thumb: {
    asChild: false,
  },
};
