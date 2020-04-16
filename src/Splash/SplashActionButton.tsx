import React from "react";
import { ComponentFactory, RDPButtonProps } from "../utils/ComponentFactory";
import { css } from "./Splash";

import "../styles/splash.scss";

export interface SplashActionButtonProps extends RDPButtonProps {}

export const SplashActionButton: React.FC<SplashActionButtonProps> = ({
  children,
  ...baseProps
}) => (
  <ComponentFactory
    defaultTag="button"
    fixedClassName={css.elem`action-button`}
    {...baseProps}
  >
    {children}
  </ComponentFactory>
);
