import React from "react";
import { ComponentFactory, RDPBaseProps } from "../utils/ComponentFactory";
import { classes } from "../utils/css";
import { SplashPosition, css as baseCss } from "./Splash";

import "../styles/splash.scss";

export interface SplashActionsProps extends RDPBaseProps<HTMLElement> {
  position?: SplashPosition;
}

export const SplashActions: React.FC<SplashActionsProps> = ({
  position = SplashPosition.LEFT,
  children,
  ...baseProps
}) => {
  const css = baseCss.elem`actions`;
  return (
    <ComponentFactory
      defaultTag="nav"
      fixedClassName={classes(css, css.mod`${position}`)}
      {...baseProps}
    >
      {children}
    </ComponentFactory>
  );
};
