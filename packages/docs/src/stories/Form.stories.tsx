import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { Form, FormProps } from '@controle-devs-ui/react';

export default {
  title: 'Components/Form',
  component: Form,
} as Meta<FormProps>;

export const Primary: StoryObj<FormProps> = {
  args: {
    field: [
      {
        fieldName: 'email',
        label: 'E-mail',
        message: [
          { match: 'valueMissing', description: 'Por favor digite seu e-mail' },
          {
            match: 'typeMismatch',
            description: 'Por favor digite um e-mail válido',
          },
        ],
        control: (
          <input
            className="box-border w-full  shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]  selection:bg-blackA9"
            type="email"
            required
          />
        ),
      },
      {
        fieldName: 'sugestao',
        label: 'Sugestão',
        message: [
          {
            match: 'valueMissing',
            description: 'Por favor deixe uma sugestão',
          },
        ],
        control: (
          <textarea
            className="box-border w-full inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
            required
          />
        ),
      },
    ],
    submitButtonName: 'Enviar',
  },
};
