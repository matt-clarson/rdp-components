import React from "react";
import { css } from "./_private";
import { ComponentFactory, RDPBaseProps } from "../utils/ComponentFactory";

export interface JoinedContentRaisedProps extends RDPBaseProps<HTMLElement> {}

export const JoinedContentRaised: React.FC<JoinedContentRaisedProps> = ({
  children,
  ...baseProps
}) => (
  <div className={css.elem`raised-wrapper`.name}>
    <ComponentFactory
      defaultTag="section"
      fixedClassName={css.elem`raised`}
      {...baseProps}
    >
      {children}
    </ComponentFactory>
  </div>
);
