import React from "react";
import { ComponentFactory, RDPBaseProps } from "../utils/ComponentFactory";
import { classes } from "../utils/css";
import { SplashPosition, css as baseCss } from "./Splash";

import "../styles/splash.scss";

export interface SplashTitleSubHeaderProps
  extends RDPBaseProps<HTMLParagraphElement> {
  position?: SplashPosition;
}

export const SplashTitleSubHeader: React.FC<SplashTitleSubHeaderProps> = ({
  children,
  position = SplashPosition.LEFT,
  ...baseProps
}) => {
  const css = baseCss.elem`title-sub-header`;
  return (
    <ComponentFactory
      defaultTag="p"
      fixedClassName={classes(css, css.mod`${position}`)}
      {...baseProps}
    >
      {children}
    </ComponentFactory>
  );
};
