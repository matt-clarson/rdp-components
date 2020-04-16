import React from "react";
import { ComponentFactory, RDPButtonProps } from "../utils/ComponentFactory";
import Icon from "../Icon";
import { css } from "./List";

export interface ListItemActionButtonProps extends RDPButtonProps {
  icon?: string;
}

export const ListItemActionButton: React.FC<ListItemActionButtonProps> = ({
  title,
  icon,
  onClick,
  children,
  ...baseProps
}) => (
  <ComponentFactory
    defaultTag="button"
    fixedClassName={css.elem`item-action-button`}
    {...{ onClick, ...baseProps }}
  >
    {icon && <Icon icon={icon} title={title} />}
    {children}
  </ComponentFactory>
);