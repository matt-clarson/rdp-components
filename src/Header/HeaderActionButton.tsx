import React from "react";
import { ComponentFactory, RDPButtonProps } from "../utils/ComponentFactory";
import Icon from "../Icon";
import { css } from "./Header";

import "../styles/header.scss";

export interface HeaderActionButtonProps extends RDPButtonProps {
  icon?: string;
}

export const HeaderActionButton: React.FC<HeaderActionButtonProps> = ({
  onClick,
  children,
  icon,
  ...baseProps
}) => (
  <ComponentFactory
    defaultTag="button"
    fixedClassName={css.elem`action-button`}
    onClick={onClick}
    {...baseProps}
  >
    {icon && <Icon icon={icon} />}
    {children}
  </ComponentFactory>
);
