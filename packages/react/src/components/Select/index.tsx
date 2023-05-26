'use client';
import React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';

import * as Styles from './styles';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons';

interface OptionsProps {
  id: string | number;
  description: string;
}

export interface SelectProps {
  options: OptionsProps[];
  placeholder?: string;
  descriptiveTextForAccessibility?: string;
}

export const Select = ({
  options,
  placeholder,
  descriptiveTextForAccessibility,
}: SelectProps) => (
  <SelectPrimitive.Root>
    <SelectPrimitive.Trigger
      aria-label={descriptiveTextForAccessibility}
      className={Styles.selectTrigger()}
    >
      <SelectPrimitive.Value placeholder={placeholder ?? 'Selecione...'} />
      <SelectPrimitive.Icon className={Styles.downArrowIcon()}>
        <ChevronDownIcon />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content className={Styles.selectContent()}>
        <SelectPrimitive.ScrollUpButton className={Styles.upArrowIcon()}>
          <ChevronUpIcon />
        </SelectPrimitive.ScrollUpButton>

        <SelectPrimitive.Group>
          {options.map((option) => (
            <SelectPrimitive.Item
              key={option.id}
              value={option.description}
              className={Styles.selectItem()}
            >
              <SelectPrimitive.ItemText>
                {option.description}
              </SelectPrimitive.ItemText>
              <SelectPrimitive.ItemIndicator className={Styles.checkItem()}>
                <CheckIcon />
              </SelectPrimitive.ItemIndicator>
            </SelectPrimitive.Item>
          ))}
        </SelectPrimitive.Group>

        <SelectPrimitive.ScrollDownButton className={Styles.scrollDownButton()}>
          <ChevronDownIcon />
        </SelectPrimitive.ScrollDownButton>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  </SelectPrimitive.Root>
);
