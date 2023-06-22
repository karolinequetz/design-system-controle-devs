'use client';
import React from 'react';
import Select, {
  components,
  OptionProps,
  CSSObjectWithLabel,
  Props,
} from 'react-select';
import { Options } from '../../models/select';
import * as Styles from './styles';
import { Checkbox } from '../Checkbox';

export interface MultiSelectProps extends Props<Options> {
  checkbox?: boolean;
}

const InputOption = ({ children, ...props }: OptionProps<Options>) => {
  return (
    <components.Option
      className={props.isSelected ? Styles.selectedOption() : Styles.option()}
      {...props}
    >
      <Checkbox
        root={{ defaultChecked: props.isSelected }}
        text={{ label: children, classText: Styles.text() }}
      />
    </components.Option>
  );
};

export const MultiSelect = ({ checkbox, ...props }: MultiSelectProps) => {
  const customStyles = {
    option: (base: CSSObjectWithLabel) => ({
      ...base,
      backgroundColor: 'none',
    }),
  };
  return (
    <Select
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
      {...props}
    />
  );
};
