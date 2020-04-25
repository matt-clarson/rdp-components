import React from "react";
import { ComponentFactory, RDPBaseProps } from "../utils/ComponentFactory";
import { bem } from "../utils/css";

export enum FloatContent {
  LEFT = "left",
  RIGHT = "right"
}

export interface JoinedContentProps extends RDPBaseProps<HTMLElement> {
  /** Sets the layout of the joined content, using an enum `FloatContent` {LEFT, RIGHT}. LEFT will position the raised section of the JoinedContent on the left, and RIGHT will position it on the right */
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
