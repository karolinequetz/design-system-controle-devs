import { Filter, FilterProps, FilterOption } from '@controle-devs-ui/react';
import React from 'react';

export default {
  title: 'Components/Filter',
  component: Filter,
};

const filterOptions: { label: string; options: FilterOption[] }[] = [
  {
    label: 'Opção 1',
    options: [
      { value: 'value1', label: 'Valor 1' },
      { value: 'value2', label: 'Valor 2' },
    ],
  },
  {
    label: 'Opção 2',
    options: [
      { value: 'value3', label: 'Valor 3' },
      { value: 'value4', label: 'Valor 4' },
    ],
  },
];

const Template = (args: FilterProps) => <Filter {...args} />;

export const Default = Template.bind({});
Default.args = {
  filterOptions,
  buttonText: 'Filtrar',
  placeholder: 'Selecione uma opção',
  onFilter: (filteredItems: string[]) => {
    console.log('Filtered items:', filteredItems);
  },
};
