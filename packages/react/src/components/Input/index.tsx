import React from 'react';
import * as Label from '@radix-ui/react-label';

import { LabelRootProps } from '../../models/input';

import * as Styles from './styles';

export interface InputProps {
  label: string;
  labelRoot?: LabelRootProps;
}

export const Input = ({ label }: InputProps) => {
  return (
    <div className={Styles.div()}>
      <Label.Root className={Styles.label()}>{label}</Label.Root>
      <input className={Styles.input()} type="text" />
    </div>
  );
};
