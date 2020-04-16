import React from "react";
import { ComponentFactory, RDPBaseProps } from "../utils/ComponentFactory";
import { css } from "./Form";

import "../styles/form.scss";

export interface FormContentProps extends RDPBaseProps<HTMLElement> {}

export const FormContent: React.FC<FormContentProps> = ({
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
