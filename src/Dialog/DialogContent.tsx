import React from "react";
import { ComponentFactory, RDPBaseProps } from "../utils/ComponentFactory";
import { css } from "./Dialog";

export interface DialogContentProps extends RDPBaseProps<HTMLElement> {}

export const DialogContent: React.FC<DialogContentProps> = ({
  children,
  ...baseProps
}) => (
  <ComponentFactory
    defaultTag="div"
    fixedClassName={css.elem`content`}
    {...baseProps}
  >
    {children}
  </ComponentFactory>
);
