import React from "react";
import { ComponentFactory, RDPBaseProps } from "../utils/ComponentFactory";
import { bem, classes } from "../utils/css";

import "../styles/splash.scss";

export enum SplashPosition {
  LEFT = "left",
  RIGHT = "right",
  CENTRE = "centre"
}

export interface SplashProps
  extends React.DialogHTMLAttributes<HTMLElement>,
    RDPBaseProps<HTMLElement> {
  position?: SplashPosition;
}

export const css = bem`rdp-splash`;

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