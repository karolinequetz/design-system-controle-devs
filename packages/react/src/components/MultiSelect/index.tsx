import React from "react";
import Select, { MultiValue, GroupBase } from "react-select";
import { Options } from "../../models/select";
import makeAnimated from "react-select/animated";

export interface MultiSelectProps {
  options: (Options | GroupBase<Options>)[];
  placeholder?: string;
  setState: (value: (string | number | GroupBase<string>)[]) => void;
  name?: string;
  isClearable?: boolean;
  isSearchable?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  closeMenuOnSelect?: boolean;
}

export const MultiSelect = ({
  options,
  placeholder = "Selecione as opções",
  name,
  setState,
  isClearable,
  isSearchable,
  isDisabled,
  isLoading,
  closeMenuOnSelect,
}: MultiSelectProps) => {
  const animatedComponents = makeAnimated();
  const onChange = (option: MultiValue<Options | GroupBase<Options>>) => {
    setState((option as Options[]).map((item: Options) => item.value));
  };

  return (
    <Select
      options={options}
      name={name}
      onChange={() => onChange}
      components={animatedComponents}
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
