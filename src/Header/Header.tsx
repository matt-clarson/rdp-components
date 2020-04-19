import React from "react";
import { ComponentFactory, RDPBaseProps } from "../utils/ComponentFactory";
import { bem } from "../utils/css";

import "../styles/header.scss";

export interface HeaderProps extends RDPBaseProps<HTMLElement> {}

export const css = bem`rdp-header`;

export const Header: React.FC<HeaderProps> = ({ children, ...baseProps }) => (
  <ComponentFactory defaultTag="header" fixedClassName={css} {...baseProps}>
    {children}
  </ComponentFactory>
);
