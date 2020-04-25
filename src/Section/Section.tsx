import React, { useContext, useRef } from "react";
import nanoid from "nanoid";
import { ComponentFactory, RDPBaseProps } from "../utils/ComponentFactory";
import { bem } from "../utils/css";
import { SectionGroupContext } from "./_private";

export interface SectionProps extends RDPBaseProps<HTMLElement> {
  /** If true, the Section will be isplayed as 'flat' - i.e. with a thin border rather than a drop shadow effect */
  flat?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  flat,
  children,
  ...baseProps
}) => {
  const componentId = useRef<string | null>(null);
  componentId.current = componentId.current ?? nanoid();
  const sectionGroup = useContext(SectionGroupContext);
  const css = bem`rdp-section`;
  const isInGroup = !!sectionGroup.setActive;

  let className;
  if (isInGroup)
    className =
      sectionGroup.active === componentId.current
        ? css.mod`raised`
        : css.mod`flat`;
  else className = flat ? css.mod`flat` : css.mod`raised`;
  const onMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    if (isInGroup) sectionGroup.setActive?.(componentId.current);
    if (baseProps.onMouseEnter) baseProps.onMouseEnter(event);
  };
  const onMouseLeave = (event: React.MouseEvent<HTMLElement>) => {
    if (isInGroup) sectionGroup.setActive?.(null);
    if (baseProps.onMouseLeave) baseProps.onMouseLeave(event);
  };

  return (
    <ComponentFactory
      defaultTag="section"
      fixedClassName={className}
      {...{ ...baseProps, onMouseEnter, onMouseLeave }}
    >
      {children}
    </ComponentFactory>
  );
};
