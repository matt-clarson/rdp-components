import React from "react";
import { css } from "./JoinedContent";
import { Section } from "../Section";
import { RDPBaseProps } from "../utils/ComponentFactory";

export interface JoinedContentBaseProps
  extends Omit<RDPBaseProps<HTMLElement>, "title"> {
  /** The title of the `JoinedContent` section - the title of whatever content you are displaying */
  title: React.ReactNode;
}

export const JoinedContentBase: React.FC<JoinedContentBaseProps> = ({
  title,
  children,
  ...baseProps
}) => (
  <Section
    flat
    className={css.elem`base`.name}
    {...{ ...baseProps, tag: baseProps.tag ?? "div" }}
  >
    <h2 className={css.elem`title`.name}>{title}</h2>
    {children}
  </Section>
);
