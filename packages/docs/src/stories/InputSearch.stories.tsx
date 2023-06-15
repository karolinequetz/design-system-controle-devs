import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { SearchInput, SearchInputProps } from '@controle-devs-ui/react';

export default {
  title: 'Components/SearchInput',
  component: SearchInput,
} as Meta;

const Template: StoryFn<SearchInputProps> = (args) => <SearchInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Pesquisar',
  onChange: () => console.log('Pesquisar'),
};
