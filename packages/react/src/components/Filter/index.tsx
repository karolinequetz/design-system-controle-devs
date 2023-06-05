import React, { useState } from 'react';
import { FilterIcon } from 'lucide-react';
import { Button } from '../Button';
import { Select } from '../Select';
import { Label } from '../Label';
import * as Styles from './styles';

export interface FilterOption {
  value: string;
  label: string;
}

export interface FilterProps {
  filterOptions: { label: string; options: FilterOption[] }[];
  items: string[];
  onFilter: (filteredItems: string[]) => void;
}

export const Filter = ({ filterOptions, items, onFilter }: FilterProps) => {
  const [selectedValues, setSelectedValues] = useState<{
    [key: string]: string;
  }>({});
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleOptionChange = (filterLabel: string, value: string) => {
    setSelectedValues((prevSelectedValues) => ({
      ...prevSelectedValues,
      [filterLabel]: value,
    }));
  };

  const handleFilterToggle = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleSearch = () => {
    const filteredItems = items.filter((item) => {
      for (const filterOption of filterOptions) {
        const selectedValue = selectedValues[filterOption.label];
        if (
          selectedValue &&
          selectedValue !== '' &&
          !filterOption.options.some((option) => option.value === selectedValue)
        ) {
          return false;
        }
      }
      return true;
    });

    onFilter(filteredItems);
  };

  return (
    <div className={Styles.container()}>
      <Button
        icon={<FilterIcon className={Styles.icon()} />}
        intent="transparent"
        className={Styles.iconButton()}
        onClick={handleFilterToggle}
      />

      {isFilterOpen && (
        <div className={Styles.filterContainer()}>
          {filterOptions.map((filterOption) => (
            <div key={filterOption.label}>
              <Label className={Styles.label()}>{filterOption.label}</Label>
              <Select
                options={filterOption.options.map((option) => ({
                  value: option.value,
                  label: option.label,
                }))}
                placeholder="Selecione uma opção"
                descriptiveTextForAccessibility="Selecione uma opção"
                root={{
                  defaultValue: selectedValues[filterOption.label] || '',
                  onValueChange: (value) =>
                    handleOptionChange(filterOption.label, value),
                }}
              />
            </div>
          ))}
          <div className={Styles.searchButton()}>
            <Button text="Buscar" onClick={handleSearch}>
              Buscar
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
