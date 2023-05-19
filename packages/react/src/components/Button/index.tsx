import React from "react";
export interface ButtonProps {
  text: string;
}

export const Button = ({ text, ...props }: ButtonProps) => (
  <button
    {...props}
    className="bg-secondary-purple hover:bg-gray100 text-gray-500 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
  >
    {text}
  </button>
);
