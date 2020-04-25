import React from "react";
import { ComponentFactory, RDPBaseProps } from "../utils/ComponentFactory";
import { css } from "./_private";

export interface ListItemProps
  extends React.LiHTMLAttributes<HTMLElement>,
    RDPBaseProps<HTMLElement> {}

export const ListItem: React.FC<ListItemProps> = ({
  children,
  ...baseProps
}) => (
  <ComponentFactory
    defaultTag="li"
    fixedClassName={css.elem`item`}
    {...baseProps}
  >
    {children}
  </ComponentFactory>
);
