import React from "react";
import { ComponentFactory, RDPBaseProps } from "../utils/ComponentFactory";
import { css } from "./Header";

export interface HeaderTitleProps extends RDPBaseProps<HTMLHeadingElement> {}

export const HeaderTitle: React.FC<HeaderTitleProps> = ({
  children,
  ...baseProps
}) => (
  <h1 className={css.elem`title`.name}>
    <ComponentFactory
      defaultTag="span"
      fixedClassName={css.elem`title-content`}
      {...baseProps}
    >
      {children}
    </ComponentFactory>
  </h1>
);
