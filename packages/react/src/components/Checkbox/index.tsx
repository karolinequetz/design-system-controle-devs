"use client";
import React from "react";
import * as CheckboxInput from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

import * as Styles from "./styles";

export interface CheckboxProps {
  text: string;
}
export const Checkbox = ({ text, ...props }: CheckboxProps) => (
  <CheckboxInput.Root {...props} className={Styles.checkboxRoot()}>
    <div className={Styles.inputDiv()}>
      <CheckboxInput.Indicator>
        <CheckIcon />
      </CheckboxInput.Indicator>
    </div>
    <span className={Styles.span()}>{text}</span>
  </CheckboxInput.Root>
);
