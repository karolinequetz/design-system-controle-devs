import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { Form, FormProps, Input } from '@controle-devs-ui/react';

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
        control: <Input type="email" required />,
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
            className="bg-blackA5 shadow-blackA9 dark:text-white dark:bg-gray-900 inline-flex h-[35px] w-[200px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9 dark:focus:shadow-[0_0_0_2px_purple] "
            required
          />
        ),
      },
    ],
    submitButton: {
      text: 'Enviar',
      className: ' w-full inline-flex h-9 items-center justify-start ',
    },
    submit: () => console.log('formulário'),
  },
};
