import React, { useState } from "react";
import { ComponentFactory, RDPBaseProps } from "../utils/ComponentFactory";
import { bem } from "../utils/css";
import { SectionGroupContext } from "./_private";

export interface SectionGroupProps extends RDPBaseProps<HTMLElement> {}

export const SectionGroup: React.FC<SectionGroupProps> = ({
  children,
  ...baseProps
}) => {
  const [active, setActive] = useState<string | null>(null);
  const css = bem`rdp-section-group`;
  return (
    <SectionGroupContext.Provider
      value={{
        active,
        setActive
      }}
    >
      <ComponentFactory defaultTag="div" fixedClassName={css} {...baseProps}>
        {children}
      </ComponentFactory>
    </SectionGroupContext.Provider>
  );
};
