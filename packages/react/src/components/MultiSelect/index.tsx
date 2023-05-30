import React from 'react';
import Select, { MultiValue } from 'react-select';
import { Options } from '../../models/select';

export interface MultiSelectProps {
  options: Options[];
  placeholder?: string;
  setState: (value: string[]) => void;
  name?: string;
  isClearable?: boolean;
  isSearchable?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  closeMenuOnSelect?: boolean;
}

export const MultiSelect = ({
  options,
  placeholder = 'Selecione as opções',
  name,
  isClearable,
  isSearchable,
  isDisabled,
  isLoading,
  closeMenuOnSelect,
  setState,
}: MultiSelectProps) => {
  const onChange = (option: MultiValue<Options>) => {
    setState((option as Options[]).map((item: Options) => item.value));
  };

  return (
    <Select
      options={options}
      name={name}
      onChange={onChange}
      isMulti
      placeholder={placeholder}
      isClearable={isClearable}
      isSearchable={isSearchable}
      isDisabled={isDisabled}
      isLoading={isLoading}
      closeMenuOnSelect={closeMenuOnSelect}
    />
  );
};
