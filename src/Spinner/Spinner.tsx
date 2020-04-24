import React from "react";
import { ComponentFactory, RDPBaseProps } from "../utils/ComponentFactory";
import { bem } from "../utils/css";
import { useMeasureString } from "../utils/measure-string";

import "./styles/spinner.scss";

export enum SpinnerSize {
  EXTRA_SMALL = "xs",
  SMALL = "s",
  MEDIUM = "m",
  LARGE = "l",
  EXTRA_LARGE = "xl"
}

const sizes = { xs: 60, s: 110, m: 160, l: 210, xl: 310 };

export interface SpinnerProps extends RDPBaseProps<HTMLElement> {
  size?: SpinnerSize;
  message?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = SpinnerSize.MEDIUM,
  message = "Loading...",
  ...baseProps
}) => {
  const { width: messageWidth } = useMeasureString(message);
  const css = bem`rdp-spinner`;
  const dropMessage = messageWidth > sizes[size];
  return (
    <ComponentFactory defaultTag="div" fixedClassName={css} {...baseProps}>
      <i className={css.elem`spinner`.mod`${size.toString()}`.name} />
      <span
        className={
          dropMessage
            ? css.elem`message`.mod`drop`.name
            : css.elem`message`.name
        }
      >
        {message}
      </span>
    </ComponentFactory>
  );
};
