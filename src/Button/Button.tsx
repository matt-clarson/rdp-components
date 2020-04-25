import React from "react";
import { ComponentFactory, RDPButtonProps } from "../utils/ComponentFactory";
import { bem } from "../utils/css";

export interface ButtonProps extends RDPButtonProps {
  /** Style the button as a 'Transparent' button */
  transparent?: boolean;
  /** Style the button as a 'Danger' button */
  danger?: boolean;
}

/**
 * A button component. Probably the simplest component there is.
 */
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
