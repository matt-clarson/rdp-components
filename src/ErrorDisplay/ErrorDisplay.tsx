import React from "react";
import { isElement } from "react-is";
import { ComponentFactory, RDPBaseProps } from "../utils/ComponentFactory";
import { Icon } from "../Icon";
import { bem } from "../utils/css";

import "../styles/error.scss";

export type DisplayableError = React.ReactNode | Error;

export interface ErrorDisplayProps extends RDPBaseProps<HTMLElement> {
  error: DisplayableError;
}

const css = bem`rdp-error`;

const wrapError = (error: DisplayableError) => {
  const errorContent = error instanceof Error ? error.message : error;
  return (
    <p key={JSON.stringify(errorContent)} className={css.elem`error-text`.name}>
      {errorContent}
    </p>
  );
};

const processError = (error: DisplayableError) => {
  if (isElement(error)) return error;
  else if (Array.isArray(error)) return error.map(wrapError);
  else return wrapError(error);
};

export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({
  error,
  ...baseProps
}) => {
  return (
    <ComponentFactory defaultTag="div" fixedClassName={css} {...baseProps}>
      {error && (
        <span className={css.elem`message`.name}>
          <span className={css.elem`message-lead`.name}>
            <Icon className={css.elem`message-icon`.name} icon="error" />
            Error
          </span>
          <br />
          {processError(error)}
        </span>
      )}
    </ComponentFactory>
  );
};
