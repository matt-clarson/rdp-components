import React from "react";
import { ComponentFactory, RDPBaseProps } from "../utils/ComponentFactory";
import { css } from "./Form";

export interface FormActionsProps extends RDPBaseProps<HTMLElement> {}

export const FormActions: React.FC<FormActionsProps> = ({
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
