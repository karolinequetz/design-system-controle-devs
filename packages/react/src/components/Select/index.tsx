'use client';
import React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { Options } from '../../models/select';
import * as Styles from './styles';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons';

interface RootProps {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void | (() => void);
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: () => void;
  name?: string;
  disabled?: boolean;
  required?: boolean;
}

interface ItemProps {
  disabled?: boolean;
  textValue?: string;
}

interface PortalProps {
  container: () => HTMLElement;
}

interface ContentProps {
  onCloseAutoFocus?: () => void;
  onEscapeKeyDown?: () => void;
  onPointerDownOutside?: () => void;
  position?: 'item-aligned' | 'popper';
  side?: 'top' | 'right' | 'bottom' | 'left';
  sideOffset?: number;
  align?: 'start' | 'center' | 'end';
  alignOffset?: number;
  avoidCollisions?: boolean;
  collisionBoundary?: Element | null | Array<Element | null>;
  collisionPadding?: number;
  arrowPadding?: number;
  sticky?: 'partial' | 'always';
  hideWhenDetached?: boolean;
}

export interface SelectProps {
  options: Options[];
  placeholder?: string;
  descriptiveTextForAccessibility?: string;
  portal?: PortalProps;
  root?: RootProps;
  content?: ContentProps;
  item?: ItemProps;
}

export const Select = ({
  options,
  placeholder,
  descriptiveTextForAccessibility,
  portal,
  root,
  content,
  item,
}: SelectProps) => (
  <SelectPrimitive.Root {...root}>
    <SelectPrimitive.Trigger
      aria-label={descriptiveTextForAccessibility}
      className={Styles.selectTrigger()}
    >
      <SelectPrimitive.Value placeholder={placeholder ?? 'Selecione...'} />
      <SelectPrimitive.Icon className={Styles.downArrowIcon()}>
        <ChevronDownIcon />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
    <SelectPrimitive.Portal container={portal?.container()}>
      <SelectPrimitive.Content {...content} className={Styles.selectContent()}>
        <SelectPrimitive.ScrollUpButton className={Styles.upArrowIcon()}>
          <ChevronUpIcon />
        </SelectPrimitive.ScrollUpButton>
        <SelectPrimitive.Viewport className={Styles.viewport()}>
          <SelectPrimitive.Group>
            {options.map((option) => (
              <SelectPrimitive.Item
                {...item}
                key={option.value}
                value={option.label}
                className={Styles.selectItem()}
              >
                <SelectPrimitive.ItemText>
                  {option.label}
                </SelectPrimitive.ItemText>
                <SelectPrimitive.ItemIndicator className={Styles.checkItem()}>
                  <CheckIcon />
                </SelectPrimitive.ItemIndicator>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Group>
        </SelectPrimitive.Viewport>
        <SelectPrimitive.ScrollDownButton className={Styles.scrollDownButton()}>
          <ChevronDownIcon />
        </SelectPrimitive.ScrollDownButton>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  </SelectPrimitive.Root>
);
