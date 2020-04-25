import React from "react";
import startCase from "lodash/startCase";
import { ComponentFactory, RDPBaseProps } from "../utils/ComponentFactory";
import { bem } from "../utils/css";

interface IconProps extends RDPBaseProps<HTMLElement> {
  /** The icon to display, using Material Icons */
  icon: string;
  /** The title of the icon, displayed to the user when the icon is hovered */
  title?: string;
}

export const Icon: React.FC<IconProps> = ({ icon, title, ...baseProps }) => (
  <ComponentFactory
    defaultTag="i"
    fixedClassName={bem`material-icons`}
    title={title ?? startCase(icon)}
    {...baseProps}
  >
    {icon}
  </ComponentFactory>
);
