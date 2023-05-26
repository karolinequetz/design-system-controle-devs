import React from 'react';
import * as Label from '@radix-ui/react-label';

import { LabelRootProps } from '../../models/input';

import * as Styles from './styles';

export interface FormInputProps {
  label: string;
  labelRoot?: LabelRootProps;
}

export const FormInput = ({ label, labelRoot }: FormInputProps) => {
  return (
    <div className={Styles.div()}>
      <Label.Root className={Styles.label()} {...labelRoot}>
        {label}
      </Label.Root>
      <input className={Styles.input()} type="text" />
    </div>
  );
};
