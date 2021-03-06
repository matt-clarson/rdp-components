import React from "react";
import { ComponentFactory, RDPBaseProps } from "../utils/ComponentFactory";
import { css } from "./_private";

export interface ListProps extends RDPBaseProps<HTMLElement> {}

export const List: React.FC<ListProps> = ({ children, ...baseProps }) => (
  <ComponentFactory defaultTag="ul" fixedClassName={css} {...baseProps}>
    {children}
  </ComponentFactory>
);
