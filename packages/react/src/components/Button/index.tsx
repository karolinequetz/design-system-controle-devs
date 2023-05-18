import React from "react";
import "../../styles/tailwind.css";
import * as Styles from "./styles";
export interface ButtonProps {
  text: string;
}

export const Button = ({ text, ...props }: ButtonProps) => (
  <button
    {...props}
    className="bg-blue-900 hover:bg-gray100 text-gray-500 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
  >
    {text}
  </button>
);
