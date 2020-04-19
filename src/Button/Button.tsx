import React from "react";
import { ComponentFactory, RDPButtonProps } from "../utils/ComponentFactory";
import { bem } from "../utils/css";

import "../styles/button.scss";

export interface ButtonProps extends RDPButtonProps {
  transparent?: boolean;
  danger?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  transparent,
  disabled,
  children,
  danger,
  ...baseProps
}) => {
  const css = transparent ? bem`rdp-transparent-button` : bem`rdp-button`;
  return (
    <ComponentFactory
      defaultTag="button"
      fixedClassName={
        disabled ? css.mod`disabled` : danger ? css.mod`danger` : css
      }
      disabled={disabled}
      {...{ ...baseProps, href: disabled ? undefined : baseProps.href }}
    >
      {children}
    </ComponentFactory>
  );
};
