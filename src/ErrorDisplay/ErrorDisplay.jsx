import React from "react";
import { isElement } from "react-is";
import PropTypes from "prop-types";
import ComponentFactory from "../utils/ComponentFactory";
import Icon from "../Icon";
import { bem } from "../utils/css";

import "../styles/error.scss";

const css = bem`rdp-error`;

const wrapError = error => {
  const errorContent = error.message ?? error;
  return (
    <p key={errorContent} className={css.elem`error-text`}>
      {errorContent}
    </p>
  );
};

const processError = error => {
  if (isElement(error)) return error;
  else if (Array.isArray(error)) return error.map(wrapError);
  else return wrapError(error);
};

const ErrorDisplay = ({ error, ...baseProps }) => {
  return (
    <ComponentFactory defaultTag="div" fixedClassName={css} {...baseProps}>
      {error && (
        <span className={css.elem`message`}>
          <span className={css.elem`message-lead`}>
            <Icon className={css.elem`message-icon`} icon="error" />
            Error
          </span>
          <br />
          {processError(error)}
        </span>
      )}
    </ComponentFactory>
  );
};

const errorShape = PropTypes.shape({ message: PropTypes.string.isRequired });

ErrorDisplay.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    errorShape,
    PropTypes.arrayOf(errorShape)
  ])
};

export default ErrorDisplay;
