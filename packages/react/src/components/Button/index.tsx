import React from "react";
import { ButtonProps } from "./styles";
import * as Styles from "./styles";

export const Button = ({
  text,
  intent,
  shape,
  size,
  imageSrc,
  alt,
  icon,
  ...props
}: ButtonProps) => {
  return (
    <button {...props} className={Styles.button({ intent, shape, size })}>
      {icon && <div className={Styles.buttonIcon()}>{icon}</div>}
      {imageSrc && (
        <img src={imageSrc} alt={alt} className={Styles.buttonImage()} />
      )}
      {text}
    </button>
  );
};
