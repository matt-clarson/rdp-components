import React from "react";
import { ComponentFactory, RDPBaseProps } from "../utils/ComponentFactory";
import { bem } from "../utils/css";

import "../styles/joined-content.scss";

export enum FloatContent {
  LEFT = "left",
  RIGHT = "right"
}

export interface JoinedContentProps extends RDPBaseProps<HTMLElement> {
  floatContent?: FloatContent;
}

export const css = bem`rdp-joined-content`;

export const JoinedContent: React.FC<JoinedContentProps> = ({
  children,
  floatContent = FloatContent.LEFT,
  ...baseProps
}) => (
  <ComponentFactory
    fixedClassName={css.mod`${floatContent}`}
    defaultTag="section"
    {...baseProps}
  >
    {children}
  </ComponentFactory>
);
