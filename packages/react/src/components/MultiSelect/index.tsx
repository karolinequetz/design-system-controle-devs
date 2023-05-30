import React from 'react';
import Select, { MultiValue } from 'react-select';
import { Options } from '../../models/select';
import * as Styles from './styles';

interface SelectProps {
  options: Options[];
  placeholder?: string;
  name?: string;
  isClearable?: boolean;
  isSearchable?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  closeMenuOnSelect?: boolean;
  hideSelectedOptions?: boolean;
}
export interface MultiSelectProps {
  setState: (value: string[]) => void;
  select: SelectProps;
}

export const MultiSelect = ({ select, setState }: MultiSelectProps) => {
  const onChange = (option: MultiValue<Options>) => {
    setState((option as Options[]).map((item: Options) => item.value));
  };

  return (
    <Select
      {...select}
      onChange={() => onChange}
      className={Styles.select()}
      isMulti
      classNames={{
        multiValueLabel: () => Styles.label(),
        multiValueRemove: () => Styles.close(),
        option: () => Styles.option(),
      }}
    />
  );
};
