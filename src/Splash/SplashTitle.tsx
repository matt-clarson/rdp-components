import React from "react";
import { ComponentFactory, RDPBaseProps } from "../utils/ComponentFactory";
import { css } from "./Splash";

import "../styles/splash.scss";

export interface SplashTitleProps extends RDPBaseProps<HTMLElement> {}

export const SplashTitle: React.FC<SplashTitleProps> = ({
  children,
  ...baseProps
}) => (
  <ComponentFactory
    defaultTag="header"
    fixedClassName={css.elem`title`}
    {...baseProps}
  >
    {children}
  </ComponentFactory>
);
