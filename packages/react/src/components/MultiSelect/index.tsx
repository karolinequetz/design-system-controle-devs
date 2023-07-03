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

export interface MultiSelectProps extends Props<Options> {
  checkbox?: boolean;
}

const InputOption = ({ children, ...props }: OptionProps<Options>) => {
  return (
    <components.Option
      className={props.isSelected ? Styles.selectedOption() : Styles.option()}
      {...props}
    >
      <div className={Styles.checkboxContent()}>
        <input
          className={Styles.checkbox()}
          type="checkbox"
          checked={props.isSelected}
          defaultChecked={props.isSelected}
        />
        <label className={Styles.text()}>{children}</label>
      </div>
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
