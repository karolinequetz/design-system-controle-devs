import React from "react";
import "../../styles/index.css";
import * as Styles from "./styles";
export interface ButtonProps {
  text: string;
}

export const Button = ({ text, ...props }: ButtonProps) => (
  <button {...props} className={Styles.button()}>
    {text}
  </button>
);
