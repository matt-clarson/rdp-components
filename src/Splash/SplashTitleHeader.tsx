import React from "react";
import { ComponentFactory, RDPBaseProps } from "../utils/ComponentFactory";
import { css } from "./Splash";

import "../styles/splash.scss";

export interface SplashTitleHeaderProps
  extends RDPBaseProps<HTMLHeadingElement> {}

export const SplashTitleHeader: React.FC<SplashTitleHeaderProps> = ({
  children,
  ...baseProps
}) => (
  <ComponentFactory
    defaultTag="h1"
    fixedClassName={css.elem`title-header`}
    {...baseProps}
  >
    {children}
  </ComponentFactory>
);