import React from "react";
import { ComponentFactory, RDPBaseProps } from "../utils/ComponentFactory";
import { classes } from "../utils/css";
import { css } from "./_private";

export enum SplashPosition {
  LEFT = "left",
  RIGHT = "right",
  CENTRE = "centre"
}

export interface SplashProps
  extends React.DialogHTMLAttributes<HTMLElement>,
    RDPBaseProps<HTMLElement> {
  /** The positioning to use to render the splash children, using an enum `SplashPosition` {LEFT, CENTRE, RIGHT} */
  position?: SplashPosition;
}

export const Splash: React.FC<SplashProps> = ({
  children,
  position = SplashPosition.LEFT,
  ...baseProps
}) => {
  if (!baseProps.tag) baseProps.open = true;
  return (
    <ComponentFactory
      defaultTag="dialog"
      fixedClassName={classes(css, css.mod`${position}`)}
      {...baseProps}
    >
      {children}
    </ComponentFactory>
  );
};
