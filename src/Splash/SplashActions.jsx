import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "../utils/ComponentFactory";
import { classes } from "../utils/css";
import { css as baseCss } from "../Splash";

import "../styles/splash.scss";

const SplashActions = ({ position = "default", children, ...baseProps }) => {
  const css = baseCss.elem`actions`;
  return (
    <ComponentFactory
      defaultTag="nav"
      fixedClassName={classes(css, css.mod`${position}`)}
      {...baseProps}
    >
      {children}
    </ComponentFactory>
  );
};

SplashActions.propTypes = {
  children: PropTypes.node.isRequired,
  left: PropTypes.bool,
  right: PropTypes.bool,
  centre: PropTypes.bool
};

export default SplashActions;
