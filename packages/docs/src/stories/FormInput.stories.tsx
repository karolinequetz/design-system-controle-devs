import type { StoryObj, Meta } from '@storybook/react';
import { FormInput, FormInputProps } from '@controle-devs-ui/react';

export default {
  title: 'Components/FormInput',
  component: FormInput,
} as Meta<FormInputProps>;

export const Default: StoryObj<FormInputProps> = {
  args: {
    label: 'Digite aqui',
    labelRoot: {
      htmlFor: 'teste',
      asChild: false,
    },
  },
};
