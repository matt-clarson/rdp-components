import React from "react";
import PropTypes from "prop-types";
import startCase from "lodash/startCase";
import ComponentFactory from "./utils/ComponentFactory";
import { bem } from "./utils/css";

import "./styles/icons.css";

const Icon = ({ icon, title, ...baseProps }) => (
  <ComponentFactory
    defaultTag="i"
    fixedClassName={bem`material-icons`}
    title={title ?? startCase(icon)}
    {...baseProps}
  >
    {icon}
  </ComponentFactory>
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string
};

export default Icon;
