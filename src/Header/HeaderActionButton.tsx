import React from "react";
import { ComponentFactory, RDPButtonProps } from "../utils/ComponentFactory";
import { Icon } from "../Icon";
import { css } from "./Header";

import "../styles/header.scss";

export interface HeaderActionButtonProps extends RDPButtonProps {
  icon?: string;
}

export const HeaderActionButton: React.FC<HeaderActionButtonProps> = ({
  children,
  disabled,
  icon,
  onClick,
  ...baseProps
}) => (
  <ComponentFactory
    defaultTag="button"
    fixedClassName={css.elem`action-button`}
    disabled={disabled}
    onClick={onClick}
    {...{ ...baseProps, href: disabled ? undefined : baseProps.href }}
  >
    {icon && <Icon icon={icon} />}
    {children}
  </ComponentFactory>
);
