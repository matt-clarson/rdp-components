import React from "react";
import kebabCase from "lodash/kebabCase";
import { ComponentFactory, RDPBaseProps } from "../utils/ComponentFactory";

export interface ThemeProps extends RDPBaseProps<HTMLElement> {
  colours: { [key: string]: string };
}

const toCSSVariable = (name: string) => `--rdp-theme-${kebabCase(name)}`;

export const Theme: React.FC<ThemeProps> = ({
  colours,
  children,
  ...baseProps
}) => {
  const processedColours = Object.entries(colours).reduce(
    (acc, [key, value]) => ({ ...acc, [toCSSVariable(key)]: value }),
    {}
  );
  return (
    <ComponentFactory
      fixedClassName="rdp-theme-root"
      defaultTag="span"
      style={processedColours}
      {...baseProps}
    >
      {children}
    </ComponentFactory>
  );
};
