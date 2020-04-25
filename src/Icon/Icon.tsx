import React from "react";
import startCase from "lodash/startCase";
import { ComponentFactory, RDPBaseProps } from "../utils/ComponentFactory";
import { bem } from "../utils/css";

import "../styles/icons.css";

interface IconProps extends RDPBaseProps<HTMLElement> {
  icon: string;
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
