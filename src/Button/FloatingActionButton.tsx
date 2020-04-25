import React from "react";
import { ComponentFactory, RDPButtonProps } from "../utils/ComponentFactory";
import { bem } from "../utils/css";
import { Icon } from "../Icon";

import "../styles/button.scss";

export interface FloatingActionButtonProps extends RDPButtonProps {
  /** Sets the icon for the button, using Material Icons */
  icon: string;
}

/**
 * A Floating Action Button (FAB). Use this to provide a key call to action on your pages. Note that there should ideally only be one FAB per page
 */
export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  disabled,
  icon,
  ...baseProps
}) => {
  const css = bem`rdp-floating-action-button`;
  return (
    <ComponentFactory
      defaultTag="button"
      fixedClassName={disabled ? css.mod`disabled` : css}
      disabled={disabled}
      {...{ ...baseProps, href: disabled ? undefined : baseProps.href }}
    >
      <Icon icon={icon} />
    </ComponentFactory>
  );
};
