import type { StoryObj, Meta } from '@storybook/react';
import { Input, InputProps } from '@controle-devs-ui/react';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta<InputProps>;

export const Default: StoryObj<InputProps> = {
  args: {
    label: 'Digite aqui',
    labelRoot: {
      htmlFor: 'teste',
      asChild: false,
    },
  },
};
