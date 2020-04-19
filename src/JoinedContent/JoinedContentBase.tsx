import React from "react";
import { css } from "./JoinedContent";
import { Section } from "../Section";
import { RDPBaseProps } from "../utils/ComponentFactory";

import "../styles/joined-content.scss";

export interface JoinedContentBaseProps
  extends Omit<RDPBaseProps<HTMLElement>, "title"> {
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
