import React from "react";
import { Bem, classes } from "./css";

export interface RDPBaseProps<T extends HTMLElement>
  extends React.HTMLAttributes<T> {
  /** Set the underlying element to be the provided tag. Note that many components will still expect to operate as a specific HTML element or elements,
   * so for example setting a <Button> element to have tag = 'ul' will probably break the component in some way */
  tag?: React.ElementType;
}

type RDPButton = HTMLAnchorElement | HTMLButtonElement;

export interface RDPButtonProps
  extends React.AnchorHTMLAttributes<RDPButton>,
    Omit<React.ButtonHTMLAttributes<RDPButton>, "type">,
    RDPBaseProps<RDPButton> {
  /** Set the button as disabled, making it unclickable */
  disabled?: boolean;
  /** Called when the button is clicked */
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
}

export interface ComponentFactoryProps
  extends React.AllHTMLAttributes<HTMLElement>,
    RDPBaseProps<HTMLElement> {
  fixedClassName: Bem | string;
  className?: string;
  defaultTag: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}

export const ComponentFactory: React.FC<ComponentFactoryProps> = ({
  fixedClassName,
  className,
  defaultTag,
  tag,
  children,
  ...props
}) => {
  const Tag: React.ElementType = tag ?? defaultTag;
  return (
    <Tag className={classes(fixedClassName, className ?? "")} {...props}>
      {children}
    </Tag>
  );
};
