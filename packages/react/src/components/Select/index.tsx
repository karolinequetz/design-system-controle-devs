"use client";
import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";

import * as Styles from "./styles";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";

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
  <div className="absolute flex flex-col bg-opacity-3 bg-orange-400 w-64 left-0 top-10 bottom-0 border-l border-green border-opacity-10 overflow-x-hidden overflow-y-auto">
    <SelectPrimitive.Root>
      <SelectPrimitive.Trigger
        aria-label={descriptiveTextForAccessibility}
        className={Styles.selectTrigger()}
      >
        <SelectPrimitive.Value placeholder={placeholder ?? "Selecione..."} />
        <SelectPrimitive.Icon className={Styles.downArrowIcon()}>
          <ChevronDownIcon />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content className={Styles.selectContent()}>
          <SelectPrimitive.ScrollUpButton className={Styles.upArrowIcon()}>
            <ChevronUpIcon />
          </SelectPrimitive.ScrollUpButton>
          <SelectPrimitive.Viewport className="p-5">
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
          </SelectPrimitive.Viewport>
          <SelectPrimitive.ScrollDownButton
            className={Styles.scrollDownButton()}
          >
            <ChevronDownIcon />
          </SelectPrimitive.ScrollDownButton>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  </div>
);
