'use client';
import React, { ReactNode } from 'react';
import * as CheckboxInput from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

import * as Styles from './styles';

interface CheckboxRoot {
  defaultChecked?: boolean;
  checked?: boolean;
  onCheckedChange?: () => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
}

interface CheckboxIndicator {
  asChild?: boolean;
}
interface TextProps {
  label?: string | ReactNode;
  classText?: string;
}
export interface CheckboxProps {
  text?: TextProps;

  root?: CheckboxRoot;
  indicator?: CheckboxIndicator;
}
export const Checkbox = ({ text, root, indicator }: CheckboxProps) => (
  <CheckboxInput.Root {...root} className={Styles.checkboxRoot()}>
    <div className={Styles.checkboxContent()}>
      <CheckboxInput.Indicator
        {...indicator}
        className={Styles.checkboxContent()}
      >
        <CheckIcon className={Styles.checkboxIcon()} />
      </CheckboxInput.Indicator>
    </div>
    <span className={text?.classText || Styles.span()}>{text?.label}</span>
  </CheckboxInput.Root>
);
