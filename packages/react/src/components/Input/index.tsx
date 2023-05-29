import React, { InputHTMLAttributes } from 'react';

import * as Styles from './styles';

export const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => {
  return <input {...props} className={Styles.input()} />;
};
