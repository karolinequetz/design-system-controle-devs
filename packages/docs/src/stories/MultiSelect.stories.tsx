import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import {
  MultiSelect,
  MultiSelectProps,
  Options,
} from '@controle-devs-ui/react';

export default {
  title: 'Components/MultiSelect',
  component: MultiSelect,
} as Meta<MultiSelectProps>;

const skills: Options[] = [
  { value: '1', label: 'React Js' },
  { value: '2', label: 'React Native' },
  { value: '3', label: 'Angular' },
  { value: '4', label: 'C#' },
];

export const Primary: StoryObj<MultiSelectProps> = {
  args: {
    select: {
      options: skills,
      placeholder: 'Selecione as opções',
      closeMenuOnSelect: true,
      hideSelectedOptions: true,
    },
    onChange: () => console.log('itens selecionados'),
  },
};

export const Checkbox: StoryObj<MultiSelectProps> = {
  args: {
    checkbox: true,
    select: {
      options: skills,
      placeholder: 'Selecione as opções',
      closeMenuOnSelect: false,
      hideSelectedOptions: false,
    },
    onChange: () => console.log('itens selecionados'),
  },
};
export const Default = () => {
  const [state, setState] = useState<string[]>([]);

  const onChangeHardSkills = (selectedOptions) => {
    const options = selectedOptions.map((option) => option.label);
    setState(options);
  };

  return (
    <div>
      <MultiSelect
        checkbox={true}
        select={{
          options: skills,
          placeholder: 'Selecione...',
        }}
        onChange={onChangeHardSkills}
      />

      <div className="dark:text-white">{JSON.stringify(state)}</div>
    </div>
  );
};
