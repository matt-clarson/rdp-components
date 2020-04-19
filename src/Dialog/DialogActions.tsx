import React from "react";
import { ComponentFactory, RDPBaseProps } from "../utils/ComponentFactory";
import { css } from "./Dialog";

export interface DialogActionsProps extends RDPBaseProps<HTMLElement> {}

export const DialogActions: React.FC<DialogActionsProps> = ({
  children,
  ...baseProps
}) => (
  <ComponentFactory
    defaultTag="div"
    fixedClassName={css.elem`actions`}
    {...baseProps}
  >
    {children}
  </ComponentFactory>
);
