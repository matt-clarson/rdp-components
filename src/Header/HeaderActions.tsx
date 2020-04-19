import React from "react";
import { ComponentFactory, RDPBaseProps } from "../utils/ComponentFactory";
import { css } from "./Header";

import "../styles/header.scss";

export interface HeaderActionsProps extends RDPBaseProps<HTMLElement> {}

export const HeaderActions: React.FC<HeaderActionsProps> = ({ children }) => (
  <ComponentFactory defaultTag="div" fixedClassName={css.elem`actions`}>
    {children}
  </ComponentFactory>
);
