import React from "react";
import { ComponentFactory, RDPBaseProps } from "../utils/ComponentFactory";
import { css } from "./_private";

export interface HeaderProps extends RDPBaseProps<HTMLElement> {}

export const Header: React.FC<HeaderProps> = ({ children, ...baseProps }) => (
  <ComponentFactory defaultTag="header" fixedClassName={css} {...baseProps}>
    {children}
  </ComponentFactory>
);
