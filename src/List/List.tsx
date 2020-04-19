import React from "react";
import { ComponentFactory, RDPBaseProps } from "../utils/ComponentFactory";
import { bem } from "../utils/css";

import "../styles/list.scss";

export interface ListProps extends RDPBaseProps<HTMLElement> {}

export const css = bem`rdp-list`;

export const List: React.FC<ListProps> = ({ children, ...baseProps }) => (
  <ComponentFactory defaultTag="ul" fixedClassName={css} {...baseProps}>
    {children}
  </ComponentFactory>
);
