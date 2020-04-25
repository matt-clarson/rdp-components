import React from "react";
import { ComponentFactory, RDPBaseProps } from "../utils/ComponentFactory";
import { css } from "./_private";

export interface ListItemTextProps extends RDPBaseProps<HTMLElement> {
  /** If true, renders the ListItemText as smaller, positioned under a sibling ListItemText that doesn't have the `secondary` prop set to true */
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
