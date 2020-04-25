import React from "react";
import { ComponentFactory, RDPBaseProps } from "../utils/ComponentFactory";
import { classes } from "../utils/css";
import { SplashPosition } from "./Splash";
import { css as baseCss } from "./_private";

export interface SplashActionsProps extends RDPBaseProps<HTMLElement> {
  position?: SplashPosition;
}

export const SplashActions: React.FC<SplashActionsProps> = ({
  /** The positioning to use to render the splash actions, using an enum `SplashPosition` {LEFT, CENTRE, RIGHT} */
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
