import React from "react";
import { ComponentFactory, RDPButtonProps } from "../utils/ComponentFactory";
import { bem } from "../utils/css";
import Icon from "../Icon";

import "../styles/button.scss";

export interface FloatingActionButtonProps extends RDPButtonProps {
  icon: string;
}

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
      {...baseProps}
    >
      <Icon icon={icon} />
    </ComponentFactory>
  );
};
