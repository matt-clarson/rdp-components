import React from "react";
import PropTypes from "prop-types";
import ComponentFactory from "../utils/ComponentFactory";
import Icon from "../Icon";
import { css } from "./List";

const ListItemActionButton = ({
  title,
  icon,
  onClick,
  children,
  ...baseProps
}) => (
  <ComponentFactory
    defaultTag="button"
    fixedClassName={css.elem`item-action-button`}
    {...{ onClick, ...baseProps }}
  >
    {icon && <Icon icon={icon} title={title} />}
    {children}
  </ComponentFactory>
);

ListItemActionButton.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node
};

export default ListItemActionButton;
