import React from "react";
import { ComponentFactory, RDPButtonProps } from "../utils/ComponentFactory";
import { css } from "./Splash";

import "../styles/splash.scss";

export interface SplashActionButtonProps extends RDPButtonProps {}

export const SplashActionButton: React.FC<SplashActionButtonProps> = ({
  children,
  disabled,
  ...baseProps
}) => (
  <ComponentFactory
    defaultTag="button"
    fixedClassName={css.elem`action-button`}
    disabled={disabled}
    {...{ ...baseProps, href: disabled ? undefined : baseProps.href }}
  >
    {children}
  </ComponentFactory>
);
