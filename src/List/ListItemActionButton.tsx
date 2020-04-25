import React from "react";
import { ComponentFactory, RDPButtonProps } from "../utils/ComponentFactory";
import { Icon } from "../Icon";
import { css } from "./List";

export interface ListItemActionButtonProps extends RDPButtonProps {
  /** Sets the icon for the button, using Material Icons */
  icon?: string;
}

export const ListItemActionButton: React.FC<ListItemActionButtonProps> = ({
  title,
  icon,
  onClick,
  disabled,
  children,
  ...baseProps
}) => (
  <ComponentFactory
    defaultTag="button"
    fixedClassName={css.elem`item-action-button`}
    disabled={disabled}
    {...{ onClick, ...baseProps, href: disabled ? undefined : baseProps.href }}
  >
    {icon && <Icon icon={icon} title={title} />}
    {children}
  </ComponentFactory>
);
