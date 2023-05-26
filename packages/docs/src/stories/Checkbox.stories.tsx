import type { StoryObj, Meta } from '@storybook/react';
import { Checkbox, CheckboxProps } from '@controle-devs-ui/react';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {
  args: {
    text: 'checkbox controle de devs',
    root: {
      defaultChecked: false,
      disabled: false,
      onCheckedChange: () => console.log('alterar checkbox'),
      checked: true,
      required: false,
      name: 'teste',
      value: 'teste1',
    },
    indicator: {
      asChild: false,
    },
  },
};

export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    text: 'checkbox desabilitado',
    root: {
      defaultChecked: true,
      disabled: false,
      onCheckedChange: () => console.log('alterar checkbox'),
      checked: true,
      required: false,
      name: 'disabled',
      value: 'disabled1',
    },
    indicator: {
      asChild: true,
    },
  },
};
