import React from "react";
import { ComponentFactory, RDPBaseProps } from "../utils/ComponentFactory";
import { css } from "./List";

export interface ListItemTextProps extends RDPBaseProps<HTMLElement> {
  secondary?: boolean;
}

export const ListItemText: React.FC<ListItemTextProps> = ({
  children,
  secondary,
  ...baseProps
}) => (
  <ComponentFactory
    defaultTag="span"
    fixedClassName={
      secondary ? css.elem`item-text`.mod`secondary` : css.elem`item-text`
    }
    {...baseProps}
  >
    {children}
  </ComponentFactory>
);
