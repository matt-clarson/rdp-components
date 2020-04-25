import React from "react";
import { ComponentFactory, RDPBaseProps } from "../utils/ComponentFactory";
import { classes } from "../utils/css";
import { SplashPosition, css as baseCss } from "./Splash";

export interface SplashTitleSubHeaderProps
  extends RDPBaseProps<HTMLParagraphElement> {
  /** The positioning to use to render the splash subheader, using an enum `SplashPosition` {LEFT, CENTRE, RIGHT} */
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
