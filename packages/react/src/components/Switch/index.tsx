'use client';
import React from 'react';
import * as SwitchUI from '@radix-ui/react-switch';
import { SwitchRootProps, SwitchThumbProps } from '../../models/switch';
import * as Styles from './styles';

export interface SwitchProps {
  label: string;
  root: SwitchRootProps;
  thumb: SwitchThumbProps;
}

export const Switch = ({ label, root, thumb }: SwitchProps) => (
  <div className={Styles.container()}>
    <label className={Styles.label()}>{label}</label>
    <SwitchUI.Root
      className={Styles.switchRoot()}
      asChild={root.asChild}
      defaultChecked={root.defaultChecked}
      checked={root.checked}
      onCheckedChange={root.onCheckedChange}
      disabled={root.disabled}
      required={root.required}
      name={root.name}
      value={root.value}
    >
      <SwitchUI.Thumb
        className={Styles.switchThumb()}
        asChild={thumb.asChild}
      />
    </SwitchUI.Root>
  </div>
);
