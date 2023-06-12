'use client';
import React from 'react';
import Select, {
  components,
  OptionProps,
  CSSObjectWithLabel,
  OnChangeValue,
} from 'react-select';
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
  menuIsOpen?: boolean;
}
export interface MultiSelectProps {
  onChange: (options: OnChangeValue<Options, true>) => void;
  select: SelectProps;
  checkbox?: boolean;
}

const InputOption = ({ children, ...props }: OptionProps) => {
  return (
    <components.Option
      className={props.isSelected ? Styles.selectedOption() : Styles.option()}
      {...props}
    >
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
  const customStyles = {
    option: (base: CSSObjectWithLabel) => ({
      ...base,
      backgroundColor: 'none',
    }),
  };
  return (
    <Select
      {...select}
      onChange={(options) => onChange(options as Options[])}
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
      styles={customStyles}
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
