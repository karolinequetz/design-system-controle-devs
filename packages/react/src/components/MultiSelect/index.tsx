import React from 'react';
import Select, { components, OptionProps } from 'react-select';
import { Options } from '../../models/select';
import * as Styles from './styles';
import { Checkbox } from '../Checkbox';

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
  onChange: () => void;
  select: SelectProps;
  checkbox?: boolean;
}

const InputOption = ({ children, ...props }: OptionProps) => {
  return (
    <components.Option {...props}>
      <Checkbox
        root={{ checked: props.isSelected }}
        text={{ label: children, classText: Styles.text() }}
      />
    </components.Option>
  );
};

export const MultiSelect = ({
  select,
  checkbox,
  onChange,
}: MultiSelectProps) => {
  return (
    <Select
      {...select}
      onChange={() => onChange}
      className={Styles.select()}
      isMulti
      classNames={{
        multiValueLabel: () => Styles.label(),
        multiValueRemove: () => Styles.close(),
        option: ({ isSelected }) => {
          if (isSelected) {
            return Styles.selectedOption();
          }
          return Styles.option();
        },
      }}
      components={
        checkbox
          ? {
              Option: InputOption,
            }
          : undefined
      }
    />
  );
};
